import React, { useState } from "react";

const CreateCampaign = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    images: null,
    video: null,
    fundingGoal: "",
    deadline: "",
    category: "",
    rewards: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle text, select, and file input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic required fields validation
    if (!formData.title || !formData.description || !formData.fundingGoal) {
      setError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call; replace with actual API integration
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccess("Campaign created successfully!");
      // Reset the form after submission
      setFormData({
        title: "",
        description: "",
        images: null,
        video: null,
        fundingGoal: "",
        deadline: "",
        category: "",
        rewards: ""
      });
    } catch (err) {
      setError("Failed to create campaign. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded shadow my-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
        Create a New Campaign
      </h2>

      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      {success && <p className="text-green-600 text-center mb-4">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
            Title<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Campaign Title"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
            Description<span className="text-red-600">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Detailed description of your campaign"
            rows="5"
            required
          ></textarea>
        </div>

        {/* Images */}
        <div>
          <label htmlFor="images" className="block text-gray-700 font-medium mb-2">
            Images
          </label>
          <input
            type="file"
            id="images"
            name="images"
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            multiple
            accept="image/*"
          />
        </div>

        {/* Video */}
        <div>
          <label htmlFor="video" className="block text-gray-700 font-medium mb-2">
            Video
          </label>
          <input
            type="file"
            id="video"
            name="video"
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            accept="video/*"
          />
        </div>

        {/* Funding Goal */}
        <div>
          <label htmlFor="fundingGoal" className="block text-gray-700 font-medium mb-2">
            Funding Goal<span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            id="fundingGoal"
            name="fundingGoal"
            value={formData.fundingGoal}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g., 10000"
            required
          />
        </div>

        {/* Deadline */}
        <div>
          <label htmlFor="deadline" className="block text-gray-700 font-medium mb-2">
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Category</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
            <option value="Environment">Environment</option>
            <option value="Arts">Arts</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Rewards (Optional) */}
        <div>
          <label htmlFor="rewards" className="block text-gray-700 font-medium mb-2">
            Rewards (Optional)
          </label>
          <textarea
            id="rewards"
            name="rewards"
            value={formData.rewards}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Describe any rewards for backers"
            rows="3"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition duration-200"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Create Campaign"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCampaign;
