import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class DiarioService {

  private localStorageKey = 'diariometeo';
  
  private anotacoesSubject: BehaviorSubject<any[]>;

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
    anotacoesAtuais.unshift(novaAnotacao);
    this.atualizarDados(anotacoesAtuais);
  }

  deleteAnotacao(anotacaoParaDeletar: any): void {
    let anotacoesAtuais = this.anotacoesSubject.getValue();
    
    anotacoesAtuais = anotacoesAtuais.filter(item => 
      item.data !== anotacaoParaDeletar.data || 
      item.observacoes !== anotacaoParaDeletar.observacoes
    );
    
    this.atualizarDados(anotacoesAtuais);
  }
}