import { Features } from "../components/landing/Features";
import { Footer } from "../components/landing/Footer";
import { Hero } from "../components/landing/Hero";

const Home: React.FC = () => {
  return (
    <main className="">
      <Hero />
      <Features />
      <Footer />
    </main>
  );
};
export default Home;
