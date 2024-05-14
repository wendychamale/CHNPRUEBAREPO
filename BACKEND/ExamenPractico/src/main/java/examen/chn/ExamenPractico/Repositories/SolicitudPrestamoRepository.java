/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package examen.chn.ExamenPractico.Repositories;

import examen.chn.ExamenPractico.Model.SolicitudPrestamo;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Usuario
 */
@Repository
public interface SolicitudPrestamoRepository extends CrudRepository<SolicitudPrestamo ,Integer>{
    
  
    @Override
    public List <SolicitudPrestamo> findAll();
    
}
