import { Component, Input } from "@angular/core";
import { Foto } from "./foto";

@Component({
    selector: 'foto',
    template: '<img [src]="url" [alt]="titulo" class="card-img-top">',
    styles: []    
})
export class FotoComponent extends Foto {
    @Input() url = '';
    @Input() titulo = '';

}