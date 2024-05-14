/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package examen.chn.ExamenPractico.Services;

import examen.chn.ExamenPractico.Model.Prestamo;
import examen.chn.ExamenPractico.Repositories.PrestamoRepository;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.format.DateTimeParseException;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Usuario
 */

@Service
@Transactional
public class PrestamoService {
    @Autowired
     PrestamoRepository prestamoRepository;

    @Transactional (readOnly=true)
    public List<Prestamo> getPrestamo(){
     
        return prestamoRepository.findAll();
    }
    
    @Transactional (rollbackFor=Exception.class)
    public Prestamo createPrestamo( Prestamo prestamo) throws ParseException{

        return prestamoRepository.save(prestamo);
    }
    
     @Transactional(rollbackFor = Exception.class)
    public Prestamo updatePrestamo(Prestamo prestamo) throws ParseException {
        if (prestamoRepository.existsById(Integer.parseInt(prestamo.getSolicitudkey().toString())))  {
            return prestamoRepository.save(prestamo);
        } else {
            throw new RuntimeException("Prestamo no encontrado");
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
