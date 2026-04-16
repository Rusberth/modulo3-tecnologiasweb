import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NegociosComponente } from './negocios-componente/negocios-componente';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NegociosComponente, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tecnologiasweb');
  mensaje: string = "HOla a tecnologias web";
  usuario = {
    nombre: '',
    correo: '',
    edad: null as number |null
  }

  registrar(){
    if (!this.usuario.nombre || !this.usuario.correo)
        this.mensaje ="El nombre y correo son obligatorios"
    else 
        this.mensaje ="Se han guardado los datos correctamente"
    console.log(this.usuario);
    // console.log(this.usuario);
  }
}