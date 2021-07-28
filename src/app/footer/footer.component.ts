import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  autor:any={nombre:'Freddy',apellido:'Patarroyo',year:'2021'}

  constructor() { }

  ngOnInit(): void {
  }

}
