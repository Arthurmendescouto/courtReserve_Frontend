import { Component } from '@angular/core';
import { FiltrosComponent } from '../filtros/filtros.component';
import { QuadraListComponent } from '../quadra-list/quadra-list.component';

@Component({
  selector: 'app-explorar-quadras',
  imports: [FiltrosComponent,QuadraListComponent],
  templateUrl: './explorar-quadras.component.html',
  styleUrl: './explorar-quadras.component.css'
})
export class ExplorarQuadrasComponent {

}
