import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { TokenService } from 'src/app/servicios/token.service';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  educacion: Educacion[];
  educaciones: Educacion = null;
  nombre: string = '';
  fecha_inicio: string = '';
  fecha_fin: string = '';
  titulo: string;
  img: string = '';
  descripcion: string = '';
  
  constructor(private educacionS: EducacionService,
              private activatedRouter: ActivatedRoute,   
              private tokenService: TokenService,
              private router: Router) { }
  
  isLogged = false;

  ngOnInit(): void 
  {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
      } else {
      this.isLogged = false;
      }
    }
  
  cargarEducacion(): void
  {
    this.educacionS.lista().subscribe
    (
      data =>{
        console.log(data);
        this.educacion = data;
        }
      )
    }

  onCreate(): void{
      const expe = new Educacion(this.titulo,this.nombre, this.fecha_inicio, this.fecha_fin, 
        this.img, this.descripcion);
        this.educacionS.save(expe).subscribe(data =>{
          alert("Se agrego Educacion");
          this.router.navigate(['']);
    }, err => {
      alert("Error");
      })}

  cargarDetalle(): void
  {
        const id = this.activatedRouter.snapshot.params['id'];
        this.educacionS.detail(id).subscribe(
          data => {
            this.educaciones = data;
          }, err => {
            alert("Error al modificar educacion");
            this.router.navigate(['']);
          })
      }
  
  onUpdate(): void
  {
    this.cargarDetalle();
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.update(id, this.educaciones).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar educacion");
        }
      )
  }

  delete(id?: number)
  {
    if(id != undefined)
    {
      this.educacionS.delete(id).subscribe
        (
            data => {
          this.cargarEducacion();
          }, err => {
          alert("No se pudo eliminar");
            }
          )
      }
    }
}
