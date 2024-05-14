/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package examen.chn.ExamenPractico.Dto;

import examen.chn.ExamenPractico.Model.Estado;
import java.math.BigDecimal;
import java.util.Date;

/**
 *
 * @author Usuario
 */
public class SolicitudDto {
    Long solicitudkey;

    Integer clientekey;
    
    BigDecimal montosolicitado;
    
    Integer plazosolicitado;
    String fechasolicitud;
    Integer estado;
   
    String observacion;
    
    BigDecimal tasainteres;

    public SolicitudDto() {
    }

    public Long getSolicitudkey() {
        return solicitudkey;
    }

    public void setSolicitudkey(Long solicitudkey) {
        this.solicitudkey = solicitudkey;
    }

    public Integer getClientekey() {
        return clientekey;
    }

    public void setClientekey(Integer clientekey) {
        this.clientekey = clientekey;
    }

    public BigDecimal getMontosolicitado() {
        return montosolicitado;
    }

    public void setMontosolicitado(BigDecimal montosolicitado) {
        this.montosolicitado = montosolicitado;
    }

    public Integer getPlazosolicitado() {
        return plazosolicitado;
    }

    public void setPlazosolicitado(Integer plazosolicitado) {
        this.plazosolicitado = plazosolicitado;
    }

    public String getFechasolicitud() {
        return fechasolicitud;
    }

    public void setFechasolicitud(String fechasolicitud) {
        this.fechasolicitud = fechasolicitud;
    }

    public Integer getEstado() {
        return estado;
    }

    public void setEstado(Integer estado) {
        this.estado = estado;
    }

    public String getObservacion() {
        return observacion;
    }

    public void setObservacion(String observacion) {
        this.observacion = observacion;
    }

    public BigDecimal getTasainteres() {
        return tasainteres;
    }

    public void setTasainteres(BigDecimal tasainteres) {
        this.tasainteres = tasainteres;
    }
    
    
}
