export interface Jwt
{
    token: string;
    type: string;
    nombreUsuario: string;
    authorities: string[]; 
}