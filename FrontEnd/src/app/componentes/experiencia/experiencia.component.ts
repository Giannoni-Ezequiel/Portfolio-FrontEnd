import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { TokenService } from 'src/app/servicios/token.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {

  experiencia: Experiencia[] = [];
  experiencias!: Experiencia;
  cargo: string = '';
  nombre_empresa: string = '';
  fecha_inicio: string = '';
  fecha_fin: string = '';
  descripcion: string = '';
  
  constructor(private experienciaS: ExperienciaService, 
              private tokenService: TokenService,
              private router: Router) { }
  
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

  onCreate(): void{
    const expe = new Experiencia(this.cargo, this.nombre_empresa, this.fecha_inicio, this.fecha_fin,
      this.descripcion);
      this.experienciaS.save(expe).subscribe(data =>{
        alert("Se agrego Experiencia");
        this.router.navigate(['']);
  }, err => {
    alert("Error");
    })}

  onUpdate(): void{}

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
