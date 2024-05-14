import { Injectable } from '@angular/core';
import { AppconfigService } from '../appconfig.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor(private http: HttpClient, private appSettings: AppconfigService) { }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
  
  inssolicitud
  (solicitud): Observable<any> {
    return this.http.post<any>(this.appSettings.restApiServiceBaseUri + 'solicitud/addSolicitud', solicitud)
      .pipe(
        catchError(this.handleError('inssolicitud', []))
      );
  }

  getsolicituds(): Observable<any> {
    return this.http.get<any>(this.appSettings.restApiServiceBaseUri + 'solicitud/getSolicitud')
      .pipe(
        catchError(this.handleError('getsolicitud', []))
      );
  }


  aceptar(cliente): Observable<any> {
    console.log('actualizamos'+cliente.estado);
    return this.http.post<any>(this.appSettings.restApiServiceBaseUri + 'solicitud/cambioestadoSolicitud', cliente)
      .pipe(
        catchError(this.handleError('updateCliente', []))
      );
  }

}
