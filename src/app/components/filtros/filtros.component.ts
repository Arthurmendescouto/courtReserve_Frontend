import { CommonModule } from '@angular/common'; // <-- Importa o que vai usar
import { Component } from '@angular/core';

@Component({
  selector: 'app-filtros',
  // 1. Declara que é independente
  standalone: true,
  // 2. Importa suas próprias dependências para o template funcionar
  imports: [ CommonModule ],
  templateUrl: './filtros.component.html',
  styleUrl: './filtros.component.css'
})
export class FiltrosComponent {
  filtros: string[] = ['Todos', 'Futebol', 'Basquete', 'Tênis', 'Vôlei'];
  filtroAtivo: string = 'Todos';

  constructor() { }

  selecionarFiltro(filtro: string): void {
    this.filtroAtivo = filtro;
    console.log('Filtro ativo agora é:', this.filtroAtivo);
  }
}
