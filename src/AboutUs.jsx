import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const AboutUs = () => {
  // Settings for the image slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
      
      {/* Image Slider */}
      <div className="mb-8">
        <Slider {...settings}>
          <div>
            <img
              src="/about-1.avif"
              alt="Our Team"
              className="w-full rounded-lg shadow"
            />
          </div>
          <div>
            <img
              src="/about-2.jpg"
              alt="Our Office"
              className="w-full rounded-lg shadow"
            />
          </div>
          <div>
            <img
              src="/about-3.jpg"
              alt="Our Mission"
              className="w-full rounded-lg shadow"
            />
          </div>
        </Slider>
      </div>

      {/* Detailed Description */}
      <div className="text-gray-700 text-lg leading-relaxed space-y-4">
        <p>
          Welcome to CrowdFund – a platform dedicated to empowering creators and connecting them with a vibrant community of supporters. Our mission is to provide a transparent, secure, and innovative space where dreams can transform into reality.
        </p>
        <p>
          At CrowdFund, we believe in the power of ideas. Whether you're an entrepreneur, an artist, or a social innovator, our platform is designed to help you bring your project to life. We combine cutting-edge technology with community engagement to foster a dynamic environment where creativity thrives.
        </p>
        <p>
          Our journey began with the vision of making crowdfunding accessible and reliable for everyone. We are committed to maintaining the highest standards of data security and transparency, ensuring that every campaign is built on trust and accountability.
        </p>
        <p>
          Join us in this exciting adventure and be part of a community that celebrates innovation and progress. With CrowdFund, your ideas are just the beginning – together, we can build a brighter future.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
