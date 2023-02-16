export class Educacion
{
    id?: number;
    titulo: string;
    nombre: string;
    fecha_inicio: string;
    fecha_fin: string;
    img: string;
    descripcion: string;

    constructor(titulo: string, nombre: string, 
        fecha_inicio: string, 
        fecha_fin: string,  
        img: string, descripcion: string)
        {
            this.titulo = titulo;
            this.nombre = nombre;
            this.fecha_inicio = fecha_inicio;
            this.fecha_fin = fecha_fin;
            this.img = img;
            this.descripcion = descripcion;
        }
}