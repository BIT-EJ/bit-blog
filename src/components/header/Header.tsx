import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.css";
import logo from "../../img/favicon-32x32.png";
import { AiOutlineMenu } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export default function Header () {
      const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

      const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen);
      };
    
      const closeMenu = (): void => {
        setIsMenuOpen(false);
      };
    
      return (
        <header>
          <nav className={`${styles.navbar}`}>
            <div className={styles.logo}>
              <Link to="/" onClick={closeMenu}>
                <img src={logo} alt="Bit-auction" />
              </Link>
            </div>
            <div className={`${styles.navlist} ${isMenuOpen ? styles.open : ""}`}>
              <ul>
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/about" onClick={closeMenu}>Quem Somos</Link></li>
                <li><Link to="/services" onClick={closeMenu}>Serviço</Link></li>
                <li><Link to="/contact" onClick={closeMenu}>Contatos</Link></li>
              </ul>
            </div>
            <div className={`${styles.social} ${isMenuOpen ? styles.open : ""}`}>
              <a href="https://www.instagram.com/bit.empresajunior" target="_blank"><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/bitej" target="_blank"><FaLinkedin /></a>
            </div>
            <div className={styles.menuButton} onClick={toggleMenu}>
              <AiOutlineMenu />
            </div>
          </nav>
        </header>
      );
};