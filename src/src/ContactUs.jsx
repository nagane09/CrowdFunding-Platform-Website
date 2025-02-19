import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (you can add API call here)
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      age: "",
      message: ""
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
      {submitted && (
        <p className="text-green-600 mb-4">
          Thank you for your message! We will get back to you shortly.
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded"
            required
          />
        </div>
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded"
            required
          />
        </div>
        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded"
            placeholder="e.g., 123-456-7890"
          />
        </div>
        {/* Age */}
        <div>
          <label htmlFor="age" className="block text-gray-700 font-medium mb-2">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded"
            placeholder="e.g., 30"
          />
        </div>
        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full border border-gray-300 p-3 rounded"
            required
          ></textarea>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-200"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8">
        <p className="text-gray-700">
          For direct support, email us at:{" "}
          <a href="mailto:support@crowdfund.com" className="text-blue-600 underline">
            support@crowdfund.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
