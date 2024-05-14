/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package examen.chn.ExamenPractico.Controller;

import examen.chn.ExamenPractico.Dto.SolicitudDto;
import examen.chn.ExamenPractico.Model.SolicitudPrestamo;
import examen.chn.ExamenPractico.Services.SolicitudPrestamoService;
import java.text.ParseException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Usuario
 */
@RestController
public class SolicitudPrestamoController {
    
    @Autowired
    SolicitudPrestamoService solicitudService;
    
    @CrossOrigin(origins = "http://localhost:4200")  
    @GetMapping("/solicitud/getSolicitud")
	public List<SolicitudPrestamo> getSolicitud(){
         return this.solicitudService.getSolicitudPrestamo(); 
	} 
        
    @CrossOrigin(origins = "http://localhost:4200")  
    @GetMapping("/solicitud/getSolicitud/{id}")
	public SolicitudPrestamo getSolicitudId(@PathVariable Integer id){
         return this.solicitudService.buscarSolicitudPorId(id); 
	} 
        
    @CrossOrigin(origins = "http://localhost:4200")     
    @PostMapping("/solicitud/addSolicitud")
	public SolicitudPrestamo addSolicitud(@RequestBody SolicitudDto solicitud) throws ParseException{
         return this.solicitudService.createSolicitudPrestamo(solicitud); 
	} 
    @CrossOrigin(origins = "http://localhost:4200")      
    @PostMapping("/solicitud/updateSolicitud")
	public SolicitudPrestamo updateSolicitud(@RequestBody SolicitudPrestamo solicitud) throws ParseException{
         return this.solicitudService.updateSolicitudPrestamo(solicitud); 
	} 
        
        
    @CrossOrigin(origins = "http://localhost:4200")      
    @PostMapping("/solicitud/cambioestadoSolicitud")
	public SolicitudPrestamo cambioestado(@RequestBody SolicitudDto solicitud) throws ParseException{
         return this.solicitudService.cambioestado(solicitud); 
	} 
 }
