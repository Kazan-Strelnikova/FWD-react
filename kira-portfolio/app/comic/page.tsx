import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';
import styles from './comic.module.css';

interface Comic {
  alt: string;
  day: number;
  img: string;
  link: string;
  month: number;
  news: string;
  num: number;
  safe_title: string;
  title: string;
  transcript: string;
  year: number;
}

class FetchIdError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FetchIdError';
  }
}

class FetchComicError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FetchComicError';
  }
}

async function getComic() {
  const email = 'k.strelnikova@innopolis.university';
  const linkEmail = `https://fwd.innopolis.university/api/hw2?${new URLSearchParams({ email })}`;

  try {
    const response = await fetch(linkEmail);
    if (!response.ok) {
      throw new FetchIdError('Fetching the ID has failed');
    }
    const id = await response.text();
    const linkId = `https://fwd.innopolis.university/api/comic?id=${id}`;
    const responseComic = await fetch(linkId);
    if (!responseComic.ok) {
      throw new FetchComicError('Fetching the Comic has failed');
    }
    const comic: Comic = await responseComic.json();

    return comic;
  } catch (error) {
    console.error('Error fetching comic data:', error);
    return {
      notFound: true,
    };
  }
}

export default async function ComicPage() {
  const comic: Comic = (await getComic()) as Comic;
  return (
    <section id={styles.comic}>
      <div className={styles.comic_container}>
        <h1 id={styles.comic_title}>{comic.safe_title}</h1>
        <h2 id={styles.comic_date}>
          {new Date(
            comic.year,
            comic.month - 1,
            comic.day
          ).toLocaleDateString()}
        </h2>
        <p id={styles.comic_released}>
          {'Released ' +
            formatDistanceToNow(
              new Date(comic.year, comic.month - 1, comic.day)
            ) +
            ' ago'}
        </p>
        <Image
          id={styles.comic_image}
          src={comic.img}
          alt={comic.alt}
          width={800}
          height={400}
        />
      </div>
    </section>
  );
}
