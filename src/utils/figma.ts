/**
 * Figma MCP Integration Utilities
 * 
 * This file provides utilities for working with Figma MCP in this project.
 * The Figma file key is: 0hKfBOdeGeXqkc97vG5NSJ
 * Original design: https://www.figma.com/design/0hKfBOdeGeXqkc97vG5NSJ/Responsive-Website-UI-Design
 */

export const FIGMA_FILE_KEY = '0hKfBOdeGeXqkc97vG5NSJ';
export const FIGMA_FILE_URL = 'https://www.figma.com/design/0hKfBOdeGeXqkc97vG5NSJ/Responsive-Website-UI-Design';

/**
 * Extract node ID from Figma URL
 * @param url - Figma URL with node-id parameter
 * @returns Node ID in format "123:456" or null if not found
 */
export function extractNodeIdFromUrl(url: string): string | null {
  const match = url.match(/node-id=([\d:-]+)/);
  if (match) {
    // Convert format from "123-456" to "123:456"
    return match[1].replace(/-/g, ':');
  }
  return null;
}

/**
 * Extract file key from Figma URL
 * @param url - Figma URL
 * @returns File key or null if not found
 */
export function extractFileKeyFromUrl(url: string): string | null {
  const match = url.match(/figma\.com\/design\/([a-zA-Z0-9]+)/);
  return match ? match[1] : null;
}

/**
 * Build Figma URL from file key and node ID
 * @param fileKey - Figma file key
 * @param nodeId - Node ID (format: "123:456" or "123-456")
 * @returns Full Figma URL
 */
export function buildFigmaUrl(fileKey: string, nodeId?: string): string {
  const baseUrl = `https://www.figma.com/design/${fileKey}/Responsive-Website-UI-Design`;
  if (nodeId) {
    const urlNodeId = nodeId.replace(/:/g, '-');
    return `${baseUrl}?node-id=${urlNodeId}`;
  }
  return baseUrl;
}

/**
 * Common node IDs for reference (update as needed)
 */
export const FIGMA_NODES = {
  // Add common node IDs here as you discover them
  // Example: HERO: '123:456',
} as const;

