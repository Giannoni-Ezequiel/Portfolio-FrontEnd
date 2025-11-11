import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { FormControl, NgForm } from '@angular/forms';
import { TokenService } from 'src/app/servicios/token.service';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  personas: Persona | null = null; // Usaremos esta única variable para la persona
  roles!: string[];
  isAdmin: boolean = false;


  name = new FormControl('');

  constructor(
    private activatedRouter: ActivatedRoute,
    private personaService: PersonaService,
    private tokenService: TokenService,
    public imagenService: ImagenService,
  ){}

  ngOnInit(): void {
    this.cargarPersona();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(role => {
      if (role === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarPersona(): void {
    // Asumimos que el servicio devuelve un array, tomamos el primer elemento
    this.personaService.getPersonas().subscribe({
      next: (data: Persona[]) => {
        if (data.length > 0) {
          this.personas = data[0];
        }
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }
  onUpdate(): void {
    if (this.personas) {
      this.personaService.updatePersona(this.personas).subscribe(
        (response: Persona) => {
          console.log(response);
          this.cargarPersona();
          // Cierra el modal (necesitarás una referencia al modal o usar jQuery/Bootstrap)
          document.getElementById('editarPersona-modal')?.click(); // Simula click para cerrar si usas data-bs-toggle
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      )
    }
  }

uploadImage($event: any)
{
  const id = this.activatedRouter.snapshot.params['id'];
  const name = "perfil_" + id;
  this.imagenService.uploadImage($event, name)
}
}
