import React from 'react';
import { buildFigmaUrl, FIGMA_FILE_KEY } from '../../utils/figma';

interface FigmaLinkProps {
  nodeId?: string;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Component that links to a specific node in Figma
 * Useful for documentation and design references
 */
export function FigmaLink({ nodeId, children, className }: FigmaLinkProps) {
  const url = buildFigmaUrl(FIGMA_FILE_KEY, nodeId);
  
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className || 'text-blue-600 hover:text-blue-800 underline'}
    >
      {children || 'View in Figma'}
    </a>
  );
}

/**
 * Display Figma file information
 */
export function FigmaInfo() {
  return (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
      <h3 className="font-semibold mb-2">Figma Design</h3>
      <p className="text-sm text-gray-600 mb-2">
        This component is connected to Figma via MCP.
      </p>
      <FigmaLink className="text-sm">
        Open Design File →
      </FigmaLink>
    </div>
  );
}

