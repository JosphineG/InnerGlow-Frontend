import HomeNav from "./HomeNav";
import LandingPage from "./LandingPage";
import Footer from "./Footer";

import About from "./About";
import Community from "./Community";

const Home = () => {
  return (
    <div className="flex flex-col">
      <HomeNav />
      <LandingPage />
      <About />
      <Community />
      <Footer />
    </div>
  );
};

export default Home;
