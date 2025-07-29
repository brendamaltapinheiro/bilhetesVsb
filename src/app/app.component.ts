import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovoBilheteComponent } from './components/novo-bilhete/novo-bilhete.component';
import { MuralComponent } from './components/mural/mural.component';
import { Bilhete } from './models/bilhete.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NovoBilheteComponent, MuralComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  listaMensagens = signal<Bilhete[]>([
    {
      nome: 'Time VSB ',
      mensagem: 'Parabéns por serem um time unido e colaborativo!',
      data: '28/01/2025 19:00'
    },
    {
      nome: 'Desenvolvedores',
      mensagem: 'Adoro aprender com vocês a cada dia!',
      data: '28/01/2025 19:15'
    },
    {
      nome: 'Gafanhotos',
      mensagem: 'Vocês são incríveis! Continuem assim!',
      data: '28/01/2025 19:30'
    }
  ]);

  adicionarNovaMensagem(novaMensagem: Bilhete): void {
    this.listaMensagens.update(mensagensAtuais => [novaMensagem, ...mensagensAtuais]);
  }
}
