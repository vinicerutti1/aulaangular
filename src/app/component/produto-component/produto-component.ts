import { Component, inject } from '@angular/core';
import { ProdutoService } from '../../services/produto-service';
import { ProdutoModel } from '../../models/produtoModels';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produto-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './produto-component.html',
  styleUrl: './produto-component.css'
})

export class ProdutoComponent {

  private service = inject(ProdutoService);

  produtos: ProdutoModel[] = [];
  novoNome = '';

  mgOnInit(){
    this.carregar();
  }

  carregar(){
    this.produtos = this.service.listar();
  }

  adicionar(){
    const nome= this.novoNome.trim();
    if(!nome) return;
    this.service.adicionar(nome);
    this.novoNome
    this.carregar();
  }

  remover(id: number){
    this.service.remover(id);
    this.carregar();
  }


}

