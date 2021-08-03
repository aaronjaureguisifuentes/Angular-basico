import { Component } from "@angular/core";

@Component({
    selector : 'app-heroe',
    templateUrl : 'heroe.component.html'
})
export class HeroeComponent{
    
    nombre : string = 'Iroman';
    edad : number = 45

    get nombreCapitalizado() : string{
        return this.nombre.toUpperCase();
    }

    ObtenerNombre() : string{
        return `${ this.nombre } - ${ this.edad } `;
        // return this.nombre + ' - ' + this.edad  (es lo mismo de arriba)
    }

    cambiarNombre() : void{
        this.nombre = 'Derzu Cabro';
    }

    cambiarEdad() : void {
        this.edad = 30;
    }

}
