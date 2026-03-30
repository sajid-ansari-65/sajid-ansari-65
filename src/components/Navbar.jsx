import "./styles/Navbar.css";
import HoverLinks from "./HoverLinks";

const Navbar = () => {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <a href="#" className="navbar-brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        SA
      </a>
      <nav>
        <ul className="nav-list">
          <li onClick={(e) => handleNavClick(e, "about")}>
            <HoverLinks text="ABOUT" />
          </li>
          <li onClick={(e) => handleNavClick(e, "work")}>
            <HoverLinks text="WORK" />
          </li>
          <li onClick={(e) => handleNavClick(e, "contact")}>
            <HoverLinks text="CONTACT" />
          </li>
        </ul>
      </nav>
      <a
        href="https://www.linkedin.com/in/iamsajidansari/"
        target="_blank"
        rel="noreferrer"
        className="navbar-connect"
      >
        <HoverLinks text="CONNECT" />
        <div className="navbar-connect-circle"></div>
      </a>
    </header>
  );
};

export default Navbar;
