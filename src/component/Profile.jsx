export default function Profile({ totalLikes, totalDisLikes }) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">My Profile</h2>
        <p className="text-gray-700">❤️ Total Likes Across All Posts: <strong>{totalLikes}</strong></p>
        <p className="text-gray-700">💔 Total Dislikes Across All Posts: <strong>{totalDisLikes}</strong></p>
      </div>
    );
  }
  