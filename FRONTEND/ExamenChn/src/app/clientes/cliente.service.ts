import { Injectable } from '@angular/core';
import { AppconfigService } from '../appconfig.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient, private appSettings: AppconfigService) { }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  getclientes(): Observable<any> {
    return this.http.get<any>(this.appSettings.restApiServiceBaseUri + 'cliente/getCliente')
      .pipe(
        catchError(this.handleError('getCliente', []))
      );
  }

  getClientebyId(codCliente): Observable<any> {
    console.log(this.appSettings.restApiServiceBaseUri + 'cliente/getCliente/'+ codCliente );
    return this.http.get<any>(this.appSettings.restApiServiceBaseUri + 'cliente/getCliente/'+ codCliente )
      .pipe(
        catchError(this.handleError('getClienteModificar', []))
      );
  }

    
  updateCliente(cliente): Observable<any> {
    console.log('actualizamos');
    return this.http.post<any>(this.appSettings.restApiServiceBaseUri + 'cliente/updateCliente', cliente)
      .pipe(
        catchError(this.handleError('updateCliente', []))
      );
  }

  insCliente(cliente): Observable<any> {
    return this.http.post<any>(this.appSettings.restApiServiceBaseUri + 'cliente/addCliente', cliente)
      .pipe(
        catchError(this.handleError('insCliente', []))
      );
  }

}
