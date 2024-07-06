import '../styles/Footer.css';
import ContactLink from './ContactLink';
import Telegram from '../public/images/ic_baseline-telegram.svg';
import Github from '../public/images/mdi_github.svg';
import Email from '../public/images/ic_baseline-alternate-email.svg';

export default function Footer() {
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
      <p className="signiture">Made by Kira</p>
    </footer>
  );
}
