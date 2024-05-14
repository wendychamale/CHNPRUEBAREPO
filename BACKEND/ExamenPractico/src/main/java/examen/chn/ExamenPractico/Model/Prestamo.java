/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package examen.chn.ExamenPractico.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import java.math.BigDecimal;
import java.util.Date;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author Usuario
 */
@Getter
@Setter
@Entity
@Table(name = "prestamo", schema = "SIDEP")
public class Prestamo {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_prestamo")
    @SequenceGenerator(name = "SQ_prestamo", sequenceName = "SQ_prestamo", allocationSize = 1)
    @Column(name = "prestamokey")
    Long prestamokey;

    
    @ManyToOne
    @JoinColumn(name = "solicitudkey")
    SolicitudPrestamo solicitudkey;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "fechainicio")
    Date fechainicio;

    @ManyToOne
    @JoinColumn(name = "estadokey")
    private Estado estado;
    
    
    @Column(name = "saldopendiente")
    Double saldopendiente;
    
     @Column(name = "saldopendientecapital")
    Double saldopendientecapital;
    
}
