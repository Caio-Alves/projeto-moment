import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name: string = 'Caio';
  age: number = 29;
  job = 'Programador'
  hobbies = ['Correr', 'Jogar', 'Estudar'];
  car ={
    name: 'Polo',
    year: 2019,
  };

  constructor(){}

  ngOnInit(){}

}
