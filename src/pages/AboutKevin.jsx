import React from "react";

function AboutKevin() {
  return (
    <div className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Kevin Paffrath</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Real estate investor, entrepreneur, and the visionary behind HouseHack.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Who is Kevin?</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kevin Paffrath is a nationally recognized real estate investor and entrepreneur
              who built his reputation by transforming distressed properties into profitable
              investments. Through HouseHack, he aims to democratize real estate investment by
              making it accessible, transparent, and lucrative for everyday investors.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Why HouseHack?</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              HouseHack isn't just another real estate platform — it's a vision to redefine
              property management and investment. Kevin’s hands-on approach combines smart
              acquisition, high ROI renovations, and long-term property management to ensure
              success for every investor.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Connect with Kevin</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Follow Kevin for real-time updates, property walkthroughs, and educational content.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://www.youtube.com/@MeetKevin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                YouTube
              </a>
              <a
                href="https://www.instagram.com/meetkevin/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                Instagram
              </a>
              <a
                href="https://www.househack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                HouseHack Website
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutKevin;
