import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tema } from 'src/app/model/Tema';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css']
})
export class TemaEditComponent implements OnInit {

  tema1:tema = new tema

  constructor(
    private temaService:TemaService,
    private router : Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    if(environment.token == '' ){
      this.router.navigate(['/entrar'])
     }
     let id=this.route.snapshot.params['id']
     this.findByIdTema(id)
  }

  findByIdTema(id:number){
    this.temaService.getByIdTema(id).subscribe((resp:tema)=>{
this.tema1=resp
    })
  }
atualizar(){
  this.temaService.putTema(this.tema1).subscribe((resp:tema)=>{
this.tema1=resp
alert('Tema atualizado com sucesso')
this.router.navigate(['/tema'])

  })
}


}
