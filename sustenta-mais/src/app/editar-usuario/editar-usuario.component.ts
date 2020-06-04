import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../service/usuarios.service';
import { Usuarios } from '../model/Usuarios';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  usuario: Usuarios = new Usuarios

  confirmaSenha = "";

  constructor(private usuarioService: UsuariosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id']
    this.findById(id)
  }

  findById(id:number){
    this.usuarioService.getByIdUsuario(id).subscribe((resp: Usuarios)=>{
      this.usuario = resp
    })
  }

  validaSenha(){
    if(this.usuario.senha == this.confirmaSenha){
      this.salvar()
    }
  }

  salvar(){
    this.usuarioService.putUsuario(this.usuario).subscribe((resp: Usuarios)=>{
      this.usuario = resp
      this.router.navigate(['/lista-usuarios'])
      location.assign('/lista-usuarios')
    })
  }

  cancelar(){
    this.router.navigate(['/lista-usuarios'])
  }

}

