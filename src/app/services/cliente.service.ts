import { Injectable } from '@angular/core';
import { ClienteModel} from '../models/cliente.Model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ServiceConfig } from '../config/service-config';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
entity='clientes'
  constructor(
    private http: HttpClient
  ) { }



CustomerRegistering(customer: ClienteModel): Observable<ClienteModel>{
return this.http.post<ClienteModel>(`${ServiceConfig.BASE_URL}${this.entity}`,customer, { 
  headers: new HttpHeaders({ 
    
  })
})
}
}