/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package examen.chn.ExamenPractico.Services;

import examen.chn.ExamenPractico.Dto.SolicitudDto;
import examen.chn.ExamenPractico.Model.Cliente;
import examen.chn.ExamenPractico.Model.Estado;
import examen.chn.ExamenPractico.Model.Prestamo;
import examen.chn.ExamenPractico.Model.SolicitudPrestamo;
import examen.chn.ExamenPractico.Repositories.ClienteRepository;
import examen.chn.ExamenPractico.Repositories.EstadoRepository;
import examen.chn.ExamenPractico.Repositories.PrestamoRepository;
import examen.chn.ExamenPractico.Repositories.SolicitudPrestamoRepository;
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
public class SolicitudPrestamoService {
    @Autowired
     SolicitudPrestamoRepository solicitudRepository;
    
     @Autowired
     ClienteRepository clienteR;

      @Autowired
     EstadoRepository estadoR;
            
     @Autowired
     PrestamoRepository prestamoR;
     
    @Transactional (readOnly=true)
    public List<SolicitudPrestamo> getSolicitudPrestamo(){
     
        return solicitudRepository.findAll();
    }
    
    @Transactional (rollbackFor=Exception.class)
    public SolicitudPrestamo createSolicitudPrestamo( SolicitudDto solicitud) throws ParseException{ 
        Estado estado= this.estadoR.findById(1).orElse(null);
        
        Cliente cliente = this.clienteR.findById(solicitud.getClientekey()).orElse(null);
        SolicitudPrestamo sol= new SolicitudPrestamo();
        sol.setClientekey(cliente);
        sol.setEstado(estado);
        sol.setClientekey(cliente);
        sol.setMontosolicitado(solicitud.getMontosolicitado());
        sol.setPlazosolicitado(solicitud.getPlazosolicitado());
        sol.setTasainteres(solicitud.getTasainteres());
        sol.setFechasolicitud(new Date());
        
        return solicitudRepository.save(sol);
    }
   @Transactional (readOnly=true)
   public SolicitudPrestamo buscarSolicitudPorId(Integer id) {
        return this.solicitudRepository.findById(id).orElse(null);
    }
    
     @Transactional(rollbackFor = Exception.class)
    public SolicitudPrestamo updateSolicitudPrestamo(SolicitudPrestamo solicitud) throws ParseException {
        if (solicitudRepository.existsById(Integer.parseInt(solicitud.getSolicitudkey().toString()))) {
            return solicitudRepository.save(solicitud);
        } else {
            throw new RuntimeException("SolicitudPrestamo no encontrado");
        }

    }
   
      @Transactional(rollbackFor = Exception.class)
    public SolicitudPrestamo cambioestado(SolicitudDto id) throws ParseException {
        if (solicitudRepository.existsById(Integer.parseInt(id.getSolicitudkey().toString()))) {
            SolicitudPrestamo solicitudp= this.solicitudRepository.findById(Integer.parseInt(id.getSolicitudkey().toString())).orElse(null);
             Estado estado= this.estadoR.findById(Integer.parseInt(id.getEstado().toString())).orElse(null);
             solicitudp.setEstado(estado);
             solicitudp.setObservacion(id.getObservacion());
             
            SolicitudPrestamo solicitud= solicitudRepository.save(solicitudp);
            
            if(solicitud!=null){
             Estado estadop= this.estadoR.findById(4).orElse(null);
             Prestamo prestamo= new Prestamo();
             prestamo.setSolicitudkey(solicitud);
             prestamo.setFechainicio(new Date());
             prestamo.setEstado(estadop);
            Double montoInicial = Double.parseDouble(solicitud.getMontosolicitado().toString());
            Double tasaInteresDecimal = Double.parseDouble(solicitud.getTasainteres().toString() )/ 100.0;
            int plazo = solicitud.getPlazosolicitado();
            Double saldoTotal = montoInicial * Math.pow((1 + tasaInteresDecimal), plazo);
             prestamo.setSaldopendiente(saldoTotal);
             prestamo.setSaldopendientecapital(Double.parseDouble(solicitud.getMontosolicitado().toString()));
            
if(id.getEstado().equals(2)){
             this.prestamoR.save(prestamo);
             }
             return solicitud;
            }else{
            return null;
            }
        } else {
            throw new RuntimeException("SolicitudPrestamo no encontrado");
        }

    }
    
      @Transactional(rollbackFor = Exception.class)
    public SolicitudPrestamo aceptar(Integer id) throws ParseException {
        if (solicitudRepository.existsById(id)) {
            SolicitudPrestamo solicitudp= this.solicitudRepository.findById(id).orElse(null);
             Estado estado= this.estadoR.findById(2).orElse(null);
             solicitudp.setEstado(estado);
             
            return solicitudRepository.save(solicitudp);
        
        } else {
            throw new RuntimeException("SolicitudPrestamo no encontrado");
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
