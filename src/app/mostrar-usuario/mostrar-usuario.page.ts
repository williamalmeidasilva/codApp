import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/services/post';
 
@Component({
  selector: 'app-mostrar-usuario',
  templateUrl: './mostrar-usuario.page.html',
  styleUrls: ['./mostrar-usuario.page.scss'],
})
export class MostrarUsuarioPage implements OnInit {
 
  id:string = "";
  nome:string = "";
  usuario:string = "";
  senha:string = "";
  nivel:string = "";
 
  constructor( private route:Router, private provider: Post, private routerAct : ActivatedRoute) { }
 
  ngOnInit() {
    this.routerAct.params.subscribe((data:any)=>{
      this.id = data.id;
      this.nome = data.nome;
      this.usuario = data.usuario;
      this.senha = data.senha;
      this.nivel = data.nivel;
    });
 
    return new Promise(resolve=>{
      let dados = {
        requisicao: 'editar',
        nome: this.nome,
        usuario: this.usuario,
        senha: this.senha,
        nivel: this.nivel,
        id: this.id
      };
    });
  }
}