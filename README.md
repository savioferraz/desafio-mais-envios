# Desafio Mais Envios

Repositório para o desafio da Mais Envios. Consiste de uma API REST em Node.js e Express.js e permite o gerenciamento de uma planilha de etiquetas no formato `.xlsx`. Os dados são armazenados em memória e manipulados via requisições HTTP.

## 🚀 Instalação

### 1. Clone o repositório
```sh
git clone https://github.com/savioferraz/desafio-mais-envios/
```

### 2. Instale as dependências
```sh
cd minha-pasta/desafio-mais-envios
npm install
```

## ▶️ Como Rodar o Projeto (escolha um método abaixo)

### 🐋 Pelo container Docker
```sh
docker-compose build
docker-compose install
```

### 💻 Iniciar o servidor no terminal
```sh
npm start
```

O servidor será iniciado na porta `5000` e ficará disponível no endereço `http://localhost:5000`. \
Apenas uma das etpapas acima é necessária para rodar a aplicação.

## 📤 Enviando uma planilha:

Para enviar uma planilha `.xlsx`, utilize o seguinte comando:
```sh
curl -X POST http://localhost:5000/tags \ 
  -H "Content-Type: multipart/form-data" \ 
  -F "file=@caminho/para/sua/planilha.xlsx"
```
Caso tenha dificuldades em fazer a requisição CURL, tente entrar diretamente no diretório onde a planilha se encontra e subistitua a ultima linha `-F "file=@sua_planilha.xlsx` \
\
⚠️ **Importante:** a planilha deve ter a primeira linha como cabeçalho, e os dados do cabeçalho devem ser exatamente os seguintes:
- Tag
- name
- status
- source
- price

⭐ **Extra:** Se preferir, pode enviar a planilha pelo navegador através de uma interface na rota `http://localhost:5000`

## 🔄 Funcionalidades e Endpoints

### 1️⃣ **Upload de Planilha**
- **Rota:** `POST /tags`
- **Descrição:** Faz upload de uma planilha e armazena os dados na memória.
- **Requisição:** Arquivo `.xlsx` no formato `multipart/form-data`.
- **Resposta:**
```json
[
  { "Tag": "AA123456789BR", "name": "João da Silva" },
  { "Tag": "BB987654321BR", "name": "Maria Oliveira" }
]
```

### 2️⃣ **Obter a Planilha**
- **Rota:** `GET /tags`
- **Descrição:** Retorna os dados armazenados em memória.
- **Resposta:**
```json
[
  { "Tag": "AA123456789BR", "name": "João da Silva" },
  { "Tag": "BB987654321BR", "name": "Maria Oliveira" }
]
```

### 3️⃣ **Atualizar uma Etiqueta**
- **Rota:** `PUT /tags/:tagId`
- **Descrição:** Atualiza uma etiqueta específica com novos dados.
- **Requisição:**
```json
{
  "data": { "name": "Novo Nome" }
}
```
- **Resposta:**
```json
{
  "message": "Etiqueta atualizada com sucesso",
  "result": { "Tag": "AA123456789BR", "name": "Novo Nome" }
}
```

### 4️⃣ **Deletar uma Etiqueta**
- **Rota:** `DELETE /tags/:tagId`
- **Descrição:** Remove uma etiqueta da planilha.
- **Resposta:**
```json
{
  "message": "Etiqueta de id: AA123456789BR deletada com sucesso"
}
```

## 🛠 Tecnologias Utilizadas
- **TypeScript**
- **Node.js**
- **Express.js**
- **Multer**
- **XLSX**

## 📝 Observações
- Os dados são armazenados **em memória**, ou seja, ao reiniciar o servidor, os dados serão perdidos.
- A API **não** possui banco de dados.
- Toda a comunicação ocorre via **requisições HTTP**.

## 📅 Planos Futuros

- Desenvolver uma **interface HTML básica** para que o usuário possa fazer o upload de arquivos sem precisar utilizar cURL ou outras ferramentas de linha de comando.
