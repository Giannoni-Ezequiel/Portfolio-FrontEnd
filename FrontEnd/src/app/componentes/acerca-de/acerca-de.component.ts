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
  
  persona: Persona[] = [];
  public editPersona: Persona | undefined;
  public deletePersona!: Persona;
  roles!: string[];
  isAdmin: boolean = false;
  personas: Persona = null;
  nombre: string = '';
  apellido: string = '';
  titulo: string = '';
  sobre_mi: string = '';


  name = new FormControl('');

  constructor(
    private activatedRouter: ActivatedRoute,
    private personaService: PersonaService,
    private tokenService: TokenService,
    public imagenService: ImagenService,
  ){}

  ngOnInit() {
    /*this.getPersonas();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(role => {
      if (role === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });*/
  }

/*public getPersonas(): void{
  this.personaService.getPersonas().subscribe((response: Persona[]) =>{
  this.personas = response;
  },
  (error: HttpErrorResponse) =>{
    alert(error.message);
  }
  );
}

public onAddPersona(addForm: NgForm):void {
  document.getElementById('add-persona-modal')?.click();
  this.personaService.addPersona(addForm.value).subscribe(
    (response: Persona) => {
      console.log(response);
      this.getPersonas();
      addForm.reset();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
      addForm.reset();
    }
  )
  
}
public onEditPersona(persona: Persona):void {
  this.personaService.updatePersona(persona).subscribe(
  (response: Persona) => {
    console.log(response);
    this.getPersonas();
    
  },
  (error: HttpErrorResponse) => {
    alert(error.message);
  }
)

}*/
onUpdate(): void{
  /*this.personas.img = this.imagenService.url;*/
}

uploadImage($event: any)
{
  const id = this.activatedRouter.snapshot.params['id'];
  const name = "perfil_" + id;
  this.imagenService.uploadImage($event, name)
}
}
