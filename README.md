# BandSpotter

## Sobre o Projeto

BandSpotter é um projeto desenvolvido como parte do teste para a vaga de estágio na empresa EnterScience. Ele utiliza a API da Spotify para realizar buscas e listagens de artistas. Embora o BandSpotter esteja disponível em [BandSpotter](https://band-spotter.vercel.app/), é importante notar que podem ocorrer problemas de funcionamento devido a questões com a API da Spotify no ambiente de produção.

## Funcionalidades

- Listagem dos últimos artistas contratados;
- Listagem dos artistas em alta;
- Listagem de novas tendências;
- Pesquisa por artista através de uma barra de pesquisa;
- Contratação de artistas através de formulário;
- Validação de formulários;
- Utilização do ViaCep para preenchimento automático de endereço.

## Tecnologias Utilizadas

- [Figma do projeto](https://www.figma.com/file/0B1RvXZQ0Su2LiMz74Zd4N/BandSpotter?type=design&node-id=0%3A1&mode=design&t=IgpyTII0T6My9AhB-1)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zod](https://zod.dev/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [Spotify SDK](https://github.com/spotify/spotify-web-api-ts-sdk)
- [Tailwind CSS](https://tailwindcss.com/)
- [Sooner](https://sonner.emilkowal.ski/)
- [Radix UI](https://www.radix-ui.com/)

## Como Executar o Projeto

1. **Configuração do Ambiente**: Antes de tudo, é necessário configurar o arquivo `.env` seguindo o formato do arquivo `.env.example`. As chaves de API podem ser obtidas no painel de controle da API da Spotify, acessível [aqui](https://developer.spotify.com/dashboard). Você precisará criar uma aplicação para obter o `SPOTIFY_CLIENT_ID` e o `SPOTIFY_SECRET_ID`.

2. **Configuração do Banco de Dados**: Você pode utilizar o Docker ou alguma solução de banco de dados em nuvem PostgreSQL para configurar o `DATABASE_URL`. Por padrão, a variável de ambiente já está configurada no arquivo `.env.example` para uso com Docker.

    - Se optar pelo Docker, execute o seguinte comando para preparar o banco de dados:
      ```bash
      docker compose up -d # Para iniciar o banco de dados
      ```

    - Caso não tenha o Docker instalado na máquina, você pode instalá-lo através deste [link](https://docs.docker.com/engine/install/).

3. **Instalação de Dependências e Configuração do Projeto**:
   ```bash
   npm install # Para instalar as dependências.
   npx prisma generate # Para gerar as necessidades do Prisma.
   npx prisma db push # Para realizar as migrações no banco de dados.
   ```

4. **Compilação e Execução do Projeto**:
   ```bash
   npm run build # Para compilar o projeto.
   npm run start # Para iniciar a versão compilada.
   ```

Após seguir os passos acima, o projeto estará acessível em [http://localhost:3000/](http://localhost:3000/).

## Possíveis Problemas

Devido às políticas de proteção de chave de API da Spotify, talvez seja necessário rotacionar `SPOTIFY_SECRET_ID` caso as requisições parem subitamente de serem feitas. Você pode rotacioná-lo apenas clicando em `Rotate client secret` no Dashboard de sua aplicação presente neste link: [https://developer.spotify.com/](https://developer.spotify.com/).