/**
 * Extracts plain text content from various data formats, including Strapi rich text blocks.
 * @param content The content to extract text from (string, array of blocks, or object with text/content).
 * @returns The extracted plain text content.
 */
export const extractTextContent = (content: any): string => {
  if (typeof content === 'string') {
    return content
  } else if (Array.isArray(content)) {
    // Handle Strapi rich text blocks
    return content
      .map(block => {
        if (block?.type === 'paragraph' && block?.children) {
          return block.children.map((child: any) => child?.text || '').join('')
        }
        if (block?.type === 'text') {
          return block.text || ''
        }
        return ''
      })
      .filter(text => text.trim())
      .join('\n\n')
  } else if (content && typeof content === 'object') {
    if (content.text) {
      return content.text
    } else if (content.content) {
      return typeof content.content === 'string' ? content.content : ''
    }
  }
  return ''
}

/**
 * Constructs a full image URL from various cover data formats.
 * Handles relative URLs by prepending the Strapi API URL.
 * @param cover The cover data, which could be an object with data.attributes.url, a direct URL string, or undefined.
 * @returns The full image URL or undefined if no valid URL can be constructed.
 */
export const constructImageUrl = (cover: any): string | undefined => {
  const coverUrl = cover?.data?.attributes?.url || 
                   cover?.url || 
                   cover

  if (!coverUrl) return undefined

  // If it's a relative URL, make it absolute
  if (typeof coverUrl === 'string' && coverUrl.startsWith('/')) {
    // Ensure process.env.NEXT_PUBLIC_STRAPI_API_URL is available in the environment
    // This assumes NEXT_PUBLIC_STRAPI_API_URL is correctly configured in your Next.js environment
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${coverUrl}`
  }

  return coverUrl
}

/**
 * Formats a date string into a human-readable format (e.g., "Month Day, Year").
 * @param dateString The date string to format.
 * @returns The formatted date string.
 */
export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}