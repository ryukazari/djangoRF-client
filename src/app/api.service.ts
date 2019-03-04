import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  baseurl = "http://localhost:8000/";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http : HttpClient) { }

  getUsuarios():Observable<any>{
    return this.http.get(this.baseurl+'usuario/', {headers: this.httpHeaders});
  }

  getUsuario(dni: string):Observable<any>{
    return this.http.get(this.baseurl+'usuario/'+dni+'/', {headers: this.httpHeaders});
  }

  updateUsuario(usuario):Observable<any>{
    const body = {
      dni: usuario.dni,
      nombre: usuario.nombre,
      direccion: usuario.direccion,
      telefono: usuario.telefono,
      email: usuario.email,
      ocupacion: usuario.ocupacion
    }
    return this.http.put(this.baseurl+'usuario/'+usuario.dni+'/', body,{headers: this.httpHeaders});
  }

  createUsuario(usuario):Observable<any>{
    const body = {
      dni: usuario.dni,
      nombre: usuario.nombre,
      direccion: usuario.direccion,
      telefono: usuario.telefono,
      email: usuario.email,
      ocupacion: usuario.ocupacion
    }
    return this.http.post(this.baseurl+'usuario/',body,{headers: this.httpHeaders});
  }

  deleteUsuario(dni: String):Observable<any>{
    return this.http.delete(this.baseurl+'usuario/'+dni+'/',{headers: this.httpHeaders});
  }
}
