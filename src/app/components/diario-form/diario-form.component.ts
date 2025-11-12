import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DiarioService } from '../../services/diario.service'; 

@Component({
  selector: 'app-diario-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ],
  templateUrl: './diario-form.component.html',
  styleUrl: './diario-form.component.scss'
})
export class DiarioFormComponent implements OnInit { 

  diarioForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private diarioService: DiarioService
  ) {}

  ngOnInit(): void {
    this.diarioForm = this.fb.group({
      data: [new Date().toISOString().split('T')[0], Validators.required],
      observacoes: ['', Validators.required],
      fotoUrl: [''] 
    });
  }

  onSubmit() {
    if (this.diarioForm.invalid) {
      alert('Por favor, preencha a data e as observações.');
      return;
    }

    this.diarioService.addAnotacao(this.diarioForm.value);

    this.diarioForm.reset({
      data: new Date().toISOString().split('T')[0], 
      observacoes: '',
      fotoUrl: ''
    });
    
    console.log('Anotação salva!', this.diarioService.getAnotacoes());
    alert('Anotação salva com sucesso!');
  }
}