import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  title = 'CRUD Angular + Django';
  usuarios=[{ nombre:'Lucero Vidal'}];
  usuario;

  constructor(private api:ApiService){
    this.getUsuarios();
    this.usuario={
      dni: "",
      nombre: "",
      direccion: "",
      telefono: "",
      email: "",
      ocupacion: ""
    }
  }

  getUsuarios = () =>{
    this.api.getUsuarios().subscribe(
      data=>{
        this.usuarios=data;
      },
      error =>{
        console.log(error);
        
      }
    )
  }

  clickUsuario = (user) =>{
    this.api.getUsuario(user.dni).subscribe(
      data=>{
        this.usuario = data;
      },
      error =>{
        console.log(error);
        
      }
    )
  }

  guardarUsuario = () =>{
    this.api.updateUsuario(this.usuario).subscribe(
      data=>{
        this.getUsuarios();
        
      },
      error=>{
        console.log(error);
        
      }
    )
  }

  crearUsuario = () =>{
    this.api.createUsuario(this.usuario).subscribe(
      data=>{
        this.usuarios.push(data);
        
      },
      error=>{
        console.log(error);
        
      }
    )
  }

  eliminarUsuario = () =>{
    this.api.deleteUsuario(this.usuario.dni).subscribe(
      data=>{
        this.getUsuarios();
      },
      error=>{
        console.log(error);
        
      }
    )
  }
}
