import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-capacitaciones',
  templateUrl: './capacitaciones.component.html',
  styleUrls: ['./capacitaciones.component.css']
})
export class CapacitacionesComponent implements OnInit {
  miPortfolio: any;
  trainingsList: any;
  
  constructor(private datosPortfolio: PortfolioService) { }
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>{console.log(data);
      this.miPortfolio=data;
      this.trainingsList=data.trainings;
    });
  }
}
