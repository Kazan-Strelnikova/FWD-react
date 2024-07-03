import './Profile.css';
import ProfilePhoto from '../../images/Kira_profile_photo.png';

export default function Profile() {
  return (
    <section className="profile">
      <h1 className="main_name">Kira Strelnikova</h1>
      <img className="main_photo" src={ProfilePhoto} alt="Author" />
    </section>
  );
}
