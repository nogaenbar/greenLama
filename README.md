  # Responsive Website UI Design

  This is a code bundle for Responsive Website UI Design. The original project is available at https://www.figma.com/design/0hKfBOdeGeXqkc97vG5NSJ/Responsive-Website-UI-Design.

  ## 🎨 Figma MCP Integration

  This project is connected to Figma via Model Context Protocol (MCP), allowing you to:
  - Extract components directly from Figma designs
  - Sync design tokens and variables
  - Generate React components from Figma nodes
  - Keep design and code in sync

  **Quick Start:**
  1. Open your Figma file and select a component
  2. Copy the node ID from the URL (format: `node-id=123-456`)
  3. Ask the AI assistant: "Get design context for node 123:456 from Figma"

  For detailed instructions, see [docs/FIGMA_MCP.md](./docs/FIGMA_MCP.md)

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Building for production

  Run `npm run build` to create a production build.

  ## Deployment

  This project is configured for GitHub Pages. The site is automatically deployed on every push to `main`.
  