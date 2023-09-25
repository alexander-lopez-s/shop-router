import logo from "../assets/logo.webp";

const Home = () => {
  return (
    <div className="home">
      <img alt="logo" src={logo} className="logo" />
      <h1>Welcome to CVS Florida Store</h1>
      <p>Explore a wide range of products at affordable prices.</p>
      <section className="store-info">
        <h2>Visit us!</h2>
        <address>
          123 Main Street, Miami, FL 33101
          <br />
          Opening Hours: Mon-Sat 9 AM - 8 PM, Sun 10 AM - 6 PM
          <br />
          Phone: (123) 456-7890
        </address>
      </section>
    </div>
  );
};

export default Home;
