import './AboutMe.css';
import Illustration from '../../images/illustration1.svg';
import Samsung from '../../images/samsung.svg';
import Yandex from '../../images/yandex.svg';
import Inno from '../../images/inno.svg';

export default function AboutMe() {
  return (
    <section id="about_me">
      <h2 className="header2">About me</h2>
      <img id="ill1" src={Illustration} alt="laptop and notebooks" />
      <p className="paragraph align_left">
        Hello! I'm Kira, a dedicated student at Innopolis University with a
        passion for UX/UI design and both frontend and backend development. I am
        enthusiastic about creating user-friendly and visually appealing web
        applications that enhance user experiences.
      </p>
      <p className="paragraph align_right">
        My journey began in high school at Yandex Lyceum, where I delved into
        Python and web development. It was a thrilling time, marked by new
        discoveries and challenges. Later, at Samsung IT School, I honed my
        skills in Java and Android app development, facing both difficulty and
        reward. Now, at Innopolis University, I'm further refining my abilities
        as a UX/UI designer while venturing into the realm of frontend web
        development.{' '}
      </p>
      <img id="yandex" src={Yandex} alt="yandex" />
      <img id="samsung" src={Samsung} alt="samsung" />
      <img id="inno" src={Inno} alt="Innopolis university" />
    </section>
  );
}
