import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteModel } from './cliente-model';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  private url='http://localhost:8080/api/clientes/concat'

  constructor(private http:HttpClient) { }

  getClientes():Observable<ClienteModel[]>{
    return this.http.get(this.url).pipe(
      map(reponse=>reponse as ClienteModel[])
    );
  }

  
}
