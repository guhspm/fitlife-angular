# FitLife 🏋️‍♀️🥗

**FitLife** é um aplicativo web para acompanhamento de treinos e plano alimentar, desenvolvido como projeto final da disciplina de Desenvolvimento Web Front-End.

## 🔍 Sobre o Projeto

O sistema simula uma plataforma para usuários que desejam visualizar sua rotina de treinos e refeições. O app oferece uma experiência visual moderna, minimalista e totalmente responsiva, com foco em usabilidade e estética.

## 🧑‍💻 Funcionalidades

- Tela de **Login e Cadastro**
- Painel com resumo do progresso
- Listagem de **treinos organizados por dia da semana**
- Cards de **refeições diárias com composição e calorias**
- Design em **preto e branco com transparência**, simulando um app premium
- Botões estilizados com **efeito hover**
- Organização de componentes por boas práticas do Angular

## 🛠 Tecnologias Utilizadas

- Angular
- TailwindCSS
- JSON Server (simulando backend)
- HTML / TypeScript
- Git & GitHub

## 🗂 Estrutura de Telas

1. **Login**
2. **Cadastro**
3. **Dashboard**
4. **Treinos**
5. **Refeições**

## 📁 Como executar localmente

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/fitlife.git
cd fitlife

# Instale as dependências
npm install

# Rode o projeto Angular
ng serve

# Em outro terminal, rode o JSON Server
json-server --watch db.json
