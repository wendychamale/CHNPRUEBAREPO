import { Injectable } from '@angular/core';
import { AppconfigService } from '../appconfig.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {

  constructor(private http: HttpClient, private appSettings: AppconfigService) { }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }


  getPrestamos(): Observable<any> {
    return this.http.get<any>(this.appSettings.restApiServiceBaseUri + 'prestamo/getPrestamo')
      .pipe(
        catchError(this.handleError('getsolicitud', []))
      );
  }

  getsolicituds(id): Observable<any> {
    return this.http.get<any>(this.appSettings.restApiServiceBaseUri + 'solicitud/getSolicitudP/'+id)
      .pipe(
        catchError(this.handleError('getsolicitud', []))
      );
  }
}
