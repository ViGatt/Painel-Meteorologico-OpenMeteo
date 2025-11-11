import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-busca-tempo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './busca-tempo.component.html',
  styleUrl: './busca-tempo.component.scss',
})
export class BuscaTempoComponent {
  @Output() search = new EventEmitter<string>();

  cityName: string = '';

  onSearch() {
    if (this.cityName && this.cityName.trim() !== '') {
      this.search.emit(this.cityName);
      this.cityName = '';
    }
  }
}
