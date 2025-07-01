
import { useState } from "react";
import { Heart, MessageCircle } from "lucide-react";

const explorePosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop",
    likes: 2847,
    comments: 129
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop",
    likes: 1532,
    comments: 87
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
    likes: 3201,
    comments: 156
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop",
    likes: 5847,
    comments: 312
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop",
    likes: 4123,
    comments: 198
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop",
    likes: 2956,
    comments: 143
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c3e5?w=400&h=400&fit=crop",
    likes: 6234,
    comments: 267
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    likes: 3789,
    comments: 189
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    likes: 5012,
    comments: 234
  }
];

const Explore = () => {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Explore</h1>
      
      <div className="grid grid-cols-3 gap-1 md:gap-4">
        {explorePosts.map((post) => (
          <div
            key={post.id}
            className="relative aspect-square group cursor-pointer"
            onMouseEnter={() => setHoveredPost(post.id)}
            onMouseLeave={() => setHoveredPost(null)}
          >
            <img
              src={post.image}
              alt={`Explore post ${post.id}`}
              className="w-full h-full object-cover rounded-lg transition-all group-hover:brightness-75"
            />
            
            {/* Hover Overlay */}
            {hoveredPost === post.id && (
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center space-x-6 transition-all">
                <div className="flex items-center space-x-2 text-white font-semibold">
                  <Heart className="h-6 w-6 fill-white" />
                  <span>{post.likes.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-2 text-white font-semibold">
                  <MessageCircle className="h-6 w-6 fill-white" />
                  <span>{post.comments}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
