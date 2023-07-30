import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <div className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <div className="portfolio__links">
        <div className="portfolio__link-group">
          <Link to="./" className="portfolio__link-title">
            Статичный сайт
          </Link>
          <button className="portfolio__link-button"/>
        </div>
        <div className="portfolio__link-group">
          <Link to="./" className="portfolio__link-title">
            Адаптивный сайт
          </Link>
          <button className="portfolio__link-button"/>
        </div>
        <div className="portfolio__link-group">
          <Link to="./" className="portfolio__link-title">
            Одностраничное приложение
          </Link>
          <button className="portfolio__link-button"/>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
