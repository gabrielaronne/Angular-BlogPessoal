import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuarios';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  Usuario:Usuario = new Usuario
  confirmarSenha:string
  tipoUsuario:String
  
  
 

  constructor(
    private router: Router,
    private authService: AuthService
    
  ) { }

  ngOnInit(){
    window.scroll(0,0)
}
confirmSenha (event:any) {
  this.confirmarSenha= event.targe.value
}
tipoUser(event:any){
  this.tipoUsuario=event.targe.value
}
cadastrar(){
  this.Usuario.Tipo = this.tipoUsuario
 
  if(this.Usuario.senha != this.confirmSenha){
    alert('a senha estao incorretas')

 }else{
   this.authService.cadastrar(this.Usuario).subscribe((resp:Usuario) => {
     this.Usuario=resp
     
     this.router.navigate (['/entrar'])    
  
     alert('usuario cadastrado com sucesso!')
   })
  

 }

}

}
