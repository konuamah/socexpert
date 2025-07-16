'use client'

import { useState, useEffect, ChangeEvent } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import { BlogPost } from '../../../../types/blogs'

interface PostFormProps {
  initialPost?: BlogPost | null
  onSave: (post: Omit<BlogPost, 'id' | 'createdAt'>) => void
  onCancel?: () => void
  error?: string
}

export function PostForm({ initialPost, onSave, onCancel, error }: PostFormProps) {
  const [title, setTitle] = useState(initialPost?.title || '')
  const [image, setImage] = useState(initialPost?.image || null)
  const [isClient, setIsClient] = useState(false)

  // Ensure we're on the client side before initializing the editor
  useEffect(() => {
    setIsClient(true)
  }, [])

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false }),
      Image,
    ],
    content: initialPost?.content || '',
    immediatelyRender: false, // Fix for SSR hydration issues
    editorProps: {
      attributes: {
        class: 'prose max-w-none min-h-[200px] p-2 border rounded outline-none',
      },
    },
  }, [isClient]) // Only initialize when client-side

  useEffect(() => {
    if (initialPost && editor && isClient) {
      setTitle(initialPost.title)
      editor.commands.setContent(initialPost.content || '')
    }
  }, [initialPost, editor, isClient])

  function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onloadend = () => {
      setImage(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  function handleSubmit() {
    const content = editor?.getHTML() || ''
    onSave({
      title,
      content,
      image: image || undefined,
    })
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {initialPost ? 'Edit Post' : 'Create New Post'}
      </h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <input
        type="text"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-3 border rounded"
      />

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Post Content
        </label>
        {isClient && editor ? (
          <div className="border rounded-lg">
            {/* Toolbar */}
            <div className="border-b bg-gray-50 p-2 flex flex-wrap gap-1">
              <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={`px-3 py-1 rounded text-sm font-medium ${
                  editor.isActive('bold') 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <strong>B</strong>
              </button>
              
              <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={`px-3 py-1 rounded text-sm font-medium ${
                  editor.isActive('italic') 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <em>I</em>
              </button>
              
              <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={`px-3 py-1 rounded text-sm font-medium ${
                  editor.isActive('strike') 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <s>S</s>
              </button>
              
              <div className="w-px h-6 bg-gray-300 mx-1"></div>
              
              <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={`px-3 py-1 rounded text-sm font-medium ${
                  editor.isActive('heading', { level: 1 }) 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                H1
              </button>
              
              <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={`px-3 py-1 rounded text-sm font-medium ${
                  editor.isActive('heading', { level: 2 }) 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                H2
              </button>
              
              <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={`px-3 py-1 rounded text-sm font-medium ${
                  editor.isActive('heading', { level: 3 }) 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                H3
              </button>
              
              <div className="w-px h-6 bg-gray-300 mx-1"></div>
              
              <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`px-3 py-1 rounded text-sm font-medium ${
                  editor.isActive('bulletList') 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                • List
              </button>
              
              <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`px-3 py-1 rounded text-sm font-medium ${
                  editor.isActive('orderedList') 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                1. List
              </button>
              
              <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={`px-3 py-1 rounded text-sm font-medium ${
                  editor.isActive('blockquote') 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Quote
              </button>
              
              <div className="w-px h-6 bg-gray-300 mx-1"></div>
              
              <button
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().undo()}
                className="px-3 py-1 rounded text-sm font-medium bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Undo
              </button>
              
              <button
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().redo()}
                className="px-3 py-1 rounded text-sm font-medium bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Redo
              </button>
            </div>
            
            {/* Editor Content */}
            <div className="min-h-[200px] p-3">
              <EditorContent editor={editor} />
            </div>
          </div>
        ) : (
          <div className="min-h-[200px] p-2 border rounded bg-gray-50 flex items-center justify-center">
            Loading editor...
          </div>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Post Image (optional)
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 border rounded"
        />
        {image && (
          <img src={image} alt="Preview" className="mt-2 max-w-xs h-auto rounded" />
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {initialPost ? 'Update Post' : 'Create Post'}
        </button>
        {initialPost && onCancel && (
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  )
}