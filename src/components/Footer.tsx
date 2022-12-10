import logo from '../logo.svg';

const Footer:React.FC = () => {
  return (
    <footer>
      <section className="footer-up">
        <section className="footer-up-left">
          <h4>Links</h4>
          <p>Other Contact</p>
          <p>Other Portofolio</p>
          <p>Career</p>
        </section>
        <section className="footer-up-middle">
          <h4>Lainnya</h4>
          <p>Experiences</p>
          <p>Other Skills</p>
          <p>Location</p>
        </section>
          <img src={logo} alt="" />
      </section>
      <section className="footer-down">
        <p>Copyrighted By RavCro</p>
        <hr />
        <p>Designed By <strong><a href="https://www.github.com/mbilly01">Muhammad Jibril Salsabilly</a></strong></p>
      </section>
    </footer>
  );
}

export default Footer;