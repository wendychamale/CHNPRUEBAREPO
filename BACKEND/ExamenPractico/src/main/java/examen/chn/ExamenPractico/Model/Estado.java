/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package examen.chn.ExamenPractico.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author Usuario
 */
@Getter
@Setter
@Entity
@Table(name = "estado", schema = "SIDEP")
public class Estado {
    @Id
     @Column(name = "estadokey")
    Long estadokey;

    @Column(name = "estado")
    String estado;

    @Column(name = "descripcion")
    String descripcion;
}
