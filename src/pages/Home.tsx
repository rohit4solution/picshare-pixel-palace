
import PostCard from "@/components/PostCard";
import UserStories from "@/components/UserStories";

const mockPosts = [
  {
    id: 1,
    user: {
      username: "photography_lover",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c3e5?w=150&h=150&fit=crop&crop=face",
      verified: true
    },
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=600&fit=crop",
    caption: "Golden hour vibes ✨ Nothing beats the perfect lighting for a cozy evening at home.",
    likes: 2847,
    comments: 129,
    timeAgo: "2 hours ago"
  },
  {
    id: 2,
    user: {
      username: "tech_enthusiast",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      verified: false
    },
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=600&fit=crop",
    caption: "Late night coding session with my trusty laptop 💻 Building something amazing!",
    likes: 1532,
    comments: 87,
    timeAgo: "4 hours ago"
  },
  {
    id: 3,
    user: {
      username: "workspace_inspo",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      verified: true
    },
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop",
    caption: "Clean workspace, clear mind 🧘‍♀️ Productivity mode: ON",
    likes: 3201,
    comments: 156,
    timeAgo: "6 hours ago"
  },
  {
    id: 4,
    user: {
      username: "matrix_fan",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      verified: false
    },
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=600&fit=crop",
    caption: "Welcome to the Matrix 🔴🔵 Choose your reality wisely...",
    likes: 5847,
    comments: 312,
    timeAgo: "8 hours ago"
  }
];

const Home = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <UserStories />
      
      <div className="space-y-6 mt-8">
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
