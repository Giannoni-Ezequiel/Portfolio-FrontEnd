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

  editarEducacion(id: any) {
    console.log(id);
  }

  cargarDetalle(id: number)
  {
        this.educacionS.detail(id).subscribe(
          data => {
            this.educaciones = data;
          }, err => {
            alert("Error al modificar educacion");
          })
      }

  onUpdate(): void
  {
    // El ID para la actualización debe provenir del objeto 'educaciones' mismo,
    // que fue poblado cuando se llamó a 'cargarDetalle' al abrir el modal.
    // La llamada anterior a 'this.cargarDetalle();' era incorrecta.
    this.educacionS.update(this.educaciones.id, this.educaciones).subscribe(data => {
      alert("Educación actualizada");
      this.cargarEducacion(); // Recarga la lista para reflejar los cambios
      // No es necesario navegar si solo se actualiza un modal
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
