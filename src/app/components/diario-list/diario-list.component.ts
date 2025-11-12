import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiarioService } from '../../services/diario.service'; 
import { Observable } from 'rxjs'; 

@Component({
  selector: 'app-diario-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diario-list.component.html',
  styleUrl: './diario-list.component.scss'
})
export class DiarioListComponent implements OnInit {

  anotacoes$!: Observable<any[]>;

  constructor(private diarioService: DiarioService) {}

  ngOnInit(): void {
    this.anotacoes$ = this.diarioService.getAnotacoes();
  }

  onDelete(anotacao: any): void {
    if (confirm('Tem certeza que deseja excluir esta anotação?')) {
      this.diarioService.deleteAnotacao(anotacao);
    }
  }
}