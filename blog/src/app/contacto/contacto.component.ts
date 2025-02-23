import { Component } from '@angular/core';
import { collection } from 'src/environments/environment';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent {
  public imagePath = '../assets/images/';

  enviarDatos = (): void => {
    const nombre = (<HTMLInputElement>document.getElementById('nombre')).value;
    const telefono = (<HTMLInputElement>document.getElementById('telefono'))
      .value;
    const asunto = (<HTMLInputElement>document.getElementById('asunto')).value;

    if (!nombre || !telefono || !asunto) {
      console.error('Error: campos incompletos');
      return;
    }
    collection
      .add({
        nombre: nombre,
        telefono: telefono,
        asunto: asunto,
      })
      .then(() => {
        const mensaje = 'Datos de la cita almacenados correctamente';
        console.log(mensaje);
        alert(mensaje);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
