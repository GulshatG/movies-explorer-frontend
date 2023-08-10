import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <div className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <div className="portfolio__links">
        <div className="portfolio__link-group">
          <Link to="https://github.com/GulshatG/mesto"
                className="portfolio__link-title animate-opacity">
            Статичный сайт
          </Link>
          <Link className="portfolio__link-button animate-opacity"
                to={'https://github.com/GulshatG/mesto'}/>
        </div>
        <div className="portfolio__link-group">
          <Link to="https://github.com/GulshatG/react-mesto-api-full-gha"
                className="portfolio__link-title animate-opacity">
            Адаптивный сайт
          </Link>
          <Link to="https://github.com/GulshatG/react-mesto-api-full-gha"
                className="portfolio__link-button animate-opacity"/>
        </div>
        <div className="portfolio__link-group">
          <Link to="https://github.com/GulshatG/how-to-learn"
                className="portfolio__link-title animate-opacity">
            Одностраничное приложение
          </Link>
          <Link to="https://github.com/GulshatG/how-to-learn"
                className="portfolio__link-button animate-opacity"/>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
