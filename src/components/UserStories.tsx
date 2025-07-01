
const stories = [
  { username: "Your Story", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face", isOwn: true },
  { username: "sarah_j", avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c3e5?w=150&h=150&fit=crop&crop=face" },
  { username: "mike_photo", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
  { username: "emma_travel", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" },
  { username: "alex_dev", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
  { username: "lisa_art", avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face" },
];

const UserStories = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {stories.map((story, index) => (
          <div key={index} className="flex flex-col items-center space-y-2 min-w-0">
            <div className={`relative ${story.isOwn ? '' : 'p-0.5 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full'}`}>
              <img
                src={story.avatar}
                alt={story.username}
                className="w-16 h-16 rounded-full object-cover border-2 border-white"
              />
              {story.isOwn && (
                <div className="absolute bottom-0 right-0 w-5 h-5 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
            </div>
            <span className="text-xs text-gray-600 truncate max-w-[70px] text-center">
              {story.username}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserStories;
