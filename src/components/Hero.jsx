import AmazonLogo from "../assets/amazon.png";
import FlipkartLogo from "../assets/flipkart.png";
import HeroImage from "../assets/hero-img.png";

const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src={AmazonLogo} alt="amazon-logo" />
            <img src={FlipkartLogo} alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={HeroImage} alt="hero-image" />
      </div>
    </main>
  );
};

export default Hero;
