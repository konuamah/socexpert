export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  body: string;        // ← Change from 'content' to 'body'
  cover?: string;      // ← Also add 'cover' if needed
  createdAt: string;
  updatedAt: string;
};