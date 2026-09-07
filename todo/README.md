# Todo List

![Banner do projeto](./images/banner.png)

Aplicação de gerenciamento de tarefas desenvolvida com React e TypeScript. É possível criar, editar, concluir e excluir tarefas, mantendo os dados salvos no navegador.

## Funcionalidades

- Criar tarefas
- Editar tarefas
- Marcar tarefas como concluídas
- Excluir tarefas
- Exibir resumo das tarefas
- Persistir dados utilizando `localStorage`
- Interface responsiva

## Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS
- React Hooks
- SVGs como componentes

## Princípios utilizados

### Componentização

A aplicação foi dividida em componentes reutilizáveis, como:

- `TaskItem`
- `TaskSummary`
- `InputCheckbox`
- `InputText`
- `ButtonIcon`
- `Card`
- `Badge`

### `useState`

O hook `useState` é utilizado para controlar estados locais, como:

- Modo de edição da tarefa
- Título da tarefa
- Estado de conclusão

### `localStorage`

As tarefas são armazenadas no `localStorage`, permitindo que os dados permaneçam disponíveis mesmo após recarregar ou fechar o navegador.

### Pages e organização

A estrutura foi organizada separando responsabilidades entre:

- Páginas
- Componentes
- Hooks
- Modelos
- Assets
- Estilos

Essa organização facilita a manutenção e a evolução do projeto.

### Hooks personalizados

Hooks personalizados foram utilizados para centralizar as regras de negócio relacionadas às tarefas, como:

- Criar tarefas
- Atualizar tarefas
- Alterar o status
- Excluir tarefas
- Calcular os totais

### Tipagem com TypeScript

As tarefas possuem tipos definidos para reduzir erros e melhorar a segurança durante o desenvolvimento.

## Como executar o projeto

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
cd todo
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Acesse no navegador:

```text
http://localhost:5173
```

## Estrutura do projeto

```text
src/
├── assets/
├── components/
├── core-components/
├── hooks/
├── models/
├── pages/
└── App.tsx
```

## Autor

Desenvolvido por **Murilo Caires**.