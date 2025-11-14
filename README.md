# 🚀 Desafio CIAg - Painel Meteorológico (Open-Meteo)

Este projeto é uma solução para o Desafio 4 do processo seletivo da CIAg. É um painel meteorológico construído em Angular que consome a API Open-Meteo e permite ao usuário gerenciar um diário meteorológico local.

##  Funcionalidades

* **Busca de Previsão:** Busca de previsão do tempo por nome da cidade, utilizando a API de Geocoding e Previsão da Open-Meteo.
* **Exibição de Dados:** Exibe a previsão diária (7 dias) e horária (24 horas), incluindo temperatura, chuva e vento.
* **CRUD de Diário:** Um diário meteorológico completo (Criar, Ler, Atualizar e Excluir) com persistência local (LocalStorage).
* **Mapa Interativo (Extra):** Exibe um pino no mapa com a localização exata da cidade buscada.
* **UI/UX Moderna:** Interface responsiva com um tema global (variáveis CSS), layout em cards e ícones (Google Material Icons) para uma melhor experiência do usuário.


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
* **Google Material Icons** (Para a UI)

## Instruções de Instalação e Execução 

1.  Clone este repositório:
    ```bash
    git clone https://github.com/ViGatt/Painel-Meteorologico-OpenMeteo
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

O deploy deste projeto está disponível em: `https://vigatt.github.io/Painel-Meteorologico-OpenMeteo/`