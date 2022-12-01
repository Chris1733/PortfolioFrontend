import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-distinciones',
  templateUrl: './distinciones.component.html',
  styleUrls: ['./distinciones.component.css']
})
export class DistincionesComponent implements OnInit {
  miPortfolio: any;
  
  constructor(private datosPortfolio: PortfolioService) { }
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>{console.log(data);
      this.miPortfolio=data;
          });
  }
}
