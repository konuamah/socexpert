'use client'

import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { signOut, useSession } from 'next-auth/react'

type BlogPost = {
  id: string
  title: string
  content: string
  image?: string // base64 image string optional
  createdAt: string
  updatedAt: string
}

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState<string | null>(null)
  const [editingPostId, setEditingPostId] = useState<string | null>(null)
  const [error, setError] = useState('')

  // Always call hooks unconditionally
  useEffect(() => {
    const stored = localStorage.getItem('blog-posts')
    if (stored) setPosts(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem('blog-posts', JSON.stringify(posts))
  }, [posts])

  // Early returns after hooks
  if (status === 'loading') {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex justify-center items-center h-64">
          <div className="text-lg">Loading...</div>
        </div>
      </div>
    )
  }

  if (!session || session.user.role !== 'admin') {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h1>
          <p>You don't have permission to access this page.</p>
        </div>
      </div>
    )
  }

  function resetForm() {
    setTitle('')
    setContent('')
    setImage(null)
    setEditingPostId(null)
    setError('')
  }

  function validate() {
    if (!title.trim() || !content.trim()) {
      setError('Both title and content are required.')
      return false
    }
    return true
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onloadend = () => {
      setImage(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  function savePost() {
    if (!validate()) return

    if (editingPostId) {
      setPosts((prev) =>
        prev.map((post) =>
          post.id === editingPostId
            ? {
                ...post,
                title,
                content,
                image: image || post.image,
                updatedAt: new Date().toISOString(),
              }
            : post
        )
      )
    } else {
      const newPost: BlogPost = {
        id: uuidv4(),
        title,
        content,
        image: image || undefined,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      setPosts((prev) => [newPost, ...prev])
    }

    resetForm()
  }

  function editPost(id: string) {
    const post = posts.find((p) => p.id === id)
    if (!post) return
    setTitle(post.title)
    setContent(post.content)
    setImage(post.image || null)
    setEditingPostId(id)
    setError('')
  }

  function deletePost(id: string) {
    if (confirm('Are you sure you want to delete this post?')) {
      setPosts((prev) => prev.filter((p) => p.id !== id))
      if (editingPostId === id) resetForm()
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Blog CMS Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            Welcome, {session.user.name}
          </span>
          <button
            onClick={() => signOut({ callbackUrl: '/login' })}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Post Form */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">
          {editingPostId ? 'Edit Post' : 'Create New Post'}
        </h2>
        {error && <p className="mb-2 text-red-600">{error}</p>}

        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />

        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          className="w-full p-2 mb-3 border rounded resize-y"
        />

        {/* Image Upload */}
        <div className="mb-3">
          <label className="block mb-1 font-medium">Post Image (optional)</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {image && (
            <img
              src={image}
              alt="Preview"
              className="mt-2 max-h-48 object-contain border rounded"
            />
          )}
        </div>

        <div className="flex gap-4">
          <button
            onClick={savePost}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {editingPostId ? 'Update Post' : 'Create Post'}
          </button>
          {editingPostId && (
            <button
              onClick={resetForm}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          )}
        </div>
      </section>

      {/* Posts List */}
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
                  onClick={() => editPost(post.id)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => deletePost(post.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
