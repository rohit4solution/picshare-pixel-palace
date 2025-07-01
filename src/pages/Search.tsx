
import { useState } from "react";
import { Search as SearchIcon, User, Hash } from "lucide-react";
import { Link } from "react-router-dom";

const searchResults = {
  users: [
    {
      username: "photography_lover",
      fullName: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c3e5?w=150&h=150&fit=crop&crop=face",
      followers: "15.2k followers",
      verified: true
    },
    {
      username: "tech_enthusiast",
      fullName: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      followers: "8.7k followers",
      verified: false
    },
    {
      username: "workspace_inspo",
      fullName: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      followers: "23.1k followers",
      verified: true
    }
  ],
  hashtags: [
    { tag: "photography", posts: "2.1M posts" },
    { tag: "workspace", posts: "856K posts" },
    { tag: "coding", posts: "1.3M posts" },
    { tag: "travel", posts: "45.2M posts" }
  ]
};

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<'all' | 'users' | 'tags'>('all');

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        {/* Search Header */}
        <div className="relative mb-6">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search users, hashtags, and more..."
            className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-lg border-none outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>

        {/* Search Tabs */}
        <div className="flex space-x-1 mb-6 bg-gray-100 rounded-lg p-1">
          {['all', 'users', 'tags'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium capitalize transition-colors ${
                activeTab === tab
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Results */}
        <div className="space-y-6">
          {/* Users Section */}
          {(activeTab === 'all' || activeTab === 'users') && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Users</h3>
              <div className="space-y-3">
                {searchResults.users.map((user, index) => (
                  <Link
                    key={index}
                    to={`/profile/${user.username}`}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="relative">
                      <img
                        src={user.avatar}
                        alt={user.username}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      {user.verified && (
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                          <User className="w-2 h-2 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{user.username}</div>
                      <div className="text-gray-600 text-sm">{user.fullName}</div>
                      <div className="text-gray-500 text-xs">{user.followers}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Hashtags Section */}
          {(activeTab === 'all' || activeTab === 'tags') && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Hashtags</h3>
              <div className="space-y-3">
                {searchResults.hashtags.map((hashtag, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <Hash className="w-6 h-6 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">#{hashtag.tag}</div>
                      <div className="text-gray-500 text-sm">{hashtag.posts}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
