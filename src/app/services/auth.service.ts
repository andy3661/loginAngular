import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UsuarioModel } from '../models/usuario.model';
import { ServiceConfig } from '../config/service-config';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
entity="login";
userData = new BehaviorSubject<UsuarioModel>(new UsuarioModel);
  constructor(private http: HttpClient) {

    this.verifyCurrentSession();
   }
//verifica y reemplaza la sesion actual
verifyCurrentSession(){
  let currentSession = this.getSessionData();
  if(currentSession){
    this.setUserData(JSON.parse(currentSession));
  }
}
  //da acceso a los datos del usuario
setUserData(user: UsuarioModel){
  this.userData.next(user);
}
//detecta cuando cambia la info de usuario logueado
getUserData(){
  return this.userData.asObservable();
}

  login (login: UsuarioModel): Observable<any>{
    
    return this.http.post<any>(`${ServiceConfig.BASE_URL}${this.entity}`,login, { 
      headers: new HttpHeaders({ 
        
      })
    })

 
  }
 //sube la session a el LocalStorage
  sessionData(sessionData: any): Boolean {
    let currentSession = localStorage.getItem('session');
   if (currentSession){
    return false;
   }else{
   
    let data: UsuarioModel = {
      id: sessionData.data.id,
      username: sessionData.data.nombre_usuario,
      clienteId: sessionData.data.clienteId,
      roleId: sessionData.data.roleId,
      token: sessionData.token,
     isLogged: true
    }
    localStorage.setItem('session',JSON.stringify(data))
    this.setUserData(data);
    return true;
   }
  }
//obtiene la session de la persona logueada
  getSessionData() {
    let CurrentSession = localStorage.getItem('session');
    return CurrentSession
  }
 
  logout() {
    localStorage.removeItem('session');
    //lo reemplaza por el user de fabrica que tiene en false la variable isLogged
    this.setUserData(new UsuarioModel());
  }

}
