/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package examen.chn.ExamenPractico.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
@Table(name="cliente", schema="SIDEP")
public class Cliente {
    
    @Id 
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_Cliente")
    @SequenceGenerator(name = "SQ_Cliente", sequenceName = "SQ_Cliente", allocationSize = 1)
    @Column (name="clientekey")
    Integer clienteKey;
    
    @Column (name="nombre")
    String nombre;
    
    @Column (name="apellido")
    String apellido;
    
    @Column (name="CUI")
    Long CUI;
    
    @Temporal(TemporalType.TIMESTAMP)
    @Column (name="fechanac")
    Date fechaNac;
    
    @Column (name="direccion")
    String direccion;
    
    @Column (name="correo")
    String correo;
    
    @Column (name="telefono")
    Integer telefono;
              
}
