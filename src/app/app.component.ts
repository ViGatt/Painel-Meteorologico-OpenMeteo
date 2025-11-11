import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TempoService } from './services/tempo.service';

import { BuscaTempoComponent } from './components/busca-tempo/busca-tempo.component';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, BuscaTempoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'painel-meteo';
  weatherData: any;

  constructor(private tempoService: TempoService) {}

  onCitySearch(city: string) {
    console.log('Buscando por:', city);

    this.tempoService
      .getCoordinates(city)
      .pipe(
        switchMap((dadosGeo) => {
          const lat = dadosGeo.results[0].latitude;
          const lon = dadosGeo.results[0].longitude;

          return this.tempoService.getForecast(lat, lon);
        })
      )
      .subscribe({
        next: (data) => {
          this.weatherData = data;
          console.log('Dados recebidos:', data);
        },
        error: (err) => {
          console.error('Erro na cadeia de busca:', err);
          alert('Cidade não encontrada ou erro na API.');
        },
      });
  }
}
