import { Link } from 'react-router-dom';

function LandingNavigation() {
  return (
    <section className="landing-navigation">
      <Link to="./" className="landing-navigation__link">О проекте</Link>
      <Link to="./" className="landing-navigation__link">Технологии</Link>
      <Link to="./" className="landing-navigation__link">Студент</Link>
    </section>
  );
}

export default LandingNavigation;
