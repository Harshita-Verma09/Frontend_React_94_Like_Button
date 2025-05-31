import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Profile from "./component/Profile";
import Feed from "./component/Feed";

export default function App() {
  const [totalLikes, setTotalLikes] = useState(0);
  const [totalDisLikes, setTotalDisLikes] = useState(0);

  const handleLikes = () => {
    setTotalLikes(prev => prev + 1);
  };
  const handleDislikes = () => {
    setTotalDisLikes(prev => prev + 1);
  }
  
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md p-4 flex justify-between">
          <h1 className="text-2xl font-bold text-blue-600">Social App</h1>
          <div className="space-x-4">
            <Link to="/" className="text-blue-500 hover:underline">Feed</Link>
            <Link to="/profile" className="text-blue-500 hover:underline">Profile</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Feed onLike={handleLikes} onDislike={handleDislikes} />} />
          <Route path="/profile" element={<Profile totalLikes={totalLikes} totalDisLikes={totalDisLikes} />} />
        </Routes>
      </div>
    </Router>
  );
}
