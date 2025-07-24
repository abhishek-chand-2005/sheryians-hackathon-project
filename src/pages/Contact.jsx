import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            We'd love to hear from you! Whether you're looking to sell, rent, or invest — we’re here to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Reach out via phone, email, or social media. We typically respond within 24 hours.
            </p>
            <div className="space-y-4">
              <div>
                <span className="font-semibold">Phone: </span>
                <a href="tel:+1234567890" className="text-blue-600 hover:underline">
                  +1 234 567 890
                </a>
              </div>
              <div>
                <span className="font-semibold">Email: </span>
                <a href="mailto:hello@househack.com" className="text-blue-600 hover:underline">
                  hello@househack.com
                </a>
              </div>
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://www.instagram.com/meetkevin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Instagram
                </a>
                <a
                  href="https://www.youtube.com/@MeetKevin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted! (You can replace this with your backend)");
            }}
          >
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">Name</label>
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">Email</label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">Message</label>
              <textarea
                rows="4"
                required
                placeholder="Write your message..."
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
