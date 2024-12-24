# Contribuindo através do Git pelo Terminal

Colaborar em projetos pela primeira vez pode ser assustador, especialmente para quem nunca usou Git ou o terminal. Neste guia detalharemos cada etapa, considerando as diferenças práticas ao usar **Linux**, **Windows** e **MacOS**, para que você possa dar seus primeiros passos com segurança. Vamos seguir o fluxo básico de contribuição usando o GitHub: **_fork -> clone -> edit -> pull request (PR)_**.

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

     - Geralmente o Git está disponível nos repositórios oficiais da distribuição. Exemplo no Ubuntu/Debian:

       ```bash
       sudo apt-get update
       sudo apt-get install git
       ```

   - **Windows**:
     - Baixe o instalador no site oficial e siga o assistente:  
       [Instalador Git para Windows](https://git-scm.com/download/win).
     - Após a instalação, você pode usar o **Prompt de Comando** (cmd), o **PowerShell** ou o **Git Bash** para executar comandos Git.
   - **MacOS**:

     - Você pode instalar o Git via [Homebrew](https://brew.sh/) ou através das ferramentas de linha de comando (Xcode Command Line Tools).

       ```bash
       brew install git
       ```

2. **Conta no GitHub**: [Crie aqui](https://github.com/signup) se ainda não tiver.

> **Dica**: Para verificar se o Git está instalado, abra o terminal (Linux/MacOS) ou o Prompt/PowerShell (Windows) e execute:
>
> ```bash
> git --version
> ```

## 3. Criar um Fork do Repositório

O **fork** cria uma cópia do repositório original na sua conta do GitHub:

1. Acesse o repositório original no GitHub [https://github.com/cacdia/minha-primeira-contribuicao/](https://github.com/cacdia/minha-primeira-contribuicao/)
2. Clique em **Fork** no canto superior direito.
3. Aguarde a finalização do processo. O repositório estará agora disponível na **sua conta** do GitHub.

## 4. Clonar o Repositório

Clonar significa baixar o conteúdo do seu fork para o seu computador, permitindo que você edite localmente.

1. Na página do **seu fork** no GitHub, clique em **Code** e copie a URL (HTTPS).
2. Abra o terminal (Linux/MacOS) ou Git Bash/PowerShell (Windows) e execute:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

   Substitua `<URL_DO_REPOSITORIO>` pela URL copiada. Exemplo:

   ```bash
   git clone https://github.com/seu-usuario/repo-exemplo.git
   ```

3. Entre no diretório do projeto:

   ```bash
   cd repo-exemplo
   ```

## 5. Criar um Branch

Um **branch** isola suas alterações do código principal (branch `main` ou `master`), facilitando a organização.

1. Crie e acesse o novo branch:

   ```bash
   git checkout -b minha-contribuicao
   ```

   Substitua `minha-contribuicao` por um nome que descreva a alteração que você fará.

## 6. Editar o Código

Aqui vamos exemplificar a adição de um arquivo na pasta `contribuidores/`. Os passos variam conforme seu editor ou sistema operacional.

1. Navegue até a pasta `contribuidores/`:

   ```bash
   cd contribuidores
   ```

2. Crie um novo arquivo JSON com seu editor favorito:

   - **Linux/MacOS** (usando `nano` como exemplo):

     ```bash
     nano nomedeusuario.json
     ```

   - **Windows** (usando `notepad` no Prompt de Comando ou PowerShell):

     ```bash
     notepad nomedeusuario.json
     ```

3. Adicione suas informações no formato abaixo e salve:

   ```json
   {
     "name": "Seu Nome",
     "github": "https://github.com/seu-usuario"
   }
   ```

> **Observação**: Você pode usar **qualquer editor de texto**, como [Visual Studio Code](https://code.visualstudio.com/), [Notepad++](https://notepad-plus-plus.org/) (Windows), Gedit, nano, etc.

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
