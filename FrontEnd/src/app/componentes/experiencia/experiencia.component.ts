import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { TokenService } from 'src/app/servicios/token.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {

  experiencia: Experiencia[];
  experiencias: Experiencia = null;
  cargo: string;
  nombreEmpresa: string = '';
  fecha_inicio: string = '';
  fecha_fin: string = '';
  descripcion: string = '';
  
  constructor(private experienciaS: ExperienciaService,
              private activatedRouter: ActivatedRoute, 
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
    const expe = new Experiencia(this.cargo, this.nombreEmpresa, this.fecha_inicio, this.fecha_fin,
      this.descripcion);
      console.log(expe);
      this.experienciaS.save(expe).subscribe(data =>{
        alert("Se agrego Experiencia");
        this.router.navigate(['']);
  }, err => {
    alert("Error");
    })}

  cargarDetalle(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaS.detail(id).subscribe(
      data => {
        this.experiencias = data;
      }, err => {
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      })
  }

  onUpdate(): void
  {
    this.cargarDetalle();
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaS.update(id, this.experiencias).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar experiencia");
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
