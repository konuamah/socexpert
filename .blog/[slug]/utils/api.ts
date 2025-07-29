//Import helper functions needed for data transformation
import { extractTextContent, constructImageUrl } from './helpers';
import { BlogPost } from '../../../../../types/blogs';

/**
 * Fetches a single blog post by its slug from the Strapi API.
 * @param slug The slug of the blog post to fetch.
 * @returns A Promise that resolves to the BlogPost object or null if not found/error.
 */
export const fetchPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const postRes = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        },
      }
    )

    if (!postRes.ok) {
      // Log the status and status text for better debugging
      console.error(`Failed to fetch post. Status: ${postRes.status}, ${postRes.statusText}`);
      throw new Error('Failed to fetch post');
    }

    const postJson = await postRes.json()

    if (postJson.data && postJson.data.length > 0) {
      const item = postJson.data[0]
      const data = item.attributes || item

      return {
        id: (item.id || item.documentId || '').toString(),
        title: data.title || item.title || "Untitled",
        slug: data.slug || item.slug || "",
        // Keep the raw body for rich text rendering
        body: data.body || data.content || item.body || item.content || [],
        cover: constructImageUrl(data.cover || item.cover),
        createdAt: data.createdAt || item.createdAt || "",
        updatedAt: data.updatedAt || item.updatedAt || "",
      }
    }
    return null
  } catch (error) {
    console.error('Error fetching post by slug:', error)
    return null
  }
}

/**
 * Fetches a list of other blog posts from the Strapi API, excluding a specific slug.
 * Limits the results to 5 posts.
 * @param excludeSlug The slug of the post to exclude from the results.
 * @returns A Promise that resolves to an array of BlogPost objects.
 */
export const fetchOtherPosts = async (excludeSlug: string): Promise<BlogPost[]> => {
  try {
    const allPostsRes = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?populate=*&filters[slug][$ne]=${excludeSlug}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        },
      }
    )

    if (allPostsRes.ok) {
      const allPostsJson = await allPostsRes.json()

      const formattedOtherPosts: BlogPost[] = allPostsJson.data
        .filter((item: any) => item?.attributes || item?.title) // Ensure item has attributes or title
        .map((item: any) => {
          const data = item.attributes || item
          return {
            id: (item.id || item.documentId || '').toString(),
            title: data.title || item.title || "Untitled",
            slug: data.slug || item.slug || "",
            // For other posts, we can use extractTextContent for preview/summary
            body: extractTextContent(data.body || data.content || item.body || item.content || ""),
            cover: constructImageUrl(data.cover || item.cover),
            createdAt: data.createdAt || item.createdAt || "",
            updatedAt: data.updatedAt || item.updatedAt || "",
          }
        })
        .slice(0, 5) // Limit to 5 other posts

      return formattedOtherPosts
    }
    return []
  } catch (error) {
    console.error('Error fetching other posts:', error)
    return []
  }
}