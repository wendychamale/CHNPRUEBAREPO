/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package examen.chn.ExamenPractico.Dto;

/**
 *
 * @author Usuario
 */
public class PagoDto {
    Integer pagokey;
    Integer prestamokey;
    Double montopagado;
    Double interescobrado;
    String fechapago;

    public PagoDto() {
    }

    public Integer getPagokey() {
        return pagokey;
    }

    public void setPagokey(Integer pagokey) {
        this.pagokey = pagokey;
    }

    public Integer getPrestamokey() {
        return prestamokey;
    }

    public void setPrestamokey(Integer prestamokey) {
        this.prestamokey = prestamokey;
    }

    public Double getMontopagado() {
        return montopagado;
    }

    public void setMontopagado(Double montopagado) {
        this.montopagado = montopagado;
    }

    public Double getInterescobrado() {
        return interescobrado;
    }

    public void setInterescobrado(Double interescobrado) {
        this.interescobrado = interescobrado;
    }

    public String getFechapago() {
        return fechapago;
    }

    public void setFechapago(String fechapago) {
        this.fechapago = fechapago;
    }
    
    

}
