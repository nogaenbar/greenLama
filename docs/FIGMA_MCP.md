# Figma MCP Integration Guide

This project is connected to Figma via Model Context Protocol (MCP), allowing you to sync designs, extract components, and generate code directly from your Figma files.

## Figma File Information

- **File Key**: `0hKfBOdeGeXqkc97vG5NSJ`
- **File URL**: https://www.figma.com/design/0hKfBOdeGeXqkc97vG5NSJ/Responsive-Website-UI-Design

## Available Figma MCP Tools

The following tools are available through the Figma MCP integration:

### 1. Get Design Context ⭐ (Recommended)
Extract UI code and assets from a Figma node. This is the primary tool for generating components.

**Usage Example:**
```
Get design context for a specific node ID
```

**Parameters:**
- `fileKey`: `0hKfBOdeGeXqkc97vG5NSJ`
- `nodeId`: Node ID in format "123:456" (extract from Figma URL)

### 2. Get Screenshot
Generate a screenshot of a Figma node for documentation or reference.

**Usage Example:**
```
Get screenshot of a component for documentation
```

### 3. Get Variable Definitions
Extract design tokens (colors, spacing, typography) from Figma variables.

**Note**: Works best with nodes that use Figma variables.

### 4. Get Code Connect Map
Map Figma components to codebase components (if Code Connect is set up).

### 5. Create Design System Rules
Generate design system rules based on your Figma design.

**Note**: Some tools (like Get Metadata) may not be available for Figma Make files. Use Get Design Context as the primary method.

## How to Use

### Extracting Components from Figma

1. **Find the Node ID:**
   - Open your Figma file
   - Select the component/frame you want to extract
   - Copy the URL from the address bar
   - The node ID is in the format `node-id=123-456` (convert to `123:456` for API)

2. **Use the MCP Tools:**
   - Ask the AI assistant to "get design context for node 123:456 from Figma"
   - Or use: "extract the hero section from Figma"
   - The assistant will use the Figma MCP tools to fetch the design

### Syncing Design Tokens

To sync design tokens (colors, spacing, typography):

1. Select a node in Figma that uses variables
2. Ask: "Get variable definitions for node [nodeId] from Figma"
3. The tokens can be exported to your design system

### Generating Components

1. Select a component in Figma
2. Ask: "Generate React component from this Figma node [nodeId]"
3. The assistant will:
   - Fetch the design context
   - Generate React/TypeScript code
   - Create the component file in your project

## Example Workflows

### Workflow 1: Extract a New Component

```
1. Open Figma and find the component
2. Copy the URL with node-id
3. Ask: "Extract the design for node [nodeId] and create a React component"
```

### Workflow 2: Sync Design Tokens

```
1. Find a node using design tokens in Figma
2. Ask: "Get variable definitions from Figma node [nodeId]"
3. Update your Tailwind config or CSS variables
```

### Workflow 3: Update Existing Component

```
1. Find the updated component in Figma
2. Ask: "Update [ComponentName] component with latest design from Figma node [nodeId]"
```

## Node ID Reference

Common node IDs can be stored in `src/utils/figma.ts` for quick reference:

```typescript
export const FIGMA_NODES = {
  HERO: '123:456',
  HEADER: '789:012',
  // Add more as needed
};
```

## Tips

1. **Always use the file key**: `0hKfBOdeGeXqkc97vG5NSJ`
2. **Node ID format**: Use `123:456` (with colon) for API calls
3. **URL format**: Figma URLs use `123-456` (with dash), convert for API
4. **Authentication**: Already configured - you're logged in as "noga"

## Troubleshooting

- **Permission errors**: Make sure you have access to the Figma file
- **Node not found**: Verify the node ID is correct and the node exists
- **Missing assets**: Some assets may need to be exported separately

## Next Steps

1. Explore your Figma file and identify key components
2. Extract node IDs for components you want to sync
3. Use the MCP tools to generate or update components
4. Keep design and code in sync as designs evolve

