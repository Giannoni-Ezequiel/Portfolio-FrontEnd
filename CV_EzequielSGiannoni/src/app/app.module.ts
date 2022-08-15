import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { PieDePaginaComponent } from './componentes/pie-de-pagina/pie-de-pagina.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoAPComponent } from './componentes/logo-ap/logo-ap.component';
import { HttpClientModule } from '@angular/common/http';

import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component' ;
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { HysComponent } from './componentes/hys/hys.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    PieDePaginaComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ProyectoComponent,
    EducacionComponent,
    HysComponent,
    LogoAPComponent,
    AcercaDeComponent,
    ExperienciaComponent,
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({
      
    }),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
