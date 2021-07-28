import { Component, OnInit } from '@angular/core';
import { ClienteModel } from './cliente-model';
import {ClienteServiceService} from './cliente-service.service'

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes:ClienteModel[];

  constructor(private clienteService:ClienteServiceService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      (clientes)=>{this.clientes=clientes
      }
      
    )
  }

}
