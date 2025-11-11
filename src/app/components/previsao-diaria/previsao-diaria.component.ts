import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-previsao-diaria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './previsao-diaria.component.html',
  styleUrl: './previsao-diaria.component.scss',
})
export class PrevisaoDiariaComponent {
  @Input() dailyData: any;
}
