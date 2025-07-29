import React from 'react';
import { ArrowLeft } from 'lucide-react';

/**
 * Renders a "Post not found" message with a back button.
 * @param onBack Callback function to navigate back.
 */
const NotFound = ({ onBack }: { onBack: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">Post not found</h1>
      <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
      </button>
    </div>
  </div>
);

export default NotFound;
