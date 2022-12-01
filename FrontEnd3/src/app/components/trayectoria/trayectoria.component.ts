import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-trayectoria',
  templateUrl: './trayectoria.component.html',
  styleUrls: ['./trayectoria.component.css']
})

export class TrayectoriaComponent implements OnInit {
  miPortfolio: any;
  experienceList: any;

  constructor(private datosPortfolio: PortfolioService) { }
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>{console.log(data);
      this.miPortfolio=data;
      this.experienceList=data.experience;
    });
  }
}
