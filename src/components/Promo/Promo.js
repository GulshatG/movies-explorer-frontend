import landingLogo from '../../images/landing-logo.svg';

function Promo() {
  return (
    <section className="promo">
      <img src={landingLogo} alt="Practicum logo"
           className="promo__image"/>
      <p className="promo__text">Учебный проект студента факультета
        Веб-разработки.</p>
    </section>
  );
}

export default Promo;
