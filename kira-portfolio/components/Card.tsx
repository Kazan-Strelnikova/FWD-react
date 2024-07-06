import '../styles/Card.css';
import GoTo from '../public/images/solar_round-arrow-right-up-broken.svg';
import Image from 'next/image';

interface CardProps {
  title: string;
  source: string;
  description: string;
  reference: string;
}
export default function Card(props: CardProps) {
  return (
    <li className="card">
      <h3 className="card_title">{props.title}</h3>
      <div className="card_content">
        <Image
          className="card_img"
          src={props.source}
          alt={props.title + ' screenshots'}
        />
        <div className="card_description">
          <p className="paragraph card_text">{props.description}</p>
          <a
            href={props.reference}
            className="card_link"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={GoTo} alt="go to" />
          </a>
        </div>
      </div>
    </li>
  );
}
