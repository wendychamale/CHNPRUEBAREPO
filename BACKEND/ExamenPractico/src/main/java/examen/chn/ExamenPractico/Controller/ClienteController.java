/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package examen.chn.ExamenPractico.Controller;

import examen.chn.ExamenPractico.Dto.ClienteDto;
import examen.chn.ExamenPractico.Model.Cliente;
import examen.chn.ExamenPractico.Services.ClienteService;
import java.text.ParseException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Usuario
 */
@RestController
public class ClienteController {
    
    @Autowired
    ClienteService clienteService;
    
    @GetMapping("/")
	public String defaultPath(){
		return"Hola mundo lindo ;)"; 
	}
    @CrossOrigin(origins = "http://localhost:4200")  
    @GetMapping("/cliente/getCliente")
	public List<Cliente> getCliente(){
         return this.clienteService.getCliente(); 
	} 
        
    @CrossOrigin(origins = "http://localhost:4200")  
    @GetMapping("/cliente/getCliente/{id}")
    public Cliente buscarClientePorId(@PathVariable Integer id) {
        Cliente cliente = clienteService.buscarClientePorId(id);
        return cliente;
    }
     
    
    @CrossOrigin(origins = "http://localhost:4200")  
    @PostMapping("/cliente/addCliente")
	public Cliente addCliente(@RequestBody ClienteDto cliente) throws ParseException{
         return this.clienteService.createCliente(cliente); 
	} 
    
    @CrossOrigin(origins = "http://localhost:4200")    
    @PostMapping("/cliente/updateCliente")
	public Cliente updateCliente(@RequestBody ClienteDto cliente) throws ParseException{
         return this.clienteService.updateCliente(cliente); 
	} 
 }
