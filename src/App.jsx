import HeroSection from "./components/HeroSection";
import Navbar from"./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Buttons from "./components/Buttons";
import Container from "./components/Container";
import Logos from "./components/Logos";
import FeatureSection from "./components/FeatureSection";
import TestimonialSection from "./components/TestimonialSection";
import QuestionSection from "./components/QuestionSection";
import JoiningSection from "./components/JoiningSection";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
const App = () => {
  return (
    <CartProvider>
    <Navbar />
    <HeroSection/>
    <Buttons/>
    <Container/>
    <Logos/>
    <FeatureSection/>
    <TestimonialSection/>
    <QuestionSection/>
    <BlogSection/>
    <JoiningSection/>
    <Footer/>
    </CartProvider>
  );
};

export default App
