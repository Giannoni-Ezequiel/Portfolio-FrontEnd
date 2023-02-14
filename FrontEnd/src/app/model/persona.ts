export class Persona 
{
    id?: number;
    nombre: String;
    apellido: String;
    titulo: String;
    sobre_mi: String;
    img: String;

    constructor(nombre: String,apellido: String,titulo: String, sobre_mi: String, img: String)
    {
        this.nombre = nombre;
        this.apellido =apellido;
        this.titulo = titulo;
        this.sobre_mi = sobre_mi;
        this.img = img;
    }
}