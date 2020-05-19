import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../service/usuarios.service';
import { Usuarios } from '../model/Usuarios';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: Usuarios = new Usuarios

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit() {
    this.findAllUsuarios()
  }

  findAllUsuarios(){
    this.usuarioService.getAllUsuarios().subscribe((resp: Usuarios) => {
      this.usuarios = resp
    })
  }
}
