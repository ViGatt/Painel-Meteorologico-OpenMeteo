import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class DiarioService {

private localStorageKey = 'diariometeo';
private anotacoesSubject: BehaviorSubject<any[]>;
  
  private entryToEditSubject = new BehaviorSubject<any>(null);

  constructor() {
    const data = localStorage.getItem(this.localStorageKey);
    const anotacoesIniciais = data ? JSON.parse(data) : [];
    this.anotacoesSubject = new BehaviorSubject<any[]>(anotacoesIniciais);
  }

  private atualizarDados(anotacoes: any[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(anotacoes));
    this.anotacoesSubject.next(anotacoes);
  }

  getAnotacoes(): Observable<any[]> {
    return this.anotacoesSubject.asObservable();
  }

  addAnotacao(novaAnotacao: any): void {
    const anotacoesAtuais = this.anotacoesSubject.getValue();
    
    // Adiciona um ID único
    const anotacaoComId = { id: Date.now(), ...novaAnotacao };
    
    anotacoesAtuais.unshift(anotacaoComId);
    this.atualizarDados(anotacoesAtuais);
  }

  // Deleta pelo ID
  deleteAnotacao(id: number): void {
    let anotacoesAtuais = this.anotacoesSubject.getValue();
    anotacoesAtuais = anotacoesAtuais.filter(item => item.id !== id);
    this.atualizarDados(anotacoesAtuais);
  }

  // Método de Update
  updateAnotacao(anotacaoAtualizada: any): void {
    let anotacoesAtuais = this.anotacoesSubject.getValue();
    
    // Encontra o índice da anotação pelo ID
    const index = anotacoesAtuais.findIndex(item => item.id === anotacaoAtualizada.id);
    
    if (index > -1) {
      anotacoesAtuais[index] = anotacaoAtualizada;
      this.atualizarDados(anotacoesAtuais);
    }
  }

  selectEntryToEdit(anotacao: any): void {
    this.entryToEditSubject.next(anotacao);
  }

  getEntryToEdit(): Observable<any> {
    return this.entryToEditSubject.asObservable();
  }
}