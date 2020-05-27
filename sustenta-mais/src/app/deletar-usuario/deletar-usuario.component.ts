import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../model/Usuarios';

@Component({
  selector: 'app-deletar-usuario',
  templateUrl: './deletar-usuario.component.html',
  styleUrls: ['./deletar-usuario.component.css']
})
export class DeletarUsuarioComponent implements OnInit {

  usuarios: Usuarios = new Usuarios

  constructor() { }

  ngOnInit(): void {
  }

}
