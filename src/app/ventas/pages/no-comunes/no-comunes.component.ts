import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  nombre:string='Susana';
  genero:string='femenino';

  //mapping 
  invitacionMapa = {
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  clientes:string[] = ['Maria', 'Fernando', 'Juan', 'Pedro'];
  clientesMap = {
    '=0': 'no tenemos ningún clientes',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando', // en caso contrario, es como un else el # length del arreglo 
  }

  cambiarCliente() {
    this.nombre = 'Fernando T';
    this.genero = 'masculino';
  }

  borrarCliente() {
    //this.clientes = this.clientes.slice(1, this.clientes.length);
    this.clientes.pop();
  }


  // KeyValue Pipe
  persona  = {
    nombre:'Fernando',
    edad: 35, 
    direccion: 'cdmx, México'
  };

  //json pipe
  heroes = [
    {
      nombre:'Superman',
      vuela:true
    },
    {
      nombre:'Robin',
      vuela:false
    },
    {
      nombre:'Aquaman',
      vuela:false
    },
  ];

  // Async pipe, interval de rxjs
  myObservable = interval(2000);
  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa');
    });
  });
  
}
