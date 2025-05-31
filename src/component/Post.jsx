
export default function Post({ imgUrl, onLike, onDislike, likes, dislikes, hasReacted }) {
  return (
    <div className="bg-white rounded-lg shadow-md w-70 h-70 overflow-hidden">
      <img src={imgUrl} alt="Post" className=" w-70 h-60 object-cover" />
      <div className="p-4 flex justify-between items-center">
        <button
          onClick={onLike}
          disabled={hasReacted}
          className="text-green-500 font-semibold hover:underline disabled:opacity-50"
        >
          Like {likes}
        </button>
        <button
          onClick={onDislike}
          disabled={hasReacted}
          className="text-red-500 font-semibold hover:underline disabled:opacity-50"
        >
          Dislike {dislikes}
        </button>
      </div>
    </div>
  );
}
