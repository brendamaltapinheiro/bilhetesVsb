import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bilhete } from '../../models/bilhete.model';

@Component({
  selector: 'app-mural',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mural.component.html',
  styleUrl: './mural.component.css'
})
export class MuralComponent {
  mensagens = input<Bilhete[]>([]);
}
