# Teste Técnico — Java + React

## Objetivo

Você receberá uma aplicação simples de gestão de pedidos, com frontend em React e backend em Java/Spring.

A tarefa é adicionar um novo campo chamado **observacao** no fluxo de pedidos e fazê-lo trafegar corretamente por toda a aplicação:

**Tela React → API REST → Service → Repository → PostgreSQL → API → React**

**Tempo esperado: aproximadamente 30 minutos.**

## Tarefa

Adicionar o campo:

- Nome: `observacao`
- Tipo: `String`
- Obrigatório: não
- Tamanho máximo: 255 caracteres

O campo deve aparecer na tela de cadastro de pedidos.

Ao salvar o pedido, o valor deve ser enviado ao backend, persistido no PostgreSQL e retornar nas consultas da API. A observação também deve ser exibida na listagem.

### Requisitos

1. Adicionar o campo `observacao` no formulário React.
2. Enviar o campo no `POST /api/pedidos`.
3. Receber o campo no backend.
4. Persistir o campo no banco de dados.
5. Retornar o campo no `GET /api/pedidos`.
6. Exibir a observação na listagem de pedidos.
7. Manter o comportamento atual dos demais campos.
8. Adicionar ou ajustar testes unitários para cobrir a alteração.

## Regras

- Não é necessário criar autenticação.
- Não é necessário implementar novas telas.
- Não é necessário alterar a arquitetura existente.
- Não é necessário criar funcionalidades além das solicitadas.
- Você pode tomar pequenas decisões de implementação desde que o fluxo completo funcione.

## Tecnologias

- Java 17 (atende ao requisito Java 11+)
- Spring Boot
- Spring Data JPA
- PostgreSQL
- React
- Vite
- Vitest
- Docker Compose

## Como executar

### Pré-requisitos

Java 17+, Maven 3.9+, Node.js 18+ e Docker/Docker Compose.

### Banco

Na raiz:

```bash
docker compose up -d
```

PostgreSQL: `localhost:5432`, database `orders`, usuário `orders`, senha `orders`.

### Backend

```bash
cd backend
mvn spring-boot:run
```

API: `http://localhost:8080`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Aplicação: `http://localhost:5173`

### Testes

Backend:

```bash
cd backend
mvn test
```

Frontend:

```bash
cd frontend
npm test
```

## Critérios de avaliação

- Funcionamento ponta a ponta.
- Qualidade e organização do código.
- Respeito às responsabilidades existentes.
- Clareza da solução.
- Testes unitários.
- Conhecimento de REST e integração React/API.
- Aplicação prática de Clean Code e SOLID.
- Solução simples, sem duplicação desnecessária.

Diferenciais: testes escritos antes da implementação, validação do tamanho do campo, tratamento de erros e justificativa das decisões técnicas.

O foco deste exercício é observar como você realiza uma alteração pequena dentro de uma aplicação existente.
