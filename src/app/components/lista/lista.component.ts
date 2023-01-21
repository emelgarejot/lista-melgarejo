import { Component, OnInit } from '@angular/core';
import { Person } from '../model/lista.type';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  persons: Person[] = [
    { name: 'Enrique', sex: 'M', age: 35, status: 1 },
    { name: 'Maria', sex: 'F', age: 18, status: 0 },
    { name: 'Enrique', sex: 'M', age: 35, status: 1 },
    { name: 'Enrique', sex: 'M', age: 35, status: 1 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
