import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <p className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__content-group">
        <p className="footer__year">© 2020</p>
        <div className="footer__links">
          <Link to="/" className="footer__link">Яндекс.Практикум</Link>
          <Link to="/" className="footer__link">Github</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
