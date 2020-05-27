import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../model/Usuarios';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../service/usuarios.service';

@Component({
  selector: 'app-deletar-usuario',
  templateUrl: './deletar-usuario.component.html',
  styleUrls: ['./deletar-usuario.component.css']
})
export class DeletarUsuarioComponent implements OnInit {

  usuario: Usuarios = new Usuarios
  delOk: boolean = false;

  constructor(private usuarioService: UsuariosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id: number = this.route.snapshot.params['id']
    this.findById(id)
  }

  findById(id: number){
    this.usuarioService.getByIdUsuario(id).subscribe((resp: Usuarios) => {
      this.usuario = resp;
    }, err => {
      console.log(`Erro: ${err.status}, não conseguimos pegar o id`)
    })
  }

  deletarUsuario(){
    this.usuarioService.deleteUsuario(this.usuario.id).subscribe(() => {
      this.delOk = true
      this.router.navigate(['/lista-usuarios'])
      localStorage.setItem("delOk", this.delOk.toString())
    })
  }

  naoDeletar(){
    this.router.navigate(['/lista-usuarios'])
  }
}
