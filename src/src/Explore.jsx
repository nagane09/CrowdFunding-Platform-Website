import { useState } from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Dummy campaign data (replace later with API data)
  const campaigns = [
    { id: 1, title: "Smart AI Assistant", category: "Tech", goal: "$10,000", raised: 7000, desc: "An AI-powered assistant to simplify daily tasks.", image: "explore-1.jpg" },
    { id: 2, title: "Medical Aid for All", category: "Health", goal: "$15,000", raised: 5000, desc: "Providing free medical checkups for underprivileged communities.", image: "explore-2.jpg" },
    { id: 3, title: "Education for Rural Kids", category: "Education", goal: "$8,500", raised: 6000, desc: "A mission to bring quality education to remote villages.", image: "explore-3.jpg" },
    { id: 4, title: "Eco-Friendly Solar Charger", category: "Tech", goal: "$12,000", raised: 4000, desc: "A portable solar charger to power your devices.", image: "explore-4.jpg" },
    { id: 5, title: "Wildlife Conservation Project", category: "Environment", goal: "$20,000", raised: 12000, desc: "Protecting endangered species and their habitats.", image: "explore-5.jpg" },
    { id: 6, title: "Clean Water Initiative", category: "Health", goal: "$18,000", raised: 15000, desc: "Providing safe drinking water to communities in need.", image: "explore-6.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center text-gray-700">Explore Campaigns</h2>

      {/* Search Bar */}
      <div className="flex justify-center mt-4">
        <input
          type="text"
          placeholder="Search campaigns..."
          className="w-full max-w-md p-2 border rounded"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Campaigns Display */}
      <div className="grid grid-cols-3 gap-7 mt-11 mb-11">
        {campaigns
          .filter((campaign) => campaign.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((campaign) => (
            <div key={campaign.id} className="bg-white p-4 shadow-md rounded-lg">
              {campaign.image ? (
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-40 object-cover rounded"
                />
              ) : (
                <div className="w-full h-40 bg-gray-300 rounded flex items-center justify-center">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
              <h3 className="text-lg font-bold mt-2">{campaign.title}</h3>
              <p className="text-sm text-gray-500">{campaign.category}</p>
              <p className="text-sm font-semibold">{campaign.goal} Goal</p>
              
              {/* Progress Bar */}
              <div className="w-full bg-blue-600 h-2 rounded mt-2"></div>
              <p className="text-sm text-gray-600 mt-2">${campaign.raised} raised</p>

              <Link to={`/campaign/${campaign.id}`} className="w-full block text-center bg-blue-600 text-white p-2 rounded mt-4 hover:bg-blue-700">
                View Campaign
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Explore;
