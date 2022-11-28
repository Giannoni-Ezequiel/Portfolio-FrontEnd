import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.interface';
import { TokenService } from 'src/app/servicios/token.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {

  experiencia: Experiencia[] = [];
  
  constructor(private experienciaS: ExperienciaService, 
              private tokenService: TokenService) { }
  
  isLogged = false;
  ngOnInit(): void 
  {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
      } else {
      this.isLogged = false;
      }
    }
  
  cargarExperiencia(): void
  {
    this.experienciaS.lista().subscribe
    (
      data =>{
        console.log(data);
        this.experiencia = data;
        }
      )
    }

  delete(id?: number)
  {
    if(id != undefined)
    {
      this.experienciaS.delete(id).subscribe
        (
            data => {
          this.cargarExperiencia();
          }, err => {
          alert("No se pudo eliminar");
            }
          )
      }
    }

}
