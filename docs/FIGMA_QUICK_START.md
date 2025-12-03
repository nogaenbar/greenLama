# Figma MCP Quick Start

## 🚀 Quick Commands

### Extract a Component from Figma

1. **Get the Node ID:**
   - Open Figma → Select component → Copy URL
   - Extract node ID: `node-id=123-456` → Use `123:456` (with colon)

2. **Ask the AI:**
   ```
   Get design context for node 123:456 from Figma file 0hKfBOdeGeXqkc97vG5NSJ
   ```

3. **Generate Component:**
   ```
   Create a React component from Figma node 123:456
   ```

### Get Design Tokens

```
Get variable definitions for node 123:456 from Figma
```

### Get Screenshot

```
Get screenshot of node 123:456 from Figma
```

## 📋 Your Figma File

- **File Key**: `0hKfBOdeGeXqkc97vG5NSJ`
- **URL**: https://www.figma.com/design/0hKfBOdeGeXqkc97vG5NSJ/Responsive-Website-UI-Design

## 💡 Pro Tips

1. **Store Common Node IDs** in `src/utils/figma.ts`:
   ```typescript
   export const FIGMA_NODES = {
     HERO: '123:456',
     HEADER: '789:012',
   };
   ```

2. **Use FigmaLink Component** to link to designs:
   ```tsx
   import { FigmaLink } from '@/components/figma/FigmaLink';
   <FigmaLink nodeId="123:456">View Design</FigmaLink>
   ```

3. **Convert URL Format:**
   - Figma URL: `node-id=123-456` (dash)
   - API format: `123:456` (colon)

## 🔗 Full Documentation

See [FIGMA_MCP.md](./FIGMA_MCP.md) for complete guide.

