// utils.ts
export const getExcerpt = (content: string | any, limit = 180): string => {
  let text = '';
  
  // Handle different content types
  if (typeof content === 'string') {
    // If it's HTML string, extract text
    if (content.includes('<') && content.includes('>')) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = content;
      text = tempDiv.textContent || tempDiv.innerText || '';
    } else {
      // Plain text
      text = content;
    }
  } else if (Array.isArray(content)) {
    // Handle Strapi rich text blocks
    text = content
      .map(block => {
        if (block?.type === 'paragraph' && block?.children) {
          return block.children.map((child: any) => child?.text || '').join('');
        }
        if (block?.type === 'text') {
          return block.text || '';
        }
        return '';
      })
      .filter(t => t.trim())
      .join(' ');
  } else if (content && typeof content === 'object') {
    // Handle object structures
    if (content.text) {
      text = content.text;
    } else if (content.content) {
      text = typeof content.content === 'string' ? content.content : '';
    } else {
      text = '';
    }
  }
  
  // Return excerpt
  return text.length > limit ? text.slice(0, limit) + '…' : text;
};

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};