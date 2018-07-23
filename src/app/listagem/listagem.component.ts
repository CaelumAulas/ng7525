import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'caelumpic-listagem',
  templateUrl: './listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit {

  listaFotos

  constructor(private conexaoApi: HttpClient){
      
    conexaoApi.get('http://localhost:3000/v1/fotos')
              .subscribe(
                (fotosApi) => {
                  this.listaFotos = fotosApi
                }
              )
  }

  ngOnInit() {
  }

  deletar(fotoApagada){
    this.conexaoApi
        .delete('http://localhost:3000/v1/fotos/'+fotoApagada._id)
        .subscribe(
          () => {

this.listaFotos = Array.from(this.listaFotos)
                      .filter((fotoLoop)=> {
                            if(fotoLoop != fotoApagada){
                              return fotoLoop
                            }
                        })
            
            
          }
        )
  }

}
