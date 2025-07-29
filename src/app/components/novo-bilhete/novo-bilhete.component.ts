import { Component, output, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Bilhete } from '../../models/bilhete.model';

@Component({
  selector: 'app-novo-bilhete',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './novo-bilhete.component.html',
  styleUrl: './novo-bilhete.component.css'
})
export class NovoBilheteComponent {
  mensagemEnviada = output<Bilhete>();

  nomeAutor = signal('');
  textoMensagem = signal('');

  // Computed para validação do formulário
  isFormValid = computed(() =>
    this.nomeAutor().trim().length > 0 && this.textoMensagem().trim().length > 0
  );

  onSubmit(): void {
    if (this.nomeAutor().trim() && this.textoMensagem().trim()) {
      const novaMensagem: Bilhete = {
        nome: this.nomeAutor().trim(),
        mensagem: this.textoMensagem().trim(),
        data: new Date().toLocaleString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      this.mensagemEnviada.emit(novaMensagem);
      this.limparFormulario();
    }
  }

  private limparFormulario(): void {
    this.nomeAutor.set('');
    this.textoMensagem.set('');
  }

  updateNome(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.nomeAutor.set(target.value);
  }

  updateMensagem(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.textoMensagem.set(target.value);
  }
}
