import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProcessHTTPMsgService {
  constructor() { }

  public handleError(error: HttpErrorResponse | any) {
    let errMsj: string = error.error instanceof ErrorEvent ?
      error.error.message : `${error.status} - ${error.statusText || ''} ${error.error}`
    
    console.log(`Falló el llamado al servicio con error ${errMsj}`)
    return throwError('JSON Server Error');
  }
}
