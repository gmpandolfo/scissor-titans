# 💈 Scissor Titans

Este repositório contém o desenvolvimento de uma API RESTful voltada para o controle de uma barbearia, estruturada em um monorepo com TurboRepo e utilizando tecnologias modernas como NestJS, PrismaORM e banco de dados hospedado no Supabase (PostgreSQL). A API permite registro de usuários, listagem de serviços, bem como a criação, busca e remoção de agendamentos — com rotas protegidas via autenticação JWT.

A aplicação roda localmente na porta 3001, e conta com documentação interativa seguindo o padrão OpenAPI, disponível em `/docs`.

# 🧭 Objetivo da Aplicação

A API tem como propósito centralizar e facilitar a gestão de uma barbearia por meio de endpoints que permitem:
- 📋 Registro e autenticação de usuários
- ✂️ Consulta de serviços oferecidos
- 🗓️ Criação, listagem, busca e cancelamento de agendamentos (rotas protegidas via JWT)

# 🧱 Estrutura do Monorepo

```bash
scissor-titans/
│
├── apps/
│   └── backend/                  # API construída com NestJS
│       └── requisicoes.http      # Arquivo de testes para REST Client     
│
├── packages/                     # pacotes reutilizáveis ou libs internas 
│
├── turbo.json                    # Configuração do TurboRepo
└── README.md
```

# 🛠️ Tecnologias Utilizadas
| Tecnologia                                                                           | Descrição                                                |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| [NestJS](https://nestjs.com/)                                                        | Framework para construção de APIs escaláveis com Node.js |
| [Prisma ORM](https://www.prisma.io/)                                                 | ORM moderno e typesafe para bancos relacionais           |
| [Supabase](https://supabase.com/)                                                    | Plataforma backend com banco PostgreSQL gerenciado       |
| [JWT](https://jwt.io/)                                                               | Autenticação segura via JSON Web Token                   |
| [TurboRepo](https://turbo.build/repo)                                                | Gerenciamento eficiente de monorepos                     |
| [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) | Extensão do VSCode para testes HTTP                      |
| [OpenAPI (Swagger)](https://swagger.io/specification/)                               | Documentação de APIs REST padronizada                    |


# 🔒 Segurança
As rotas de *agendamento* são protegidas por JWT, garantindo que apenas usuários autenticados possam:

- Criar novos agendamentos
- Consultar seus agendamentos
- Cancelar um agendamento existente

O token deve ser enviado via header:

```
Authorization: Bearer <seu_token>
```

# 🔧 Como Executar Localmente

## Pré-requisitos

- Node.js
- Yarn ou npm
- Conta no [Supabase](https://supabase.com/) com banco PostgreSQL configurado (ou outro PostgreSQL)
- Arquivo `.env` com as credenciais do banco e chave JWT
- VSCode com extensão REST Client (opcional)

## Instalação

```bash
# Clonar o repositório
git clone https://github.com/gmpandolfo/scissor-titans.git
cd scissor-titans

# Instalar as dependências
yarn

# Aplicar as migrações do Prisma (conectando ao Supabase)
cd apps/backend
npx prisma migrate deploy

# Iniciar a API
yarn run dev
```
Após a inicialização, verifique se a API está funcionando acessando o endpoint de healthcheck:

👉 http://localhost:3001/app/ping

# 🧪 Testes
A API foi testada com a extensão **REST Client** no VSCode. Todas as requisições (registro, login, serviços, agendamentos) estão disponíveis no arquivo:
```
requisicoes.http
```
Este arquivo simula chamadas reais à API, com e sem autenticação.

# 📖 Documentação
A documentação segue o padrão OpenAPI 3.0, sendo gerada automaticamente com `@nestjs/swagger`.

URL da documentação: http://localhost:3001/docs

# 📚 Pesquisa e Análise Tecnológica
## 🔄 Banco de Dados
- **Supabase + PostgreSQL**: Banco relacional moderno com hospedagem gerenciada, integração fácil via URL e segurança baseada em políticas (RLS).
- **Prisma ORM**: Permite acesso eficiente e typesafe ao banco, além de facilitar manutenção com migrations e seeds.

## 🔐 Autenticação JWT
- Token assinado e validado via middleware NestJS.
- Permite escalabilidade e integração futura com OAuth ou autenticação social.

## ⚖️ Comparações
| Alternativa   | Comentário                                                              |
| ------------- | ----------------------------------------------------------------------- |
| Sequelize ORM | Prisma oferece melhor performance, DX e tipagem                         |
| Firebase      | Supabase fornece estrutura semelhante, mas com PostgreSQL e open source |
| Express       | NestJS é mais estruturado e robusto para projetos em larga escala       |


## 🔮 Tecnologias em Tendência
- SSR e conteúdo estático: Pode ser usado com frontend Next.js para páginas otimizadas.
- Microsserviços: A arquitetura NestJS permite expansão modular com serviços isolados.
- Blockchain: Futuramente possível integrar para registrar pagamentos ou sistemas de fidelidade com NFT/tokens.

## 🚀 Próximas Etapas
- Criar painel frontend (ex: Next.js + Tailwind)
- Deploy na Vercel, Railway ou Render
- Adicionar testes automatizados com Jest e Supertest