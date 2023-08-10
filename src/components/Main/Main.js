import React from 'react';
import Promo from '../Promo/Promo';
import LandingNavigation from '../LandingNavigation/LandingNavigation';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';

function Main() {
  let  header = document.querySelector('.header');
  if(header && header.classList.contains('header_black')) header.classList.remove('header_black');
  return (

    <main>
       <Promo/>
       <LandingNavigation/>
       <AboutProject/>
       <Techs/>
      <AboutMe/>
    </main>
  );
}

export default Main;
