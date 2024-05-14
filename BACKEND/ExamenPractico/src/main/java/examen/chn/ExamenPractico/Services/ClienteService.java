/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package examen.chn.ExamenPractico.Services;

import examen.chn.ExamenPractico.Dto.ClienteDto;
import examen.chn.ExamenPractico.Model.Cliente;
import examen.chn.ExamenPractico.Repositories.ClienteRepository;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Usuario
 */

@Service
@Transactional
public class ClienteService {
    @Autowired
     ClienteRepository clienteRepository;

    @Transactional (readOnly=true)
    public List<Cliente> getCliente(){
     
        return clienteRepository.findAll();
    }
    
     @Transactional (readOnly=true)
   public Cliente buscarClientePorId(Integer id) {
        return clienteRepository.findById(id).orElse(null);
    }

    
    @Transactional (rollbackFor=Exception.class)
    public Cliente createCliente( ClienteDto cliente) throws ParseException{
        Cliente c=new Cliente();
        c.setNombre(cliente.getNombre());
        c.setApellido(cliente.getApellido());
        c.setCUI(Long.parseLong(cliente.getCUI()));
        c.setCorreo(cliente.getCorreo());
        c.setDireccion(cliente.getDireccion());
        c.setTelefono(Integer.parseInt(cliente.getTelefono()));
        c.setFechaNac(this.convertirFecha(cliente.getFechaNac()));
        
        return clienteRepository.save(c);
    }
    
     @Transactional(rollbackFor = Exception.class)
    public Cliente updateCliente(ClienteDto clienteDto) throws ParseException {
        Optional<Cliente> optionalCliente = clienteRepository.findById(clienteDto.getClientekey());
    if (optionalCliente.isPresent()) {
        Cliente cliente = optionalCliente.get();
        cliente.setNombre(clienteDto.getNombre());
        cliente.setApellido(clienteDto.getApellido());
        cliente.setCUI(Long.parseLong(clienteDto.getCUI()));
        cliente.setCorreo(clienteDto.getCorreo());
        cliente.setDireccion(clienteDto.getDireccion());
        cliente.setTelefono(Integer.parseInt(clienteDto.getTelefono()));
        cliente.setFechaNac(this.convertirFecha(clienteDto.getFechaNac()));

        return clienteRepository.save(cliente);
    } else {
        throw new RuntimeException("Cliente no encontrado");
    }

    }
   
    private Date convertirFecha(String dateString) throws ParseException{
       String dateFormat = "dd/MM/yyyy";
       SimpleDateFormat sdf = new SimpleDateFormat(dateFormat);
        try {
            Date date = sdf.parse(dateString);
            System.out.println("Fecha convertida: " + date);
            return date;
        } catch (DateTimeParseException e) {
            System.err.println("Error al convertir la fecha: " + e.getMessage());
            return null;
        }
    }
}
