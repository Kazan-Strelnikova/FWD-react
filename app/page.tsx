import styles from './page.module.css';
import ProfilePhoto from '../public/images/Kira_profile_photo.png';
import Image from 'next/image';

export default function Profile() {
  return (
    <section className={styles.profile}>
      <h1 className={styles.main_name}>Kira Strelnikova</h1>
      <Image className={styles.main_photo} src={ProfilePhoto} alt="Author" />
    </section>
  );
}
