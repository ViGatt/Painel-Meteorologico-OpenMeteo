import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TempoService } from './services/tempo.service';
import { BuscaTempoComponent } from './components/busca-tempo/busca-tempo.component';
import { switchMap } from 'rxjs/operators';
import { DiarioFormComponent } from './components/diario-form/diario-form.component';
import { DiarioListComponent } from './components/diario-list/diario-list.component';

import { PrevisaoDiariaComponent } from './components/previsao-diaria/previsao-diaria.component';
import { PrevisaoHorariaComponent } from './components/previsao-horaria/previsao-horaria.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    BuscaTempoComponent,
    PrevisaoDiariaComponent,
    PrevisaoHorariaComponent,
    DiarioFormComponent,
    DiarioListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  cityName: string = '';
  dailyForecastData: any;
  hourlyForecastData: any;

  constructor(private tempoService: TempoService) {}

  onCitySearch(city: string) {
    this.cityName = city;

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
          console.log('Dados completos recebidos:', data);

          this.dailyForecastData = data.daily;
          this.hourlyForecastData = data.hourly;
        },
        error: (err) => {
          console.error('Erro na cadeia de busca:', err);
          alert('Cidade não encontrada ou erro na API.');
          this.dailyForecastData = null;
          this.hourlyForecastData = null;
        },
      });
  }
}
