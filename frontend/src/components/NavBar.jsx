import React, { useState } from "react";
import { Link } from "react-router-dom";
// Assuming you will also modify this SASS file to include new colors

function NavBar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => setShowLinks(!showLinks);
  const handleCloseNavbar = () => setShowLinks(false);

  return (
    <div className={`${styles["block-nav"]} navbarWrapper`}>
      <div className={`${styles["logo-mobile"]} title`}>
        <Link to="/" onClick={handleCloseNavbar}>
          <img
            className={`${styles["img-logo-mobile"]} coverImg`}
            src="../src/assets/Images/logo-no-background.png"
            alt="Logo for mobile"
          />
        </Link>
      </div>
      <nav
        className={`${styles.navbar} ${
          showLinks ? styles["show-nav"] : styles["hide-nav"]
        } loginContainer`}
      >
        <ul className={`${styles["nav-links"]} info`}>
          {/* Other list items as in your original code */}
        </ul>
        <button
          className={`${styles["nav-burger"]} loginButton`}
          type="button"
          onClick={handleShowLinks}
        >
          <span className={styles.burgerBar} />
        </button>
      </nav>
    </div>
  );
}

export default NavBar;
