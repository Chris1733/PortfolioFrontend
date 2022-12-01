import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  miPortfolio: any;
  skillsList: any;
  
  constructor(private datosPortfolio: PortfolioService) { }
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>{console.log(data);
      this.miPortfolio=data;
      this.skillsList=data.skills;
    });
  }
}
