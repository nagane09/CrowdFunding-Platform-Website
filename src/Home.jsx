import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const campaigns = [
    {
      id: 1,
      title: "Tech Startup",
      category: "Technology",
      goal: "$10,000",
      raised: "$7,500",
      image: "/hero-2.jpg"
    },
    {
      id: 2,
      title: "Eco-Friendly Bags",
      category: "Environment",
      goal: "$5,000",
      raised: "$3,200",
      image: "/hero-3.jpg"
    },
    {
      id: 3,
      title: "AI Health App",
      category: "Healthcare",
      goal: "$20,000",
      raised: "$15,000",
      image: "/hero-4.jpg"
    },
  ];

  const filteredCampaigns = campaigns.filter((campaign) =>
    campaign.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: "url('/hero-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Bring Your Ideas to Life
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Launch your campaign and join a community of backers supporting innovative projects.
          </p>
          <div className="mt-8">
            <Link
              to="/create-campaign"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition duration-300"
            >
              Create Campaign
            </Link>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto text-center">
          <input
            type="text"
            placeholder="Search campaigns..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-lg border border-gray-300 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Featured Campaigns
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCampaigns.length > 0 ? (
              filteredCampaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {campaign.title}
                    </h3>
                    <p className="text-gray-500 mt-1">{campaign.category}</p>
                    <div className="mt-3">
                      <p className="text-gray-600">Goal: {campaign.goal}</p>
                      <p className="text-green-600">Raised: {campaign.raised}</p>
                    </div>
                    <div className="mt-4">
                      <Link
                        to={`/campaign/${campaign.id}`}
                        className="block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
                      >
                        View Campaign
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">
                No matching campaigns found.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            What Our Users Say
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
              <p className="italic text-gray-600">
                "This platform helped me raise funds for my tech startup!"
              </p>
              <h3 className="font-bold text-gray-800 mt-4">- Sarah K.</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
              <p className="italic text-gray-600">
                "A great place to support innovative ideas!"
              </p>
              <h3 className="font-bold text-gray-800 mt-4">- Michael J.</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
