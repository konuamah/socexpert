import React from 'react';

interface TextNode {
  type: 'text';
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
}

interface RichTextBlock {
  type: string;
  children: TextNode[];
  level?: number;
  format?: string;
  url?: string;
}

interface RichTextRendererProps {
  content: RichTextBlock[] | string;
  className?: string;
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ content, className = "" }) => {
  // If content is a string (fallback for processed text)
  if (typeof content === 'string') {
    const paragraphs = content.split('\n\n').filter(p => p.trim());
    
    return (
      <div className={className}>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-4 leading-relaxed text-gray-700">
            {paragraph.trim()}
          </p>
        ))}
      </div>
    );
  }

  // If content is not an array, return null
  if (!Array.isArray(content)) {
    console.log('Content is not an array:', content);
    return null;
  }

  const renderTextNode = (node: TextNode, index: number): React.ReactNode => {
    if (!node || typeof node.text !== 'string') {
      return null;
    }

    let text: React.ReactNode = node.text;

    // Apply formatting
    if (node.bold) text = <strong key={`bold-${index}`}>{text}</strong>;
    if (node.italic) text = <em key={`italic-${index}`}>{text}</em>;
    if (node.underline) text = <u key={`underline-${index}`}>{text}</u>;
    if (node.strikethrough) text = <s key={`strike-${index}`}>{text}</s>;
    if (node.code) text = <code key={`code-${index}`} className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">{text}</code>;

    return <span key={index}>{text}</span>;
  };

  const renderBlock = (block: RichTextBlock, index: number): React.ReactNode => {
    const key = `block-${index}`;

    if (!block || !block.children || !Array.isArray(block.children)) {
      return null;
    }

    // Skip empty paragraphs (ones with only empty text)
    if (block.type === 'paragraph' && block.children.length === 1 && block.children[0]?.text === '') {
      return null;
    }

    // Check if this paragraph looks like a heading
    const textContent = block.children.map(child => child.text || '').join('').trim();
    const isShortLine = textContent.length < 100;
    const hasHeadingPattern = /^(What|Why|How|Best|Common|The Future|Introduction|Conclusion|Types|Benefits)/i.test(textContent);
    const endsWithColon = textContent.endsWith(':');
    const isNumberedHeading = /^\d+\.\s*[A-Z]/.test(textContent);
    const isQuestion = textContent.endsWith('?');
    
    const shouldBeHeading = isShortLine && (hasHeadingPattern || endsWithColon || isNumberedHeading || isQuestion);

    switch (block.type) {
      case 'paragraph':
        if (shouldBeHeading) {
          // Render as heading
          return (
            <h3 key={key} className="text-xl font-bold mb-3 mt-6 text-gray-900">
              {block.children.map((child, childIndex) => 
                renderTextNode(child, childIndex)
              )}
            </h3>
          );
        }

        // Check if it's a definition/description line (starts with capital and has colon)
        const isDefinitionLine = /^[A-Z][^:]*:\s/.test(textContent);
        
        if (isDefinitionLine) {
          const [term, ...descriptionParts] = textContent.split(':');
          const description = descriptionParts.join(':').trim();
          
          return (
            <div key={key} className="mb-3 ml-4">
              <p className="leading-relaxed text-gray-700">
                <span className="font-semibold text-gray-900">{term}:</span>
                <span className="ml-1">{description}</span>
              </p>
            </div>
          );
        }

        // Regular paragraph
        return (
          <p key={key} className="mb-4 leading-relaxed text-gray-700">
            {block.children.map((child, childIndex) => 
              renderTextNode(child, childIndex)
            )}
          </p>
        );

      case 'heading':
        // Ensure level is a valid heading level (1-6)
        const rawLevel = block.level || 2;
        const level = Math.min(Math.max(1, Math.floor(rawLevel)), 6);
        const headingTag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
        
        const headingClasses = {
          1: "text-3xl font-bold mb-6 mt-8 text-gray-900",
          2: "text-2xl font-bold mb-4 mt-6 text-gray-900",
          3: "text-xl font-semibold mb-3 mt-5 text-gray-900",
          4: "text-lg font-semibold mb-2 mt-4 text-gray-900",
          5: "text-base font-semibold mb-2 mt-3 text-gray-900",
          6: "text-sm font-semibold mb-2 mt-2 text-gray-900"
        };
        
        const headingContent = block.children.map((child, childIndex) => 
          renderTextNode(child, childIndex)
        );

        // Use React.createElement for dynamic heading elements
        return React.createElement(
          headingTag,
          {
            key,
            className: headingClasses[level as keyof typeof headingClasses]
          },
          headingContent
        );

      case 'list':
        const ListTag = block.format === 'ordered' ? 'ol' : 'ul';
        const listClass = block.format === 'ordered' 
          ? "list-decimal list-inside mb-4 space-y-1 ml-4" 
          : "list-disc list-inside mb-4 space-y-1 ml-4";
        
        return (
          <ListTag key={key} className={listClass}>
            {block.children.map((child, childIndex) => (
              <li key={childIndex} className="leading-relaxed">
                {renderTextNode(child, childIndex)}
              </li>
            ))}
          </ListTag>
        );

      case 'list-item':
        return (
          <li key={key} className="leading-relaxed mb-1">
            {block.children.map((child, childIndex) => 
              renderTextNode(child, childIndex)
            )}
          </li>
        );

      case 'quote':
        return (
          <blockquote key={key} className="border-l-4 border-blue-500 pl-4 py-2 mb-4 italic text-gray-600 bg-blue-50 rounded-r">
            {block.children.map((child, childIndex) => 
              renderTextNode(child, childIndex)
            )}
          </blockquote>
        );

      case 'code':
        return (
          <pre key={key} className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
            <code>
              {block.children.map((child, childIndex) => 
                child.text
              ).join('')}
            </code>
          </pre>
        );

      case 'link':
        return (
          <a 
            key={key} 
            href={block.url} 
            className="text-blue-600 hover:text-blue-800 underline transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {block.children.map((child, childIndex) => 
              renderTextNode(child, childIndex)
            )}
          </a>
        );

      case 'image':
        return (
          <div key={key} className="mb-6">
            <img 
              src={block.url} 
              alt="" 
              className="max-w-full h-auto rounded-lg shadow-md"
              onError={(e) => { 
                e.currentTarget.src = 'https://placehold.co/800x400/E0E7FF/4338CA?text=Image+Not+Found'; 
              }}
            />
          </div>
        );

      default:
        // Fallback for unknown block types
        return (
          <div key={key} className="mb-4 leading-relaxed">
            {block.children.map((child, childIndex) => 
              renderTextNode(child, childIndex)
            )}
          </div>
        );
    }
  };

  return (
    <div className={className}>
      {content.map((block, index) => renderBlock(block, index))}
    </div>
  );
};

export default RichTextRenderer;