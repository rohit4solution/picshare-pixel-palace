
import { useParams } from "react-router-dom";
import { Grid, Bookmark, UserCheck } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const mockProfile = {
  username: "photography_lover",
  fullName: "Sarah Johnson",
  avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c3e5?w=150&h=150&fit=crop&crop=face",
  bio: "📸 Photography enthusiast\n🌍 Travel lover\n✨ Capturing life's beautiful moments",
  posts: 127,
  followers: 15200,
  following: 892,
  verified: true,
  isFollowing: false
};

const mockPosts = [
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=300&fit=crop",
];

const Profile = () => {
  const { username } = useParams();
  const [isFollowing, setIsFollowing] = useState(mockProfile.isFollowing);
  const [activeTab, setActiveTab] = useState<'posts' | 'saved'>('posts');

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
          {/* Avatar */}
          <div className="relative">
            <img
              src={mockProfile.avatar}
              alt={mockProfile.username}
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-100"
            />
            {mockProfile.verified && (
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                <UserCheck className="w-3 h-3 text-white" />
              </div>
            )}
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
              <h1 className="text-2xl font-light text-gray-900 mb-2 md:mb-0">
                {mockProfile.username}
              </h1>
              <div className="flex space-x-2 justify-center md:justify-start">
                <button
                  onClick={() => setIsFollowing(!isFollowing)}
                  className={cn(
                    "px-6 py-1.5 rounded-lg font-semibold text-sm transition-colors",
                    isFollowing
                      ? "bg-gray-200 text-gray-900 hover:bg-gray-300"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  )}
                >
                  {isFollowing ? "Following" : "Follow"}
                </button>
                <button className="px-6 py-1.5 bg-gray-200 text-gray-900 rounded-lg font-semibold text-sm hover:bg-gray-300 transition-colors">
                  Message
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex justify-center md:justify-start space-x-8 mb-4">
              <div className="text-center">
                <div className="font-semibold text-gray-900">{mockProfile.posts}</div>
                <div className="text-gray-500 text-sm">posts</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-900">{mockProfile.followers.toLocaleString()}</div>
                <div className="text-gray-500 text-sm">followers</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-900">{mockProfile.following}</div>
                <div className="text-gray-500 text-sm">following</div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h2 className="font-semibold text-gray-900 mb-1">{mockProfile.fullName}</h2>
              <p className="text-gray-600 whitespace-pre-line">{mockProfile.bio}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <div className="flex justify-center space-x-8">
          <button
            onClick={() => setActiveTab('posts')}
            className={cn(
              "flex items-center space-x-2 py-3 border-b-2 transition-colors",
              activeTab === 'posts'
                ? "border-gray-900 text-gray-900"
                : "border-transparent text-gray-500 hover:text-gray-700"
            )}
          >
            <Grid className="w-4 h-4" />
            <span className="font-semibold text-sm uppercase tracking-wide">Posts</span>
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={cn(
              "flex items-center space-x-2 py-3 border-b-2 transition-colors",
              activeTab === 'saved'
                ? "border-gray-900 text-gray-900"
                : "border-transparent text-gray-500 hover:text-gray-700"
            )}
          >
            <Bookmark className="w-4 h-4" />
            <span className="font-semibold text-sm uppercase tracking-wide">Saved</span>
          </button>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-1 md:gap-4">
        {mockPosts.map((post, index) => (
          <div key={index} className="aspect-square group cursor-pointer">
            <img
              src={post}
              alt={`Post ${index + 1}`}
              className="w-full h-full object-cover rounded-lg group-hover:opacity-90 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
