import { Link } from 'react-router-dom';
import avatar from '../../images/avatar.jpeg';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (
    <div className="aboutMe">
      <p className="title">Студент</p>
      <div className="aboutMe__content">
        <div>
          <p className="aboutMe__name">Виталий</p>
          <p className="aboutMe__skills">Фронтенд-разработчик, 30 лет</p>
          <p className="aboutMe__description">Я родился и живу в Саратове, закончил факультет
            экономики
            СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года
            работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <Link to="./" className="aboutMe__github">Github</Link>
        </div>
        <img src={avatar} alt="avatar" className="aboutMe__avatar"/>
      </div>
      <Portfolio/>
    </div>
  );
}

export default AboutMe;
