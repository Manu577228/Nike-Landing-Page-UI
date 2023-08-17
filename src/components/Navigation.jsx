import BrandLogo from "../assets/brand_logo.png";

const Navigation = () => {
  return (
    <div>
      <nav className="container">
        <div>
          <img src={BrandLogo} alt="logo" />
        </div>
        <ul>
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default Navigation;
