## 💍 Sistema de Controle de Estoque, Garantias e Agendamentos
📌 Sobre o Projeto

Este projeto consiste no desenvolvimento de um sistema interno de gestão para uma loja especializada na venda de anéis, alianças e joias.

Devido ao prazo reduzido de desenvolvimento, o sistema terá um escopo simplificado, focado apenas nas funcionalidades essenciais para o funcionamento diário da loja.

O sistema terá como principais objetivos:

Controle de estoque de produtos

Emissão e gerenciamento de garantias

Organização de agendamentos de atendimento

Cadastro de clientes e produtos

O projeto foi pensado para ser simples, organizado e facilmente expandido no futuro, caso seja necessário adicionar novos módulos.

🎯 Objetivo

Criar uma ferramenta interna que permita:

Organizar o estoque da loja

Registrar garantias emitidas para clientes

Controlar agendamentos de atendimento

Centralizar informações importantes da operação

O sistema prioriza simplicidade, rapidez de uso e facilidade de manutenção.

🧩 Escopo Funcional (Requisitos do Sistema)
1️⃣ Gestão de Usuários

Funcionalidades:

Login no sistema

Cadastro básico de usuários

Perfis simples:

Administrador

Atendente

2️⃣ Cadastro de Clientes

Campos principais:

Nome

Telefone / WhatsApp

Email (opcional)

Observações

Funcionalidades:

Criar cliente

Editar cliente

Listar clientes

Buscar cliente por nome ou telefone

3️⃣ Cadastro de Produtos

Campos principais:

Nome do produto

Categoria

Material

Numeração / tamanho

Descrição

Preço de referência

Status (ativo / inativo)

Funcionalidades:

Criar produto

Editar produto

Listar produtos

Ativar ou desativar produto

4️⃣ Controle de Estoque

Tipos de movimentação:

Entrada

Saída

Ajuste de estoque

Campos da movimentação:

Produto

Tipo da movimentação

Quantidade

Data

Observação

Responsável

Funcionalidades:

Registrar entrada de produto

Registrar saída de produto

Ajustar estoque manualmente

Visualizar saldo atual

Consultar histórico de movimentações

5️⃣ Emissão de Garantias

Campos principais:

Número da garantia (sequencial)

Cliente

Produto

Data de emissão

Prazo de validade

Observações

Funcionalidades:

Emitir garantia

Consultar garantia

Reimprimir garantia

Gerar PDF da garantia

6️⃣ Agendamentos de Atendimento

Campos principais:

Cliente

Data

Hora

Tipo de atendimento

Observações

Status

Status possíveis:

Agendado

Concluído

Cancelado

Funcionalidades:

Criar agendamento

Editar agendamento

Listar agendamentos

Atualizar status

📊 Requisitos Não Funcionais

Interface simples e intuitiva

Sistema responsivo (desktop e tablet)

Controle de acesso por usuário

Código organizado e modular

Estrutura preparada para expansão futura

🏗 Tecnologias Utilizadas
Backend

Node.js

NestJS

Prisma ORM

PostgreSQL

Autenticação via JWT

Swagger para documentação da API

Frontend

Next.js (React)

Mantine UI

React Hook Form

Zod

TanStack Table

Banco de Dados

PostgreSQL

🏗 Estrutura do Projeto
erp-joias
│
├── api        → Backend (NestJS)
├── web        → Frontend (Next.js)
├── docs       → Documentação adicional
└── README.md
📌 Organização do Projeto

O gerenciamento das tarefas e evolução do projeto é realizado através do Notion:

https://www.notion.so/31098763f385807d8cd2f92980b78c3c?v=31098763f3858012a1af000cf76356e3&source=copy_link

🚀 Roadmap Inicial
Versão 1 (MVP)

Sistema de login

Cadastro de clientes

Cadastro de produtos

Controle de estoque

Emissão de garantias

Sistema de agendamentos

📌 Status do Projeto

🟡 Em fase de planejamento e estruturação inicial.