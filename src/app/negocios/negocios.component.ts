import { Component, OnInit } from '@angular/core';
import { ClientService } from '../servicios/client.service'

@Component({
  selector: 'app-negocios',
  templateUrl: './negocios.component.html',
  styleUrls: ['./negocios.component.css']
})
export class NegociosComponent implements OnInit {

  dataEmpresa: any;

  constructor(private client: ClientService ) { }

  ngOnInit(): void {
    this.client.getRequestDataEmpresa('http://localhost:5000/api/v01/user/datosempresa').subscribe(
     
    (data): any => {
      this.dataEmpresa = data["data"]
      console.log(data["data"])
      },

      (error: any) => {
        console.log(error)
      })

  }

}



