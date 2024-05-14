/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package examen.chn.ExamenPractico.Dto;

/**
 *
 * @author Usuario
 */
public class ClienteDto {
    Integer clientekey;
    String nombre;
    String apellido;
    String cui;
    String fechaNac;
    String direccion;
    String correo;
    String telefono;

    public ClienteDto() {
    }

    public Integer getClientekey() {
        return clientekey;
    }

    public void setClientekey(Integer clientekey) {
        this.clientekey = clientekey;
    }

  

    
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getCUI() {
        return cui;
    }

    public void setCUI(String CUI) {
        this.cui = CUI;
    }

    public String getFechaNac() {
        return fechaNac;
    }

    public void setFechaNac(String fechaNac) {
        this.fechaNac = fechaNac;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
    
    
}
