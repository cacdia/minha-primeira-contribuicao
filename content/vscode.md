# Contribuindo através do Git com o Visual Studio Code

Colaborar em projetos pela primeira vez pode ser assustador, especialmente para quem nunca usou Git. Neste guia, detalharemos cada etapa do processo de contribuição utilizando o **Visual Studio Code (VS Code)**, uma interface gráfica intuitiva que facilita o uso do Git. Abordaremos as diferenças práticas ao usar **Linux**, **Windows** e **MacOS**, para que você possa iniciar suas contribuições com confiança. Seguiremos o fluxo básico de contribuição usando o GitHub: **_fork -> clone -> edit -> pull request (PR)_**.

## 1. Conceitos Básicos

1. **Git**: Sistema de controle de versão usado para rastrear alterações em arquivos e coordenar o trabalho em equipe.
   - [Documentação Oficial do Git](https://git-scm.com/book/en/v2).
2. **GitHub**: Plataforma online para armazenar e compartilhar projetos que utilizam Git.
3. **Repositório**: Local onde os arquivos de um projeto estão armazenados.
4. **Fork**: Cópia do repositório original para sua conta no GitHub, permitindo que você trabalhe sem afetar o projeto principal.
5. **Branch**: Ramificação do projeto para fazer alterações sem interferir no código principal.
6. **Pull Request (PR)**: Solicitação para que as alterações feitas em seu fork sejam integradas ao projeto original.

## 2. Pré-requisitos

1. **Git instalado** em seu computador:

   - **Linux**:
     - O Git geralmente está disponível nos repositórios oficiais da distribuição. Por exemplo, no Ubuntu/Debian:

       ```bash
       sudo apt-get update
       sudo apt-get install git
       ```

   - **Windows**:
     - Baixe o instalador no site oficial e siga o assistente: [Instalador Git para Windows](https://git-scm.com/download/win).
   - **MacOS**:
     - Você pode instalar o Git via [Homebrew](https://brew.sh/):

       ```bash
       brew install git
       ```

2. **Visual Studio Code instalado**: [Baixe aqui](https://code.visualstudio.com/).

3. **Conta no GitHub**: [Crie aqui](https://github.com/signup) se ainda não tiver.

> **Dica**: Para verificar se o Git está instalado, abra o terminal (Linux/MacOS) ou o Prompt/PowerShell (Windows) e execute:
>
> ```bash
> git --version
> ```

## 3. Criar um Fork do Repositório

O **fork** cria uma cópia do repositório original na sua conta do GitHub:

1. Acesse o repositório original no GitHub [https://github.com/cacdia/minha-primeira-contribuicao/](https://github.com/cacdia/minha-primeira-contribuicao/).
2. Clique em **Fork** no canto superior direito.
3. Aguarde a finalização do processo. O repositório estará agora disponível na **sua conta** do GitHub.

## 4. Clonar o Repositório no VS Code

Clonar significa baixar o conteúdo do seu fork para o seu computador, permitindo que você edite localmente.

1. No **Visual Studio Code**, abra a **Paleta de Comandos** pressionando `Ctrl + Shift + P` (ou `Cmd + Shift + P` no Mac).
2. Digite `Git: Clone` e selecione a opção correspondente.
3. Insira a URL do seu fork (disponível no GitHub, botão **Code** > **HTTPS**).
4. Escolha o diretório no seu computador onde o repositório será clonado.
5. Após a clonagem, o VS Code perguntará se você deseja abrir o repositório clonado. Clique em **Open**.

## 5. Criar um Branch no VS Code

Um **branch** isola suas alterações do código principal, facilitando a organização.

1. No VS Code, clique no nome do branch atual no canto inferior esquerdo (geralmente `main` ou `master`).
2. Selecione **Create new branch**.
3. Insira um nome descritivo para o branch, como `minha-contribuicao`, e pressione Enter.
4. O VS Code mudará automaticamente para o novo branch.

## 6. Editar o Código

Vamos exemplificar a adição de um arquivo na pasta `contribuidores/`.

1. No VS Code, navegue até a pasta `contribuidores/` no **Explorador de Arquivos**.
2. Clique com o botão direito na pasta e selecione **Novo Arquivo**.
3. Nomeie o arquivo como `seu-usuario.json`.
4. Adicione suas informações no formato abaixo e salve:

   ```json
   {
     "name": "Seu Nome",
     "github": "https://github.com/seu-usuario"
   }
   ```

## 7. Fazer Commit e Push

Depois de criar o arquivo, você precisa enviar suas alterações para o GitHub.

1. Adicione o arquivo ao “estágio” de commit:

   ```bash
   git add nomedeusuario.json
   ```

2. Crie o commit com uma mensagem descritiva:

   ```bash
   git commit -m "Adicionando meu arquivo de contribuinte"
   ```

3. Envie o branch com suas alterações para o repositório remoto (no GitHub):

   ```bash
   git push origin minha-contribuicao
   ```

## 8. Criar um Pull Request (PR) no GitHub

O Pull Request solicita que o projeto original aceite suas alterações.

1. No GitHub, acesse o repositório **do seu fork**.
2. Clique no botão **Compare & pull request**.
3. Verifique se o branch de origem é o que você criou (`minha-contribuicao`) e o branch de destino é o principal do repositório original.
4. Adicione um título e uma descrição claros para explicar suas mudanças.
5. Clique em **Create pull request** para enviar a solicitação.

> **Pronto!** Agora é só aguardar a avaliação da equipe do projeto. Se precisarem de ajustes, eles podem comentar no seu PR para que você atualize o código no mesmo branch.
