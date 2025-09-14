import "./App.css"
import Footer from "./components/footer";
import Header from "./components/Header";
import SwotSection from "./components/swot";
import TopicsSection from "./components/topic";
import VideoSection from "./components/Video";


const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <VideoSection />
      <TopicsSection />
      <SwotSection />
      <Footer />
    </div>
  );
};

export default App;