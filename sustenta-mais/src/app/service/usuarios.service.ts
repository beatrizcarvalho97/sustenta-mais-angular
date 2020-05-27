import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../model/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  getAllUsuarios() {
    return this.http.get('http://93.188.161.223:9000/user')
  }

  postUsuario(usuario: Usuarios) {
    return this.http.post('http://93.188.161.223:9000/user', usuario)
  }


  putPostagem(usuario: Usuarios) {
    return this.http.put('http://93.188.161.223:9000/user', usuario)
  }

  deletePostagem(id: number) {
    return this.http.delete(`http://93.188.161.223:9000/user/${id}`)
  }

}
