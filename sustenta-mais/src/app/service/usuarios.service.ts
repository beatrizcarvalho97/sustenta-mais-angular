import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  getAllUsuario(){
    return this.http.get('http://31.220.57.14/8080/user')
  }

}
