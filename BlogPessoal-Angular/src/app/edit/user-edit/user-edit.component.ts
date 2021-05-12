import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertasComponent } from 'src/app/alertas/alertas.component';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  usuario:Usuario= new Usuario()
  idUser:number
  tipoUsuario:string
  confirmaSenha:string

  constructor(
    private auth:AuthService,
    private route:ActivatedRoute,
    private router:Router,

    ) { }

  ngOnInit() {
    if(environment.token == '' ){
      this.router.navigate(['/entrar'])
     }
     this.idUser=this.route.snapshot.params['id']
     this.findByIdUser(this.idUser)
  }

  findByIdUser(id: number){
    this.auth.getByIdUser(id).subscribe((resp: Usuario)=>{
      this.usuario = resp
    })
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
    console.log(this.tipoUsuario)
  }

  confirmSenha(event: any) {
    this.confirmaSenha = event.target.value
  }

  Atualizar() {
    this.usuario.tipo = this.tipoUsuario
    if (this.confirmaSenha != this.usuario.senha) {
      alert('As senhas estão incorretas!')
    } else {
      this.auth.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        alert('Usuário atualizado, faça o login novamente.')
        environment.token = ''
        environment.foto = ''
        environment.nome = ''
        environment.id = 0
        this.router.navigate(['/login'])
      })
    }
  }

}

