'use client'
import { useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { usePosts } from '../../../../hooks/usePosts'
import { PostForm } from './post-form'
import { PostList } from './post-list'
import { BlogPost } from '../../../../types/blogs'

// Utility function to generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim()
}

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const { posts, addPost, updatePost, deletePost } = usePosts()
  const [editingPostSlug, setEditingPostSlug] = useState<string | null>(null)
  const [error, setError] = useState('')

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

  function validate(title: string, content: string) {
    if (!title.trim() || !content.trim()) {
      setError('Both title and content are required.')
      return false
    }
    return true
  }

  function handleSave(postData: Omit<BlogPost, 'id' | 'slug' | 'createdAt' | 'updatedAt'>) {
    if (!validate(postData.title, postData.content)) return

    const slug = generateSlug(postData.title)
    
    // Check if slug already exists (only for new posts or when title changes)
    const existingPost = posts.find(p => p.slug === slug)
    if (existingPost && existingPost.slug !== editingPostSlug) {
      setError('A post with this title already exists. Please choose a different title.')
      return
    }

    if (editingPostSlug) {
      updatePost(editingPostSlug, { ...postData, slug })
    } else {
      const newPost: BlogPost = {
        id: crypto.randomUUID(),
        slug,
        ...postData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      addPost(newPost)
    }
    setEditingPostSlug(null)
    setError('')
  }

  function handleEdit(slug: string) {
    setEditingPostSlug(slug)
    setError('')
  }

  function handleDelete(slug: string) {
    if (confirm('Are you sure you want to delete this post?')) {
      deletePost(slug)
      if (editingPostSlug === slug) setEditingPostSlug(null)
    }
  }

  const editingPost = editingPostSlug ? posts.find(p => p.slug === editingPostSlug) : null

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
      <PostForm
        initialPost={editingPost}
        onSave={handleSave}
        onCancel={() => setEditingPostSlug(null)}
        error={error}
      />
      <PostList
        posts={posts}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
}