'use client'

import { BlogPost } from "../../../../types/blogs"

interface PostListProps {
  posts: BlogPost[]
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}

export function PostList({ posts, onEdit, onDelete }: PostListProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Existing Posts</h2>
      {posts.length === 0 && <p>No posts yet. Create one above!</p>}

      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.id} className="border p-4 rounded shadow-sm">
            <h3 className="text-2xl font-bold">{post.title}</h3>
            <p className="text-gray-600 text-sm mb-2">
              Created: {new Date(post.createdAt).toLocaleString()}
              {post.updatedAt !== post.createdAt && (
                <> | Updated: {new Date(post.updatedAt).toLocaleString()}</>
              )}
            </p>
            {post.image && (
              <img
                src={post.image}
                alt={`Image for ${post.title}`}
                className="mb-4 max-h-60 object-contain rounded border"
              />
            )}
            <p className="mb-4 whitespace-pre-wrap">{post.content}</p>

            <div className="flex gap-4">
              <button
                onClick={() => onEdit(post.id)}
                className="text-blue-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(post.id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}