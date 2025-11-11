import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TempoService } from './services/tempo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'painel-meteo';
  weatherData: any;

  constructor(private tempoService: TempoService) {}

  ngOnInit(): void {
    this.tempoService.getForecast(-23.55, -46.63).subscribe({
      next: (data) => {
        this.weatherData = data;
        console.log('Dados recebidos:', data);
      },
      error: (err) => {
        console.error('Erro ao buscar dados:', err);
      },
    });
  }
}
