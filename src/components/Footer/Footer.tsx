import './Footer.css';
import ContactLink from '../ContactLink/ContactLink';
import Telegram from '../../images/ic_baseline-telegram.svg';
import Github from '../../images/mdi_github.svg';
import Email from '../../images/ic_baseline-alternate-email.svg';
import { useNavigate } from 'react-router';

export default function Footer() {
  const navigate = useNavigate();

  function navigateToComic() {
    navigate('/comic');
  }
  return (
    <footer id="footer" className="footer">
      <ContactLink
        id="tg-link"
        reference="https://t.me/Kira354"
        source={Telegram}
        alt="Telegram"
      />
      <ContactLink
        id="gh-link"
        reference="https://github.com/Kazan-Strelnikova"
        source={Github}
        alt="GitHub"
      />
      <ContactLink
        id="email"
        reference="mailto:strelnikova.kira354@gmail.com"
        source={Email}
        alt="Telegram"
      />
      <button id="comic" onClick={navigateToComic}>
        Do you wanna see a comic?
      </button>
      <p className="signiture">Made by Kira</p>
    </footer>
  );
}
