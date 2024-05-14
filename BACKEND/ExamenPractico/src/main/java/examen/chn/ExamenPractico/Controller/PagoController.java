/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package examen.chn.ExamenPractico.Controller;

import examen.chn.ExamenPractico.Dto.PagoDto;
import examen.chn.ExamenPractico.Model.Cliente;
import examen.chn.ExamenPractico.Model.Pago;
import examen.chn.ExamenPractico.Services.PagoService;
import java.text.ParseException;
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
public class PagoController {
    
    @Autowired
    PagoService pagoService;
   
     @CrossOrigin(origins = "http://localhost:4200") 
    @PostMapping("/pago/addPago")
	public Pago addPago(@RequestBody PagoDto pago) throws ParseException{
         return this.pagoService.createPago(pago); 
	} 
        
        @CrossOrigin(origins = "http://localhost:4200")  
    @GetMapping("/pago/getPago/{id}")
    public PagoDto buscarClientePorId(@PathVariable Integer id) throws ParseException {
        PagoDto pago = this.pagoService.getCalculaPago(id);
        return pago;
    }
     
   
 }
