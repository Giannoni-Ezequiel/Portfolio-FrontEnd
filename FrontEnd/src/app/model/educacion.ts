export class Educacion
{
    id?: number;
    lugar: string;
    fecha_inicio: string;
    fecha_fin: string;
    titulo: string;
    img: string;
    descripcion: string;

    constructor(lugar: string, fecha_inicio: string, fecha_fin: string, 
        titulo: string, img: string, descripcion: string)
        {
            this.lugar = lugar;
            this.fecha_inicio = fecha_inicio;
            this.fecha_fin = fecha_fin;
            this.titulo = titulo;
            this.img = img;
            this.descripcion = descripcion;
        }
}