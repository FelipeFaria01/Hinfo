# 🚀 Hinfo — Site Institucional

### Desenvolvimento Web Full Stack | React + TypeScript + Tailwind CSS + Fastify

Site institucional desenvolvido para a **Hinfo**, empresa voltada à criação de soluções digitais para negócios.

O projeto tem como objetivo apresentar os serviços da empresa, fortalecer sua presença digital e facilitar a comunicação com potenciais clientes por meio de uma interface moderna, responsiva e intuitiva.

A aplicação combina um frontend desenvolvido em React com uma API REST em Node.js e Fastify, responsável pelo processamento seguro das solicitações enviadas pelo formulário de contato.

## 🌐 Demonstração

🔗 [Acessar site da Hinfo](https://hinfo-cs8wn24l0-felipe-b256.vercel.app/)

## 📸 Preview

<img width="1584" height="773" alt="Site institucional" src="https://github.com/user-attachments/assets/71bc8300-7311-4e38-ac9e-c58b6371ef3c" />


## 🎯 Objetivo do projeto

Desenvolver uma plataforma institucional capaz de apresentar os serviços e soluções digitais da Hinfo de maneira profissional.

O projeto prioriza:

- Identidade visual moderna e consistente.
- Experiência de navegação intuitiva.
- Adaptação para diferentes dispositivos.
- Apresentação clara dos serviços.
- Comunicação entre frontend e backend.
- Segurança no processamento de formulários.

## ✨ Funcionalidades

### Frontend

- Interface responsiva para desktop, tablet e mobile.
- Navegação entre seções com rolagem suave.
- Animações de entrada durante a rolagem.
- Carrossel interativo de serviços.
- Navegação por gestos de toque em dispositivos móveis.
- Componentes reutilizáveis.
- Formulário de contato com validação e feedback visual.
- Indicador de carregamento durante o envio de mensagens.

### Backend

- API REST desenvolvida com Fastify.
- Validação de dados utilizando Zod.
- Configuração de CORS.
- Cabeçalhos de segurança com Helmet.
- Limitação de requisições com Rate Limit.
- Tratamento centralizado de erros.
- Proteção contra envio de mensagens excessivamente grandes.
- Configuração de variáveis de ambiente.
- Preparação para integração de envio de e-mails com Resend.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Finalidade |
|---|---|
| React | Construção da interface |
| TypeScript | Tipagem estática |
| Tailwind CSS | Estilização responsiva |
| Vite | Desenvolvimento e build |
| Node.js | Ambiente de execução do backend |
| Fastify | Desenvolvimento da API REST |
| Zod | Validação de dados |
| Helmet | Cabeçalhos de segurança |
| CORS | Controle de origens permitidas |
| Rate Limit | Proteção contra excesso de requisições |
| Resend | Serviço de envio de e-mails |
| Git e GitHub | Versionamento do código |
| Vercel | Hospedagem do frontend |

## 🏗️ Arquitetura do projeto

A aplicação foi organizada separando as responsabilidades do frontend e do backend.

```text
hinfo-portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header
│   │   │   ├── Hero
│   │   │   ├── Sobre
│   │   │   ├── Servicos
│   │   │   ├── Solucoes
│   │   │   ├── Contato
│   │   │   └── Footer
│   │   └── App.tsx
│   └── package.json
│
├── backend/
│   ├── src/
│   │   └── server.ts
│   └── package.json
│
└── README.md
```

*Estrutura ilustrativa baseada na organização do projeto.*

## 🔄 Comunicação entre frontend e backend

O formulário de contato realiza requisições HTTP para a API REST.

```text
Usuário
   ↓
Formulário React
   ↓
Requisição HTTP POST
   ↓
API REST — Fastify
   ↓
Validação com Zod
   ↓
Processamento da solicitação
   ↓
Resposta ao frontend
   ↓
Feedback visual ao usuário
```

A separação entre frontend e backend permite organizar as responsabilidades e facilitar futuras evoluções da aplicação.

## 🔐 Segurança

O backend foi desenvolvido considerando práticas de segurança para aplicações web.

**Medidas implementadas:**

- Validação dos dados recebidos com Zod.
- Limitação de cinco requisições por minuto na rota de contato.
- Restrição do tamanho das requisições para 16 KB.
- Configuração de cabeçalhos HTTP com Helmet.
- Controle de acesso entre origens por CORS.
- Tratamento de respostas HTTP de erro.
- Restrição do registro de informações pessoais nos logs.
- Gerenciamento de configurações sensíveis por variáveis de ambiente.

Essas medidas ajudam a reduzir requisições abusivas, entradas inválidas e exposição desnecessária de informações.

## 💻 Como executar localmente

**1. Clone o repositório**

```bash
git clone URL_DO_REPOSITORIO
```

**2. Instale as dependências do frontend**

```bash
cd frontend
npm install
npm run dev
```

**3. Execute o backend em outro terminal**

```bash
cd backend
npm install
npx tsx src/server.ts
```

**4. Configure as variáveis de ambiente**

Configure as variáveis exigidas pela aplicação, incluindo a origem permitida para o frontend e as credenciais dos serviços externos utilizados.

Nunca publique chaves de API ou arquivos `.env` contendo credenciais.

## 🧠 Desafios técnicos e aprendizados

Durante o desenvolvimento, foram trabalhados conceitos como:

- Arquitetura baseada em componentes React.
- Responsividade para diferentes resoluções.
- Animações e interações com o usuário.
- Desenvolvimento de carrosséis interativos.
- Comunicação entre cliente e servidor.
- Criação e validação de endpoints REST.
- Tratamento de erros HTTP.
- Implementação de medidas de segurança.
- Organização de variáveis de ambiente.
- Testes de requisições HTTP.
- Versionamento e preparação para deploy.

## 📈 Possíveis melhorias futuras

- Implementação de testes automatizados.
- Monitoramento de disponibilidade da API.
- Otimizações de desempenho.
- Aprimoramentos de acessibilidade.
- Melhorias contínuas de SEO.
- Expansão das funcionalidades administrativas.

## 👨‍💻 Desenvolvedor

**Felipe Rodrigo de Faria Mendes**

Desenvolvedor Web | React • TypeScript • Node.js

🔗 [GitHub](https://github.com/FelipeFaria01)

---

Projeto desenvolvido para apresentação institucional da Hinfo e aplicação prática de conhecimentos em desenvolvimento web Full Stack.
