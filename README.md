# Url_Shortener
API to shorten large URLs

## Métodos suportados pela API

* /  -> Método padrão da API quando entrar no serviço, neste método é possível colocar uma URL e será devolvido uma URL encurtada

* /shortened/:id  -> Esse método espera que você passe uma ID para que seja retornada a URL encurtada referente a ID. <br>
  Ex: localhost:3000/shortened/1 -> Retornará a URL encurtada referente ao ID 1.

* /shortened/date/:date  -> Esse método espera que seja passada uma datá para que ele retorne um JSON com todas as URLs cadastrada na data informada. <br>
  Ex: localhost:3000/shortened/date/11-8-2022   ->   Retornará todas os códigos de URLs que foram encurtadas na data especificada. <br>
  OBS.: A data precisa estar no format DD-M-ANO separadas por traço, conforme o exemplo.
  
## Iniciando a API

* No terminal dentro da pasta do projeto executar:
  
  - npm install  -> Para baixar as dependências do projeto.
  - node run start -> Para iniciar o projeto
  - Após isso no navegador executar: localhost:3000 , para abrir o projeto.


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
CURSO: PÓS-GRADUAÇÃO DESENVOLVIMENTO MOBILE <br>
ALUNO: ERICK DO NASCIMENTO BEZERRA  <br>
TURMA: 2022
