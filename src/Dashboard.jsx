import React, { useState } from "react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("creator");

  // Dummy data for creator's campaigns
  const createdCampaigns = [
    {
      id: 1,
      title: "Smart AI Assistant",
      fundsRaised: 7000,
      goal: 10000,
      backers: 120,
    },
    {
      id: 2,
      title: "Eco-Friendly Solar Charger",
      fundsRaised: 4000,
      goal: 12000,
      backers: 75,
    },
  ];

  // Dummy data for backer's campaigns
  const backedCampaigns = [
    {
      id: 1,
      title: "Medical Aid for All",
      pledge: 50,
      interactions: 3,
    },
    {
      id: 2,
      title: "Clean Water Initiative",
      pledge: 100,
      interactions: 5,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white rounded shadow my-8">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        User Dashboard
      </h2>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setActiveTab("creator")}
          className={`px-4 py-2 rounded transition-colors ${
            activeTab === "creator"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          Creator Dashboard
        </button>
        <button
          onClick={() => setActiveTab("backer")}
          className={`px-4 py-2 rounded transition-colors ${
            activeTab === "backer"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          Backer Dashboard
        </button>
      </div>

      {/* Creator Dashboard */}
      {activeTab === "creator" && (
        <div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Your Created Campaigns
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {createdCampaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="border border-gray-300 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="text-xl font-bold text-gray-800">
                  {campaign.title}
                </h4>
                <p className="text-gray-600 mt-1">
                  Funds Raised:{" "}
                  <span className="font-medium text-green-600">
                    ${campaign.fundsRaised}
                  </span>{" "}
                  / ${campaign.goal}
                </p>
                <p className="text-gray-600 mt-1">
                  Backers:{" "}
                  <span className="font-medium text-blue-600">
                    {campaign.backers}
                  </span>
                </p>
                <div className="mt-4 flex space-x-2">
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition-colors">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Backer Dashboard */}
      {activeTab === "backer" && (
        <div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Campaigns You Backed
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {backedCampaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="border border-gray-300 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="text-xl font-bold text-gray-800">
                  {campaign.title}
                </h4>
                <p className="text-gray-600 mt-1">
                  Pledged Amount:{" "}
                  <span className="font-medium text-green-600">
                    ${campaign.pledge}
                  </span>
                </p>
                <p className="text-gray-600 mt-1">
                  Interactions:{" "}
                  <span className="font-medium text-blue-600">
                    {campaign.interactions}
                  </span>
                </p>
                <div className="mt-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
