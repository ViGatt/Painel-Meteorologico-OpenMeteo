import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiarioService {

  private localStorageKey = 'diariometeo'; 

  constructor() { }


  getAnotacoes(): any[] {
    const data = localStorage.getItem(this.localStorageKey);
    return data ? JSON.parse(data) : [];
  }

  addAnotacao(novaAnotacao: any): void {
    const anotacoesAtuais = this.getAnotacoes();
    
    anotacoesAtuais.unshift(novaAnotacao);

    localStorage.setItem(this.localStorageKey, JSON.stringify(anotacoesAtuais));
  }
}