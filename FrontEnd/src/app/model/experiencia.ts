import { Persona } from "./persona";

export class Experiencia 
{
    id?: number;
    cargo: string;
    descripcion: string;
    fecha_inicio: string;
    fecha_fin: string;
    nombreEmpresa: string;
    persona: Persona;

    constructor(cargo: string, nombreEmpresa: string, fecha_inicio: string, 
        fecha_fin: string,descripcion: string)
    {
        this.cargo = cargo;
        this.nombreEmpresa = nombreEmpresa;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.descripcion = descripcion;
    }
}