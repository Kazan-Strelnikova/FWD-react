import styles from './about.module.css';
import Illustration from '../../public/images/illustration1.svg';
import Samsung from '../../public/images/samsung.svg';
import Yandex from '../../public/images/yandex.svg';
import Inno from '../../public/images/inno.svg';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <section id={styles.about_me}>
      <h2 className={styles.header2}>About me</h2>
      <Image id={styles.ill1} src={Illustration} alt="laptop and notebooks" />
      <p className={`${styles.paragraph} ${styles.align_left}`}>
        Hello! I&apos;m Kira, a dedicated student at Innopolis University with a
        passion for UX/UI design and both frontend and backend development. I am
        enthusiastic about creating user-friendly and visually appealing web
        applications that enhance user experiences.
      </p>
      <p className={`${styles.paragraph} ${styles.align_right}`}>
        My journey began in high school at Yandex Lyceum, where I delved into
        Python and web development. It was a thrilling time, marked by new
        discoveries and challenges. Later, at Samsung IT School, I honed my
        skills in Java and Android app development, facing both difficulty and
        reward. Now, at Innopolis University, I&apos;m further refining my
        abilities as a UX/UI designer while venturing into the realm of frontend
        web development.
      </p>
      <Image id={styles.yandex} src={Yandex} alt="yandex" />
      <Image id={styles.samsung} src={Samsung} alt="samsung" />
      <Image id={styles.inno} src={Inno} alt="Innopolis university" />
    </section>
  );
}
