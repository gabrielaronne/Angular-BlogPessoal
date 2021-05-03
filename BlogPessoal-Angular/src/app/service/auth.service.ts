import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuarios';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  entrar(UserLogin: UserLogin) {
    return this.http.post('http://localhost:8080/usuario/logar', UserLogin)

  }
  cadastrar(Usuario: Usuario): Observable<Usuario> {

    return this.http.post<Usuario>('http://localhost:8080/usuario/cadastrar', Usuario)

  }
}

