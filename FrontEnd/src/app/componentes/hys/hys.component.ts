import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HyS } from 'src/app/model/hys';
import { HysService } from 'src/app/servicios/hys.service';
import { TokenService } from 'src/app/servicios/token.service';
@Component
({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
  })

export class HysComponent implements OnInit 
{
  hys: HyS[] = [];
  HyS!: HyS;
  nombre: string = '';
  porcentaje: number = 0;
  img: string = '';

  constructor(
    private hysS: HysService,
    private tokenService: TokenService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  cargarHyS(): void
  {
    this.hysS.lista().subscribe
    (
      data =>{
        console.log(data);
        this.hys = data;
        }
      )
    }

  onCreate(): void{
    const Hys = new HyS(this.nombre, this.porcentaje, this.img);
      this.hysS.save(Hys).subscribe(data =>{
        alert("Se agrego Habilidad");
        this.router.navigate(['']);
  }, err => {
    alert("Error");
    })}

  onUpdate(): void{}

  
  delete(id?: number)
  {
    if(id != undefined)
    {
      this.hysS.delete(id).subscribe
        (
            data => {
          this.cargarHyS();
          }, err => {
          alert("No se pudo eliminar");
            }
          )
      }
    }
  }
