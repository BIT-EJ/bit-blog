import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './styles.css';

export default function Footer () {
    return (
        <footer className={styles.footer}>
          <div className={styles.footerpadding}>
            <div className={styles.sections}>
              <div className={styles.sectionsinfo}>
                <h4>Localizaçao</h4>
                <a href="https://www.unioeste.br/portal/" target="_black"><p>Unioeste | Bloco F | Sala 7</p></a>
                <a href="https://www.google.com/maps/place/Universidade+Estadual+do+Oeste+do+Paraná/@-24.9875937,-53.4507991,15z/data=!4m6!3m5!1s0x94f3d5b13c73c875:0xf16791da90a5c56d!8m2!3d-24.9875937!4d-53.4507991!16s%2Fm%2F0j_60mp?entry=ttu" target="_blank"><p>Endereço: R. Universitária, 1619 - Universitário, Cascavel - PR, 85819-110 </p></a>
                <a><p>Telefone: (45) 3220-3000</p></a>
              </div>
              <div className={styles.sectionsinfo}>
                <h4>Links Úteis</h4>
                <Link to="/"><p>Home</p></Link>
                <Link to="/about"><p>Quem Somos</p></Link>
                <Link to="/services"><p>Serviço</p></Link>
                <Link to="/contact"><p>Contato</p></Link>
              </div>
              <div className={styles.sectionsinfo}>
                <h4>Redes Sociais</h4>
                <p><a href="https://www.instagram.com/bit.empresajunior" target="_blank"><FaInstagram /></a></p>
                <p><a href="https://www.facebook.com/bitempresajunior" target="_blank"><FaFacebookF /></a></p>
                <p><a href="https://www.linkedin.com/company/bitej" target="_blank"><FaLinkedin /></a></p>
                <p><a href="https://github.com/BIT-EJ" target="_blank"><FaGithub /></a></p>
              </div>

              <hr></hr>

              <div className={styles.sectionsbelow}>
                <div className={styles.copyright}>
                  <p>&copy;{new Date().getFullYear()}{' '}<span>Bit. Todos os direitos reservados.</span></p>
                </div>
                {/*<div className={styles.sectionsbelowlinks}>
                                <a href="#terms"><div><p>Termos & Condições</p></div></a>
                                <a href="#privacity"><div><p>Privacidade</p></div></a>
                                <a href="#security"><div><p>Segurança</p></div></a>
                                <a href="#cookie"><div><p>Declaraçao de Cookies</p></div></a>
                </div>*/}
              </div>
            </div>
          </div>
        </footer>
      );
};