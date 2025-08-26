import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuadraCardComponent } from "../quadra-card/quadra-card.component";


@Component({
  selector: 'app-quadra-list',
  standalone: true,
  imports: [QuadraCardComponent, CommonModule],
  templateUrl: './quadra-list.component.html',
  styleUrls: ['./quadra-list.component.css']
})
export class QuadraListComponent {
quadras=[
   {
   name: 'Arena Basquete Pampulha',
    stars: 4.9,
    sport: 'Basquete',
    city: 'Belo Horizonte',
    price: 110,
    slots: ['18:00', '19:00', '20:00'],
    imageUrl: 'assets/basquete.jpg'
  },
  {
    name: 'Quadra Society Central',
    stars: 4.7,
    sport: 'Futebol Society',
    city: 'São Paulo',
    price: 150,
    slots: ['09:00', '10:00', '11:00'],
    imageUrl: 'assets/society.jpg'
  },
  {
    name: 'Arena Vôlei Praia',
    stars: 4.8,
    sport: 'Vôlei',
    city: 'Rio de Janeiro',
    price: 130,
    slots: ['15:00', '16:00', '17:00'],
    imageUrl: 'assets/volei.jpg'
  },
  {
    name: 'Clube Tênis Paulista',
    stars: 4.6,
    sport: 'Tênis',
    city: 'São Paulo',
    price: 180,
    slots: ['08:00', '09:30', '11:00'],
    imageUrl: 'assets/tenis.jpg'
  }
]
}
