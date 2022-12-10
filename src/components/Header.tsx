import logo from '../logo.svg';

const Header:React.FC = () => {
  return (
    <header>
      <section className="image-text">
        <img src={logo} alt="" />
        <h1>RavCro</h1>
      </section>
      <nav>
        <a href="#">Portofolios</a>
        <a href="#">Future Project</a>
        <a href="#">Profile</a>
      </nav>
    </header>
  );
}

export default Header;