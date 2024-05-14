/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package examen.chn.ExamenPractico.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import java.math.BigDecimal;
import java.util.Date;
import java.util.Set;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author Usuario
 */
@Getter
@Setter
@Entity
@Table(name = "solicitud_prestamo", schema = "RRHH")
public class SolicitudPrestamo {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_solicitud_prestamo")
    @SequenceGenerator(name = "SQ_solicitud_prestamo", sequenceName = "SQ_solicitud_prestamo", allocationSize = 1)
    @Column(name = "solicitudkey")
    Long solicitudkey;

    @ManyToOne
    @JoinColumn(name = "clientekey")
    @JsonBackReference
    Cliente clientekey;

    @Column(name = "montosolicitado")
    BigDecimal montosolicitado;

    @Column(name = "plazosolicitado")
    Integer plazosolicitado;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "fechasolicitud")
    Date fechasolicitud;

    @ManyToOne
    @JoinColumn(name = "estadokey")
    private Estado estado;

    @Column(name = "observacion")
    String observacion;

    
    @Column(name = "tasainteres")
    BigDecimal tasainteres;

    @OneToMany(mappedBy = "solicitudkey", cascade = CascadeType.ALL, orphanRemoval = true)
     @JsonManagedReference
    private Set<Prestamo> prestamos;
}
