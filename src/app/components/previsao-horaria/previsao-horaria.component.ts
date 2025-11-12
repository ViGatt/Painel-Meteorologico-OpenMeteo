import { Component, Input } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-previsao-horaria',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './previsao-horaria.component.html',
  styleUrl: './previsao-horaria.component.scss'
})
export class PrevisaoHorariaComponent {
  @Input() hourlyData: any;
}