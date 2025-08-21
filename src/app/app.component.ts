import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { ExplorarQuadrasComponent } from "./components/explorar-quadras/explorar-quadras.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ExplorarQuadrasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'courtReserve_Frontend';
}
