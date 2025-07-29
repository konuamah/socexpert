import { Search } from 'lucide-react';

type HeaderProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

export default function Header({ searchTerm, setSearchTerm }: HeaderProps) {
  return (
    <header>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Insights, stories, and perspectives from our team
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto relative" role="search" aria-label="Search blog articles">
          <label htmlFor="blog-search" className="sr-only">Search articles</label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
            <input
              id="blog-search"
              type="search"
              name="search"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              autoComplete="off"
              aria-label="Search articles"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
