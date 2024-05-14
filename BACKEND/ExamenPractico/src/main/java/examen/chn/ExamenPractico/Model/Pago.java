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
@Table(name = "pago", schema = "SIDEP")
public class Pago {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_pago")
    @SequenceGenerator(name = "SQ_pago", sequenceName = "SQ_pago", allocationSize = 1)
    @Column(name = "pagokey")
    Long pagokey;

    
    @ManyToOne
    @JoinColumn(name = "prestamokey")
    Prestamo prestamokey;

    @Column(name = "montopagado")
    Double montopagado;
    
     @Column(name = "interescobrado")
    Double interescobrado;


    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "fechapago")
    Date fechapago;


}
