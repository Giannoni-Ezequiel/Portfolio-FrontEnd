import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css']
})
export class LogoAPComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioService, private router: Router) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos();
  }

  login(){
    this.router.navigate(['/login'])
  }

}
