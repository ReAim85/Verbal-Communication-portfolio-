import heroImage from "../assets/PFP.jpeg";

const Header = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-8">
          <div className="relative">
            <img
              src={heroImage}
              alt="Profile"
              className="w-30 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-blue-500 shadow-xl"
            />
            <div className="absolute -bottom-2 right-5 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
          </div>
          
          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Vishal Jha
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-blue-600 font-semibold mb-4">
              E-Portfolio for Professional Communication for Engineers
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl">
              Showcasing comprehensive understanding and practical application of verbal and non-verbal communication principles through coursework demonstrations and analysis.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;