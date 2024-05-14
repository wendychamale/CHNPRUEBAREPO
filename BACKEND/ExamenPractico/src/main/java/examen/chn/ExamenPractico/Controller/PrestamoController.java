/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package examen.chn.ExamenPractico.Controller;

import examen.chn.ExamenPractico.Model.Prestamo;
import examen.chn.ExamenPractico.Services.PrestamoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Usuario
 */
@RestController
public class PrestamoController {
    
    @Autowired
    PrestamoService prestamoService;
    
    @CrossOrigin(origins = "http://localhost:4200") 
    @GetMapping("/prestamo/getPrestamo")
	public List<Prestamo> getPrestamo(){
         return this.prestamoService.getPrestamo(); 
	} 
  
 }
