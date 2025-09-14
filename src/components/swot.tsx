const SwotSection = () => {
  const swotData = {
    strengths: [
  "Clarity in explaining technical concepts and projects",
  "Resilient storytelling with empathy and authenticity",
  "Confidence when well-prepared",
  "Analytical approach to breaking down problems",
  "Ability to connect with peers and offer support"
],

weaknesses: [
  "Tends to speak too quickly when nervous",
  "Sometimes over-explains instead of being concise",
  "Limited experience with large-audience speaking",
  "Less confident in creative area",
  "Confidence fluctuates depending on mood and situation"
],

opportunities: [
  "College presentations, group projects, and SLC candidacy",
  "Hackathons and SIH pitches to improve persuasion skills",
  "Networking at developer meetups and tech events",
  "Creating short videos or blogs to improve articulation",
  "Joining Toastmasters or debate societies for structured practice"
],

threats: [
  "Performance anxiety during interviews or public speaking",
  "Difficulty switching between casual and professional tones",
  "Over-reliance on digital communication over face-to-face",
  "Time constraints due to academics and projects",
  "Cultural barriers in global or diverse environments"
]

  };

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            SWOT Analysis
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            A comprehensive analysis of my verbal communication strengths, weaknesses, opportunities, and threats for continuous improvement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Strengths */}
          <div className="bg-green-50 rounded-xl p-6 sm:p-8 border-2 border-green-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-green-800">Strengths</h3>
            </div>
            <ul className="space-y-3">
              {swotData.strengths.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-green-700 text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Weaknesses */}
          <div className="bg-red-50 rounded-xl p-6 sm:p-8 border-2 border-red-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-red-800">Weaknesses</h3>
            </div>
            <ul className="space-y-3">
              {swotData.weaknesses.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-red-700 text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Opportunities */}
          <div className="bg-blue-50 rounded-xl p-6 sm:p-8 border-2 border-blue-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-800">Opportunities</h3>
            </div>
            <ul className="space-y-3">
              {swotData.opportunities.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-blue-700 text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Threats */}
          <div className="bg-yellow-50 rounded-xl p-6 sm:p-8 border-2 border-yellow-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-800">Threats</h3>
            </div>
            <ul className="space-y-3">
              {swotData.threats.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-yellow-700 text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwotSection;