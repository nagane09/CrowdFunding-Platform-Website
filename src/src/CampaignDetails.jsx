import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const campaigns = [
  { 
    id: 1, 
    title: "Smart AI Assistant", 
    category: "Tech", 
    goal: 10000, 
    raised: 7000, 
    desc: "An AI-powered virtual assistant to simplify daily tasks and boost productivity. Designed to help individuals and businesses automate tasks, schedule events, and improve efficiency.",
    image: "/details-1.jpg",
    updates: ["✅ Reached 50% funding!", "🛠 AI model upgrade in progress."], 
    comments: ["Great idea!", "When will it launch?"]
  },
  { 
    id: 2, 
    title: "Medical Aid for All", 
    category: "Health", 
    goal: 15000, 
    raised: 5000, 
    desc: "Providing free medical checkups and treatments for underprivileged communities. Aiming to establish medical camps and distribute essential medicines.",
    image: "/details-2.jpg",
    updates: ["👨‍⚕️ Doctors onboarded!", "🏥 First camp scheduled."], 
    comments: ["Amazing initiative!", "How can I volunteer?"]
  }
];

const CampaignDetails = () => {
  const { id } = useParams();
  const campaign = campaigns.find(c => c.id === parseInt(id));
  const [donation, setDonation] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(campaign?.comments || []);

  if (!campaign) {
    return <h2 className="text-center mt-10 text-red-500">Campaign Not Found</h2>;
  }

  const handleDonate = () => {
    if (!donation || isNaN(donation) || donation <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }
    alert(`Thank you for donating $${donation}!`);
    setDonation("");
  };

  const handleAddComment = () => {
    if (!comment.trim()) return;
    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Campaign Title & Category */}
      <h2 className="text-4xl font-bold text-gray-800">{campaign.title}</h2>
      <p className="text-lg text-blue-600 font-semibold mt-2">{campaign.category}</p>

      {/* Campaign Image */}
      {campaign.image ? (
        <img 
          src={campaign.image} 
          alt={campaign.title} 
          className="w-full h-68 object-cover rounded-lg mt-4"
        />
      ) : (
        <div className="w-full h-60 bg-gray-300 rounded-lg mt-4 flex items-center justify-center">
          <span className="text-gray-500">No Image Available</span>
        </div>
      )}

      {/* Description */}
      <p className="mt-4 text-gray-600 leading-relaxed">{campaign.desc}</p>

      {/* Progress Bar & Goal */}
      <div className="mt-6">
        <p className="text-lg font-semibold text-gray-700">
          ${campaign.raised} raised of ${campaign.goal} goal
        </p>
        <div className="relative w-full bg-gray-200 h-6 rounded mt-2">
          <div 
            className="bg-green-500 h-6 rounded text-white text-xs flex items-center justify-center"
            style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
          >
            {Math.round((campaign.raised / campaign.goal) * 100)}%
          </div>
        </div>
      </div>

      {/* Donate Section */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800">Support this Campaign</h3>
        <div className="flex gap-2 mt-3">
          {[10, 50, 100, 500].map(amount => (
            <button 
              key={amount} 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setDonation(amount)}
            >
              ${amount}
            </button>
          ))}
        </div>
        <div className="mt-4 flex">
          <input 
            type="number" 
            className="border p-2 rounded w-full" 
            placeholder="Enter amount" 
            value={donation}
            onChange={(e) => setDonation(e.target.value)} 
          />
          <button 
            className="bg-green-500 text-white px-6 py-2 rounded ml-2 hover:bg-green-600"
            onClick={handleDonate}
          >
            Donate
          </button>
        </div>
      </div>

      {/* Updates Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800">Latest Updates</h3>
        <div className="mt-3 space-y-3">
          {campaign.updates.map((update, idx) => (
            <div key={idx} className="p-3 bg-gray-50 border rounded">
              {update}
            </div>
          ))}
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800">Comments</h3>
        <div className="mt-3">
          <input 
            type="text" 
            className="border p-2 rounded w-full" 
            placeholder="Write a comment..." 
            value={comment} 
            onChange={(e) => setComment(e.target.value)} 
          />
          <button 
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleAddComment}
          >
            Post Comment
          </button>
        </div>

        {/* Display Comments */}
        <div className="mt-4 space-y-3">
          {comments.length === 0 ? (
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          ) : (
            comments.map((c, idx) => (
              <div key={idx} className="p-3 bg-gray-50 border rounded">
                {c}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Social Share Buttons */}
      <div className="mt-8 flex gap-3">
        <button className="bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-800">
          📘 Share on Facebook
        </button>
        <button className="bg-blue-400 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-500">
          🐦 Share on Twitter
        </button>
        <button className="bg-gray-800 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-900">
          🔗 Copy Link
        </button>
      </div>
    </div>
  );
};

export default CampaignDetails;
