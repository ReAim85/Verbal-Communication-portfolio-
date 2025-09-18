const VideoSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Communication in Action
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Watch my practical applications of Professional Communication in group settings.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* IDI Video */}
          <div className="bg-white rounded-xl transition-all overflow-hidden group">
            <div className="aspect-video bg-gray-100 relative flex items-center justify-center">
                <div>
                    <iframe id="js_video_iframe" src="
                      " className="absolute top-0 left-0 w-full h-full"></iframe>
                    </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                IDI Video
              </h3>
              <p className="text-gray-600">
                Individual demonstration of "I" in a professional context.
              </p>
            </div>
          </div>
          {/* ICE Breaker Group Challenge Video */}
          <div className="bg-white rounded-xl transition-all overflow-hidden group">
            <div className="aspect-video bg-gray-100 relative flex items-center justify-center">
                <div>
                    <iframe id="js_video_iframe" src="https://jumpshare.com/embed/ZwBeY8hd9Hw8NKlz2sXr" className="absolute top-0 left-0 w-full h-full"></iframe>
                    </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Role Reversal Challenge
              </h3>
              <p className="text-gray-600">
                Group activity showcasing collaborative communication skills and team dynamics in action.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-gray-500 text-sm">
            Click on any video player to watch the demonstration
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
