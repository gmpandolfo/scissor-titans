# 💈 Scissor Titans

A solução foi inicialmente projetada como um monolito para facilitar o desenvolvimento e a entrega rápida das funcionalidades principais da barbearia. Com o crescimento, visando maior modularidade, escalabilidade e facilidade de manutenção, o sistema está passando por uma evolução gradual para uma arquitetura de microsserviços.

Neste processo, o monolito está sendo dividido em serviços independentes, mantendo inicialmente a estrutura mais simples e integrando os módulos aos poucos como microsserviços separados.

Atualmente, temos:

- Microsserviço de Serviços (servico)
Extraído do monolito, este serviço é responsável por gerenciar os serviços oferecidos pela barbearia (consulta, cadastro, etc), operando de forma autônoma.

- API Gateway (backend)
Atua como ponto central, expondo endpoints públicos, realizando autenticação via JWT, orquestrando chamadas para os microsserviços e gerenciando funcionalidades como usuários e agendamentos.

Essa abordagem gradual permite reduzir riscos, garantir compatibilidade e facilitar testes durante a transição para microsserviços.

# 🧱 Estrutura do Monorepo

```bash
scissor-titans/
│
├── apps/
│   ├── backend/                  # API Gateway construído com NestJS
│   │   └── requisicoes.http      # Arquivo de testes REST Client
│   └── servico/                  # Microsserviço dedicado à gestão de serviços
│
├── packages/                     # Pacotes reutilizáveis ou libs internas
│
├── turbo.json                    # Configuração do TurboRepo
└── README.md
```

# 🔧 Como Executar Localmente

Para executar a aplicação localmente, use os comandos abaixo: 
```bash
# Clonar o repositório
git clone https://github.com/gmpandolfo/scissor-titans.git
cd scissor-titans

# Instalar as dependências
yarn

# Aplicar as migrações do Prisma para o backend e o microsserviço de serviços
cd apps/backend
npx prisma migrate deploy

cd ../servico
npx prisma migrate deploy

# Voltar para a raiz e iniciar todos os apps que possuem o script 'dev'
cd ../../
yarn dev
```

Mais informações no README da branch master.