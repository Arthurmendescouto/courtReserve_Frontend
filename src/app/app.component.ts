import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { ExplorarQuadrasComponent } from "./components/explorar-quadras/explorar-quadras.component";
import { QuadraListComponent } from './components/quadra-list/quadra-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, ExplorarQuadrasComponent, QuadraListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'courtReserve_Frontend';
}
