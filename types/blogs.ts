export type BlogPost = {
  id: string
  slug: string
  title: string
  content: string
  image?: string // base64 image string optional
  createdAt: string
  updatedAt: string
}