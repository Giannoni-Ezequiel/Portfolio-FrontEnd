import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.interface';
import { PersonaService } from 'src/app/servicios/persona.service';
import { FormControl, NgForm } from '@angular/forms';
import { TokenService } from 'src/app/servicios/token.service';

import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  public personas: Persona[] = [];
  public editPersona: Persona | undefined;
  public deletePersona!: Persona;
  roles!: string[];
  isAdmin: boolean = false;

  name = new FormControl('');

  constructor(private personaService: PersonaService,
  private tokenService: TokenService
  ){}

  ngOnInit() {
    this.getPersonas();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(role => {
      if (role === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

public getPersonas(): void{
  this.personaService.getPersonas().subscribe(
(response: Persona[]) =>{
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

}
}
