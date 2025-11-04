# (A)Yae Miko | Roleplay Chat

## Tabela de Conteúdos
1. [Sobre o Projeto](#sobre-o-projeto)
	* [Funcionalidades](#funcionalidades)
	* [Tecnologias Utilizadas](#tecnologias-utilizadas)
2. [Iniciando o Projeto](#iniciando-o-projeto)
	* [Pré-requisitos](#pré-requisitos)
	* [Instalação](#instalação)
3. [Uso](#uso)
4. [Contribuidores](#contribuidores)
5. [Contato](#contato)

## 1. Sobre o Projeto

Esta é uma aplicação de chat que utiliza o Gemini AI, modelo gemini 1.5 pro, para fornecer uma experiência de roleplay conversacional, onde a inteligência artificial personifica a personagem Yae Miko, de Genshin Impact.
O objetivo principal é criar uma experiência de chat imersiva com a personagem, incluindo a funcionalidade de exibir os "pensamentos internos" da IA para o usuário, simulando um meta-diálogo.

O projeto foi construído com uma arquitetura dividida: uma interface frontend moderna desenvolvida com Next.js e um backend leve em Python/Flask para gerenciar as interações com a API do Google Gemini.

### Funcionalidades

* **Chat Roleplay:** Interação com uma IA configurada para atuar como Yae Miko.
* **Visão de Pensamentos Internos (Inner Thoughts):** As respostas do modelo incluem uma seção colapsável, que revela os pensamentos internos da personagem, não exibidos no diálogo principal.
* **Interface Amigável:** Design moderno utilizando Tailwind CSS e a biblioteca de componentes DaisyUI.
* **Contexto de Conversa Persistente:** O chat é iniciado com um histórico de contexto pré-definido e mantém a sessão ativa para uma conversação contínua.
* **Identificação de Papéis:** As mensagens do usuário são exibidas como "Traveler" (Viajante), e as respostas da IA como "Yae Miko".

### Tecnologias Utilizadas

**Frontend:**
* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **DaisyUI**
* **Axios**
* **React-markdown**

**Backend (API):**
* **Python**
* **Flask**
* **Google GenAI SDK**
* **Flask-cors**

## 2. Iniciando o Projeto
### Pré-requisitos:
Software de desenvolvimento web (ex: Visual Studio Code, Sublime Text). Navegador web (ex: Chrome, Firefox, Safari).  
Conhecimento de React, HTML, Tailwind, Javascript,  
Você precisará ter instalado em sua máquina:
* Node.js e npm
* Python 3 e pip

Além disso, é necessário configurar as variáveis de ambiente em um arquivo `.env` na raiz do projeto, contendo:
* `GOOGLE_API_KEY`: Sua chave de API do Google Gemini.
* `SYS_INSTRUCTIONS`: As instruções do sistema para definir a persona e regras da IA.
* `SCENARIO`: A descrição inicial do cenário para a sessão de chat.

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/BragaMPedro/ai_miko-app
    cd a-yae_miko-app
    ```

2.  Instale as dependências do Frontend (Next.js):
    ```bash
    npm install
    ```

3.  Instale as dependências do Backend (Python/Flask):
    ```bash
    pip3 install -r requirements.txt
    ```

4.  Crie o arquivo `.env` e configure as variáveis de ambiente (conforme os Pré-requisitos).

5.  Inicie a aplicação em modo de desenvolvimento. O comando usa `concurrently` para iniciar o frontend e o backend Flask simultaneamente, serão executados 'npm run next-dev' (next dev) e 'npm run flask-dev' (python -m flask --app api/index.py run -p 5328 --debug)
    ```bash
    npm run dev
    ```
    O frontend do Next.js será iniciado, e o backend Flask rodará na porta `5328`.

## 3. Uso

Após iniciar a aplicação, acesse a interface no seu navegador. O chat é iniciado com a cena e persona definidas em suas variáveis de ambiente.

1.  **Envie uma Mensagem:** Digite sua mensagem no campo de entrada e clique em "Enviar".
2.  **Visualização:** Sua mensagem será exibida com o nome de "Traveler".
3.  **Resposta da IA:** A resposta da IA virá como "Yae Miko".
4.  **Descubra os Pensamentos Internos:** Clique na seção "spoiler" na bolha de chat da Yae Miko para ver os pensamentos que a IA gerou durante a resposta.

## Contribuidores:
<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/pedrobragaresume/">
        <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/111090976?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>Pedro Braga</b></sub>
      </a>
      <br />
       <br />
      <a href="https://www.linkedin.com/in/pedrobragaresume/" title="LindedIn">
        <img src="https://img.shields.io/badge/-Pedro-blue?style=flat-square&logo=Linkedin&logoColor=white" />
      </a>
    </td>
  </tr>
</table>

## Contato
[Link para o repositório do GitHub](https://github.com/BragaMPedro/Dnd-check-logger)
Pedro Braga Magalhães - [pedrobmagalhaes95@gmai.com](mailto:pedrobmagalhaes95@gmail.com)
