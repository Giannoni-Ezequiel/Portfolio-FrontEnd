export class Experiencia 
{
    id?: number;
    cargo: string;
    nombre_empresa: string;
    fecha_inicio: string;
    fecha_fin: string;
    descripcion: string;

    constructor(cargo: string, nombre_empresa: string, fecha_inicio: string, 
        fecha_fin: string,descripcion: string)
    {
        this.cargo = cargo;
        this.nombre_empresa = nombre_empresa;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.descripcion = descripcion;
    }
}