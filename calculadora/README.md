# Calculadora React

![Banner](public/banner.png)

## 📖 Descrição

Aplicação de calculadora simples desenvolvida com **React** e **Vite**, demonstrando a integração de componentes funcionais, gerenciamento de estado local e estilos modernos. O projeto serve como base para aprender boas práticas de desenvolvimento frontend com React.

## 📚 Conceitos Principais

- **Contexto** – Uso do React Context (`CalculatorContext`) para compartilhar histórico e funções entre componentes.
- **Componentização** – Estrutura modular com componentes reutilizáveis (Calculator, OperationHistory, etc.).
- **Gerenciamento de Estado** – `useState` para estado local e `useEffect` para sincronizar o histórico com **localStorage** (persistência entre sessões).

## 💡 Habilidades Demonstradas

- **Persistência** – Histórico de operações salvo em `localStorage`, garantindo que os dados permanecem entre sessões.
- **Context API** – Compartilhamento de estado global (histórico e função de atualização) via `CalculatorContext`.
- **Componentização** – Aplicação dividida em componentes reutilizáveis (`Calculator`, `OperationHistory`, `Button`, etc.).
- **Gerenciamento de Estado Local** – Uso de `useState` e `useEffect` para controlar o estado interno dos componentes.
- **Estilização Moderna** – Utilização de classes TailwindCSS para UI responsiva e visual atraente.

## 🚀 Instalação

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/calculadora-react.git

# Entre no diretório do projeto
cd calculadora-react

# Instale as dependências
npm install
```

## 💻 Uso

```bash
# Inicie o servidor de desenvolvimento
npm run dev
```

Abra `http://localhost:5173` no navegador para ver a aplicação rodando.

## 🛠️ Scripts Disponíveis

- `npm run dev` – Inicia o servidor de desenvolvimento com hot‑reload.
- `npm run build` – Gera a versão otimizada para produção na pasta `dist/`.
- `npm run preview` – Servidor de preview da build de produção.
- `npm run lint` – Executa o ESLint para analisar o código.

## 📂 Estrutura de Pastas

```
├─ public/          # Arquivos estáticos (inclui banner.png)
├─ src/             # Código fonte React
│  ├─ components/   # Componentes UI reutilizáveis
│  ├─ App.jsx       # Componente raiz
│  └─ main.jsx      # Entrypoint da aplicação
├─ index.html       # Template HTML
├─ vite.config.js   # Configurações do Vite
└─ README.md        # Este documento
```

## 📄 Licença

Distribuído sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

---

*Desenvolvido por [Seu Nome](https://github.com/SEU_USUARIO).*
