import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../model/Usuarios';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
confirmaSenha = "";
usuario: Usuarios = new Usuarios
  constructor() { }

  ngOnInit(): void {
  }

}
