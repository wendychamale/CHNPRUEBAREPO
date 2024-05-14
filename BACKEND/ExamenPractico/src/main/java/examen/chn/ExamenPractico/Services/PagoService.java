/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package examen.chn.ExamenPractico.Services;

import examen.chn.ExamenPractico.Dto.PagoDto;
import examen.chn.ExamenPractico.Model.Pago;
import examen.chn.ExamenPractico.Model.Prestamo;
import examen.chn.ExamenPractico.Model.SolicitudPrestamo;
import examen.chn.ExamenPractico.Repositories.PagoRepository;
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
public class PagoService {
    @Autowired
     PagoRepository pagoRepository;

     @Autowired
     PrestamoRepository prestamoRepository;
     
    @Transactional (readOnly=true)
    public List<Pago> getPago(){
     
        return pagoRepository.findAll();
    }
    
    @Transactional (rollbackFor=Exception.class)
    public Pago createPago( PagoDto pago) throws ParseException{
        Pago pagoM = new Pago();
        pagoM.setFechapago(new Date());
        pagoM.setInterescobrado(pago.getInterescobrado());
        pagoM.setMontopagado(pago.getMontopagado());
        Prestamo solicitudp= this.prestamoRepository.findById(pago.getPrestamokey()).orElse(null);
        pagoM.setPrestamokey(solicitudp);
        
         Pago solicitud= pagoRepository.save(pagoM);
            
            if(solicitud!=null){
                Double saldototal=solicitudp.getSaldopendientecapital()-(pago.getMontopagado()+pago.getInterescobrado());
                Double saldototalcapital=solicitudp.getSaldopendientecapital()-pago.getMontopagado();
                Prestamo p= solicitudp;
                p.setSaldopendiente(saldototal);
                p.setSaldopendientecapital(saldototalcapital);
             this.prestamoRepository.save(p);
            }
            return solicitud;
    }
    
    @Transactional (rollbackFor=Exception.class)
    public PagoDto getCalculaPago( Integer prestamoKey) throws ParseException{
       
        Prestamo solicitudp= this.prestamoRepository.findById(prestamoKey).orElse(null);
        
        Double prestamo = solicitudp.getSaldopendientecapital(); // Monto del préstamo
        Double tasaInteresMensual =Double.parseDouble(solicitudp.getSolicitudkey().getTasainteres().toString()) / 100; // Tasa de interés mensual
        int plazoMeses = solicitudp.getSolicitudkey().getPlazosolicitado(); // Plazo en meses
        
        // Calcula el pago total mensual
        double numerador = prestamo * tasaInteresMensual;
        double termino = Math.pow(1 + tasaInteresMensual, -plazoMeses);
        double pagoMensual = numerador / (1 - termino);
        
        // Calcula y muestra el detalle de pagos mes a mes
        double saldo = prestamo;
            // Calcula el interés para este mes
            double interes = saldo * tasaInteresMensual;
            
            // Calcula el pago a capital para este mes
            double pagoCapital = pagoMensual - interes;
            
            // Actualiza el saldo pendiente del préstamo
            saldo -= pagoCapital;
            
            // Muestra el detalle de pagos para este mes
            System.out.println( ": Pago a capital = " + pagoCapital + ", Interés = " + interes);
        
        PagoDto p= new PagoDto();
        p.setMontopagado(pagoCapital);
        p.setInterescobrado(interes);
        
        return p;
    }
    
     @Transactional(rollbackFor = Exception.class)
    public Pago updatePago(Pago pago) throws ParseException {
        if (pagoRepository.existsById(Integer.parseInt(pago.getPagokey().toString()))) {
            return pagoRepository.save(pago);
        } else {
            throw new RuntimeException("Pago no encontrado");
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
