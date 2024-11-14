import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from '../../model/login.usuario';
import { AuthService } from '../../servicios/auth.service';
import { TokenService } from '../../servicios/token.service';
@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})

export class IniciarSesionComponent implements OnInit
{
  isLogged = false;
  isLoginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errorMessage!: string

  constructor
  (
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
    ) {}

  home() {
      this.router.navigate([''])
    }

  ngOnInit() {
    if(this.tokenService.getToken())
    {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
      }
    }

  onLogin(): void
  {
      this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
      this.authService.login(this.loginUsuario).subscribe({
        next: (data) =>
        {
          this.isLogged = true;
          this.isLoginFail = false;
          //this.tokenService.setToken(data.token); // no se manda, no recibido del back
          //this.tokenService.setUserName(data.nombreUsuario); // no se manda, no recibido del back
          this.tokenService.setAuthorities(data.authorities);
          this.roles = data.authorities;
          this.router.navigate(['/']);
          },
        error: (err) =>
        {
          this.isLogged = false;
          this.isLoginFail = true;
          console.log(err);
          this.errorMessage = err.error.message;
          console.log(err.error.message);
          }
        })
    }

}
