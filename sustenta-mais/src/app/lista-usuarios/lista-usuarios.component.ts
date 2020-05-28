import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../service/usuarios.service';
import { Usuarios } from '../model/Usuarios';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: Usuarios = new Usuarios

  alerta: boolean = false

  constructor(private usuarioService: UsuariosService, private router: Router, private locationPage: Location) { }

  ngOnInit() {
    this.findAllUsuarios()

    let item: string = localStorage.getItem('delOk')

    if(item == 'true') {
      this.alerta = true
      localStorage.clear()

      setTimeout(() => {
        this.refresh()
      }, 3000)
    }
  }

  findAllUsuarios(){
    this.usuarioService.getAllUsuarios().subscribe((resp: Usuarios) => {
      this.usuarios = resp
    })
  }

  refresh() {
    this.router.navigateByUrl('cadastro', {skipLocationChange: true}).then(() => {
      this.router.navigate([this.locationPage.path()])
    })
  }
}
