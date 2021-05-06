import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema1:tema=  new tema()
  listaTemas:tema[]
  
  
  constructor(
    private router:Router,
    private temaService: TemaService
  ) { }

  ngOnInit() {
    if(environment.token == '' ){
      this.router.navigate(['/entrar'])
     }
     this.findAllTemas()
  }

  findAllTemas(){
    this.temaService.getAllTema().subscribe(( resp : tema[])=>{
   this.listaTemas=resp


    })
  }
  
  
  Cadastrar(){
    this.temaService.postTema(this.tema1).subscribe((resp: tema)=>{
   this.tema1=resp
   alert('tema cadastrado com sucesso')
   this.findAllTemas()
   this.tema1=new tema()
    })


  }
}
