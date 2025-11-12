
import { Component, Input, OnChanges } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet'; 
import { latLng, tileLayer, marker, Map, LatLng } from 'leaflet'; 
@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [CommonModule, LeafletModule], 
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.scss'
})
export class MapaComponent implements OnChanges { 

  @Input() lat: number = 0;
  @Input() lon: number = 0;

  map!: Map;
  mapOptions: any;
  mapLayers: any[] = [];

  constructor() {
    this.initializeMapOptions();
  }

  ngOnChanges(): void {
    if (!this.lat || !this.lon) return;

    this.mapLayers = [
      marker([ this.lat, this.lon ])
    ];

    if (this.map) {
      this.map.panTo(new LatLng(this.lat, this.lon));
    }
  }

  onMapReady(map: Map): void {
    this.map = map;
    if (this.lat && this.lon) {
      this.map.panTo(new LatLng(this.lat, this.lon));
    }
  }
  private initializeMapOptions(): void {
    this.mapOptions = {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18,
          attribution: '© OpenStreetMap'
        })
      ],
      zoom: 11,
      center: latLng(this.lat, this.lon) 
    };
  }
}