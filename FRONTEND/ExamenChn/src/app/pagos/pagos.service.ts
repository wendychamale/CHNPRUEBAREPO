import { Injectable } from '@angular/core';
import { AppconfigService } from '../appconfig.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  constructor(private http: HttpClient, private appSettings: AppconfigService) { }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  inssolicitud
  (solicitud): Observable<any> {
    return this.http.post<any>(this.appSettings.restApiServiceBaseUri + 'pago/addPago', solicitud)
      .pipe(
        catchError(this.handleError('inssolicitud', []))
      );
  }

  getPago(codCliente): Observable<any> {
    console.log(this.appSettings.restApiServiceBaseUri + 'pago/getPago/'+ codCliente );
    return this.http.get<any>(this.appSettings.restApiServiceBaseUri + 'pago/getPago/'+ codCliente )
      .pipe(
        catchError(this.handleError('getClienteModificar', []))
      );
  }

}
