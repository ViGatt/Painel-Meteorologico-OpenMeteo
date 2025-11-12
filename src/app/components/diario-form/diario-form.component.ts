import { Component, OnInit, OnDestroy } from '@angular/core'; 
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DiarioService } from '../../services/diario.service';
import { Subscription } from 'rxjs'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diario-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './diario-form.component.html',
  styleUrl: './diario-form.component.scss'
})
export class DiarioFormComponent implements OnInit, OnDestroy { 

  diarioForm!: FormGroup;
  isEditMode = false; 
  private currentEditingId: number | null = null;
  private editSubscription!: Subscription; 
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

    this.editSubscription = this.diarioService.getEntryToEdit().subscribe(entry => {
      if (entry) {
        // MODO DE EDIÇÃO
        this.diarioForm.patchValue(entry); 
        this.isEditMode = true;
        this.currentEditingId = entry.id;
      } else {
        this.resetForm();
      }
    });
  }

  ngOnDestroy(): void {
    this.editSubscription.unsubscribe();
  }

  onSubmit() {
    if (this.diarioForm.invalid) return;

    if (this.isEditMode) {
      // ATUALIZAR
      const updatedEntry = { id: this.currentEditingId, ...this.diarioForm.value };
      this.diarioService.updateAnotacao(updatedEntry);
    } else {
      // CRIAR
      this.diarioService.addAnotacao(this.diarioForm.value);
    }

    this.diarioService.selectEntryToEdit(null); 
  }

  onCancelEdit(): void {
    this.diarioService.selectEntryToEdit(null); 
  }

  private resetForm(): void {
    this.diarioForm.reset({
      data: new Date().toISOString().split('T')[0],
      observacoes: '',
      fotoUrl: ''
    });
    this.isEditMode = false;
    this.currentEditingId = null;
  }
}