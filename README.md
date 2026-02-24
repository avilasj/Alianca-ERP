# 💍 ERP - Sistema de Gestão para Loja de Joias e Alianças

## 📌 Sobre o Projeto

Este projeto consiste no desenvolvimento de um **ERP (Enterprise
Resource Planning)** voltado para uma loja especializada na venda de
**anéis, alianças e joias**.

O sistema tem como objetivo centralizar e organizar os processos
internos da empresa, incluindo:

-   Cadastro e gestão de clientes
-   Controle de estoque (produtos e matéria-prima)
-   Registro de entradas e saídas
-   Gestão de vendas e financeiro
-   Emissão de garantias
-   Agendamento de atendimentos

O sistema será inicialmente desenvolvido com foco em simplicidade,
organização e escalabilidade futura.

------------------------------------------------------------------------

# 🎯 Objetivo

Desenvolver um sistema interno de gestão que:

-   Organize processos operacionais
-   Reduza falhas manuais
-   Centralize informações estratégicas
-   Permita rastreabilidade de operações
-   Seja simples, eficiente e de fácil manutenção

------------------------------------------------------------------------

# 🧩 Escopo Funcional (Requisitos do Sistema)

## 1️⃣ Gestão de Usuários e Permissões

-   Autenticação via login e senha
-   Perfis de acesso:
    -   Administrador
    -   Atendimento/Vendas
    -   Estoque/Produção
    -   Financeiro
-   Controle de permissões por perfil
-   Registro básico de auditoria (criação/edição de registros)

------------------------------------------------------------------------

## 2️⃣ Cadastro de Clientes

-   Nome completo
-   CPF/CNPJ (opcional)
-   Telefone / WhatsApp
-   E-mail
-   Endereço (opcional)
-   Observações
-   Histórico de:
    -   Compras
    -   Garantias
    -   Atendimentos agendados

------------------------------------------------------------------------

## 3️⃣ Gestão de Produtos

-   Cadastro de modelos de produtos
-   Variações por:
    -   Material (ouro 18k, prata 925, etc.)
    -   Largura (mm)
    -   Tipo de acabamento
    -   Pedra (tipo e presença)
    -   Numeração do aro
-   Controle de preço
-   Upload de imagens
-   Controle de estoque por variação

------------------------------------------------------------------------

## 4️⃣ Controle de Estoque

### Produto Pronto

-   Registro de entrada (produção ou fornecedor)
-   Registro de saída (venda ou ajuste)
-   Estoque atual por variação

### Matéria-Prima

-   Controle por unidade adequada (gramas ou unidades)
-   Registro de movimentações
-   Estoque mínimo configurável

------------------------------------------------------------------------

## 5️⃣ Gestão de Vendas

-   Criação de venda vinculada a cliente
-   Itens da venda
-   Aplicação de desconto
-   Controle de status:
    -   Orçamento
    -   Reservado
    -   Pago Parcial
    -   Pago
    -   Cancelado
-   Controle de formas de pagamento:
    -   Pix
    -   Cartão
    -   Dinheiro
    -   Parcelado
    -   Sinal + restante
-   Registro automático de movimentação financeira
-   Geração futura de comprovante em PDF

------------------------------------------------------------------------

## 6️⃣ Controle Financeiro

-   Registro de entradas e saídas
-   Classificação por categoria (ex.: aluguel, fornecedor, marketing)
-   Controle de caixa
-   Relatório por período
-   Histórico financeiro completo

------------------------------------------------------------------------

## 7️⃣ Emissão de Garantias

-   Garantia vinculada a venda
-   Número sequencial automático
-   Data de emissão
-   Prazo de validade
-   Descrição do produto
-   Termos padrão editáveis
-   Geração em PDF
-   Reimpressão de garantia

------------------------------------------------------------------------

## 8️⃣ Agendamento de Atendimentos

-   Agenda diária/semanal
-   Vínculo com cliente
-   Motivo do atendimento
-   Responsável pelo atendimento
-   Status:
    -   Marcado
    -   Confirmado
    -   Atendido
    -   Cancelado
    -   Faltou
-   Observações do atendimento

------------------------------------------------------------------------

# 📊 Requisitos Não Funcionais

-   Sistema responsivo (uso em desktop e tablet)
-   Controle de acesso por perfil
-   Backup automatizado do banco de dados
-   Performance otimizada para operações CRUD
-   Estrutura modular e escalável
-   Código documentado e organizado
-   Possibilidade de exportação de dados (CSV)

------------------------------------------------------------------------

# 🏗 Arquitetura e Tecnologias Utilizadas

## 🔹 Backend

-   Node.js
-   NestJS
-   Prisma ORM
-   PostgreSQL
-   Autenticação via JWT
-   Documentação automática com Swagger

------------------------------------------------------------------------

## 🔹 Frontend

-   Next.js (React)
-   Mantine UI
-   React Hook Form
-   Zod (validação)
-   TanStack Table

------------------------------------------------------------------------

## 🔹 Banco de Dados

-   PostgreSQL

------------------------------------------------------------------------

## 🔹 Infraestrutura (Deploy)

-   Backend: Render ou Fly.io
-   Frontend: Vercel
-   Banco: Supabase ou Neon

------------------------------------------------------------------------

# 📁 Estrutura Inicial do Projeto

    /erp-joias
    │
    ├── /api        → Backend (NestJS)
    ├── /web        → Frontend (Next.js)
    ├── /docs       → Documentações adicionais
    └── README.md

------------------------------------------------------------------------

# 📌 Metodologia e Organização

O gerenciamento de tarefas será realizado via Notion:

https://www.notion.so/31098763f385807d8cd2f92980b78c3c?v=31098763f3858012a1af000cf76356e3&source=copy_link

------------------------------------------------------------------------

# 🚀 Roadmap Inicial (MVP)

## Fase 1

-   Autenticação e perfis
-   Cadastro de clientes
-   Cadastro de produtos e variações
-   Controle de estoque
-   Vendas
-   Emissão de garantias
-   Agenda de atendimentos

## Fase 2

-   Ordem de serviço
-   Relatórios avançados
-   Alertas automáticos
-   Integração com notificações externas

------------------------------------------------------------------------

# 📌 Status do Projeto

🟡 Em fase de planejamento e modelagem inicial.

------------------------------------------------------------------------

# 👨‍💻 Autor

Projeto desenvolvido para uso interno de loja especializada em joias e
alianças.
