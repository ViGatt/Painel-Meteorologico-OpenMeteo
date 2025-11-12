# 🚀 Desafio CIAg - Painel Meteorológico (Open-Meteo)

Este projeto é uma solução para o Desafio 4 do processo seletivo da CIAg. É um painel meteorológico construído em Angular que consome a API Open-Meteo e permite ao usuário gerenciar um diário meteorológico local.

##  Funcionalidades

* **Busca de Previsão:** Busca de previsão do tempo por nome da cidade, utilizando a API de Geocoding e Previsão da Open-Meteo.
* **Exibição de Dados:** Exibe a previsão diária (7 dias) e horária (24 horas), incluindo temperatura, chuva e vento.
* **CRUD de Diário:** Um diário meteorológico completo (Criar, Ler, Atualizar e Excluir) com persistência local (LocalStorage).

##  Tecnologias Utilizadas

* **Angular (v17+)** 
* **TypeScript**
* **RxJS** (para encadeamento de chamadas de API com `switchMap`)
* **Angular Reactive Forms** (para o formulário do diário)
* **SCSS** (para estilização)
* **API Open-Meteo** (Geocoding & Forecast)
* **LocalStorage** (para persistência do diário)
* **Leaflet** (para o mapa interativo)
* **@asymmetrik/ngx-leaflet** (Leaflet para Angular)

## Instruções de Instalação e Execução 

1.  Clone este repositório:
    ```bash
    git clone [URL_DO_REPOSITORIO]
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd painel-meteo
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```
4.  Execute o servidor de desenvolvimento:
    ```bash
    ng serve -o
    ```
5.  Abra `http://localhost:4200/` no seu navegador.

## Deploy Online 

O deploy deste projeto está disponível em: ``