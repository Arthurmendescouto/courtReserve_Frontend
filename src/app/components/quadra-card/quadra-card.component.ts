import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quadra-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quadra-card.component.html',
  styleUrl: './quadra-card.component.css'
})
export class QuadraCardComponent {
@Input() name!: string;
@Input() stars!: number;
@Input() sport!: string;
@Input() city!: string;
@Input() price!: number;
@Input() slots!: string[];
@Input() imageUrl!: string;

}
