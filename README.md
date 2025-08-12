# 📌 Mural de Recados Dinâmico

Este repositório apresenta um "Mural de Recados Dinâmico", uma aplicação web desenvolvida com **HTML**, **CSS** e **JavaScript Vanilla**. O projeto simula um mural interativo onde usuários podem visualizar e adicionar recados, com um design que imita a aparência de post-its. A aplicação se conecta a uma API para persistir os dados e oferece uma experiência de usuário fluida e responsiva.

---

### ✨ Funcionalidades Implementadas

* **Exibição de Recados:** O mural exibe recados obtidos de uma API externa, organizados em post-its individuais com cores e rotações aleatórias para um visual mais orgânico.
* **Adicionar Novos Recados:** Através de um botão dedicado, o usuário pode abrir um modal para preencher um formulário com seu nome e mensagem. O recado é então enviado para a API e adicionado ao mural.
* **Animação Interativa:** Ao passar o mouse sobre os post-its, uma animação suave de "flutuar" e um sombreamento mais pronunciado são ativados, dando vida à interface.
* **Ordenação de Recados:** Um botão de "Ordenar Autores" permite alternar entre a ordem padrão de exibição e a ordenação alfabética por nome de autor.
* **Responsividade:** O layout foi projetado para se adaptar a diferentes tamanhos de tela (desktop, tablet, mobile), garantindo uma experiência consistente em qualquer dispositivo.
* **Feedback Visual:** A seção de adicionar recado abre um modal que desfoca o fundo da página, mantendo o foco na tarefa do usuário.

---

### 🎨 Identidade Visual e Design

A identidade visual do mural foi cuidadosamente pensada para criar uma experiência agradável e funcional, com um toque artesanal.

* **Tema de Post-it:** Cada recado é estilizado como um post-it, utilizando imagens de fundo com cores vibrantes (roxo, azul, verde e rosa) e uma tipografia que imita a escrita à mão.
* **Animações:** A propriedade `transition` foi utilizada para criar animações de `hover` suaves, que destacam os recados quando interage.
* **Modal Dinâmico:** O modal de adicionar recado tem sua cor de fundo e do botão definidas aleatoriamente, em harmonia com as cores dos post-its, proporcionando um toque visual dinâmico.
* **Layout Responsivo:** Utilização de `media queries` para garantir que o layout se ajuste perfeitamente em telas menores, reorganizando os elementos para uma melhor visualização.

---

### 🚀 Tecnologias Utilizadas

* **HTML5:** Estrutura semântica da página.
* **CSS3:** Estilização, animações, efeitos visuais e responsividade (com `media queries`).
* **JavaScript (Vanilla):** Lógica principal da aplicação, incluindo:
    * Manipulação do DOM.
    * Consumo de API (`fetch` com métodos GET e POST).
    * Gerenciamento de eventos (`addEventListener`).
    * Lógica de ordenação e geração de elementos dinâmicos.
* **API REST:** Conexão com um serviço de backend para buscar e adicionar recados de forma persistente.

---

### 📁 Estrutura do Projeto

A organização do projeto segue uma estrutura padrão para facilitar a compreensão e manutenção:

 ```
├── assets/
│   ├── alfinete.png             # Imagem do alfinete no cabeçalho.
│   ├── recadoazul.png          # Imagem de fundo do post-it azul.
│   ├── recadorosa.png          # Imagem de fundo do post-it rosa.
│   ├── recadoroxo.png          # Imagem de fundo do post-it roxo.
│   └── recadoverde.png         # Imagem de fundo do post-it verde.
├── index.html                  # Arquivo principal da estrutura da página.
├── scripts.js                  # Lógica principal da aplicação em JavaScript.
└── style.css                   # Estilos visuais e responsividade da página.
 ```

---

### ▶️ Como Rodar o Projeto

Este projeto é uma aplicação web estática e pode ser executado diretamente no seu navegador. Siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/anads07/MuralDeRecados
    cd MuralDeRecados
    ```

2.  **Abra o arquivo `index.html`:**
    Basta abrir o arquivo `index.html` em qualquer navegador web moderno para visualizar a aplicação em funcionamento.

---

### 💡 Aprendizados Chave e Habilidades Desenvolvidas

Este projeto foi uma excelente oportunidade para desenvolver e aprofundar conhecimentos em:

* **Manipulação de API:** Consumo de dados (`GET`) e envio de informações (`POST`) para um serviço externo.
* **Interatividade e Eventos:** Criação de uma interface dinâmica com respostas a eventos de clique e `hover`.
* **Design Responsivo:** Implementação de `media queries` para adaptar o layout a diferentes dispositivos.
* **Estilização Dinâmica:** Modificação de estilos CSS via JavaScript para criar efeitos visuais interativos.
* **Estrutura de Projeto Web:** Organização de arquivos HTML, CSS e JavaScript para um desenvolvimento limpo e modular.

O "Mural de Recados Dinâmico" demonstra a capacidade de construir aplicações web completas e visualmente atraentes, unindo design e funcionalidade de forma coesa.
