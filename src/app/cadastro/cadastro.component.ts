import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'caelumpic-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  foto = new Foto()
  constructor(private conexaoApi: HttpClient){ }

  ngOnInit() {}

  salvar(){    
    this.conexaoApi.post(
        'http://localhost:3000/v1/fotos/',
        this.foto
      ).subscribe(
        (resposta) => console.log(resposta)
        ,
        (erro) => console.log(erro)
        ,
        () => console.log('complete')
      )
    
  }
}
