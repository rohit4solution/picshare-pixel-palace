
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface PostCardProps {
  post: {
    id: number;
    user: {
      username: string;
      avatar: string;
      verified: boolean;
    };
    image: string;
    caption: string;
    likes: number;
    comments: number;
    timeAgo: string;
  };
}

const PostCard = ({ post }: PostCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <img
            src={post.user.avatar}
            alt={post.user.username}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex items-center space-x-1">
            <span className="font-semibold text-gray-900">{post.user.username}</span>
            {post.user.verified && (
              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            )}
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <div className="w-1 h-1 bg-current rounded-full"></div>
          <div className="w-1 h-1 bg-current rounded-full mt-1"></div>
          <div className="w-1 h-1 bg-current rounded-full mt-1"></div>
        </button>
      </div>

      {/* Image */}
      <div className="aspect-square">
        <img
          src={post.image}
          alt="Post"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="transition-colors"
            >
              <Heart
                className={cn(
                  "h-6 w-6",
                  isLiked ? "fill-red-500 text-red-500" : "text-gray-700 hover:text-gray-500"
                )}
              />
            </button>
            <button className="text-gray-700 hover:text-gray-500">
              <MessageCircle className="h-6 w-6" />
            </button>
            <button className="text-gray-700 hover:text-gray-500">
              <Send className="h-6 w-6" />
            </button>
          </div>
          <button
            onClick={() => setIsSaved(!isSaved)}
            className="transition-colors"
          >
            <Bookmark
              className={cn(
                "h-6 w-6",
                isSaved ? "fill-gray-900 text-gray-900" : "text-gray-700 hover:text-gray-500"
              )}
            />
          </button>
        </div>

        {/* Likes */}
        <div className="mb-2">
          <span className="font-semibold text-gray-900">
            {(post.likes + (isLiked ? 1 : 0)).toLocaleString()} likes
          </span>
        </div>

        {/* Caption */}
        <div className="mb-2">
          <span className="font-semibold text-gray-900 mr-2">{post.user.username}</span>
          <span className="text-gray-900">{post.caption}</span>
        </div>

        {/* Comments */}
        <button className="text-gray-500 text-sm mb-2 hover:text-gray-700">
          View all {post.comments} comments
        </button>

        {/* Time */}
        <div className="text-gray-400 text-xs uppercase tracking-wide">
          {post.timeAgo}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
