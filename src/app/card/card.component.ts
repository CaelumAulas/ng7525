import { Component, OnInit, Input } from '@angular/core';
import { Foto } from '../foto/foto';

@Component({
  selector: 'caelumpic-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent implements OnInit {

  @Input() foto = new Foto()

  constructor() { }

  ngOnInit() {
  }

}
