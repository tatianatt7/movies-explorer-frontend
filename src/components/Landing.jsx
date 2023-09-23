import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';

const Landing = () => {
  return (
    <>
      <Promo loggedIn={false} />
      <AboutProject />
      <Techs />
      <AboutMe />
    </>
  );
};

export default Landing;
