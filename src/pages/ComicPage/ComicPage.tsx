import { useEffect, useState } from 'react';
import './ComicPage.css';
import { formatDistanceToNow } from 'date-fns';

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

export default function ComicPage() {
  const [title, setTitle] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [released, setReleased] = useState<string>('');
  const [source, setSource] = useState<string>('');
  const [alt, setAlt] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const email = 'k.strelnikova@innopolis.university';
  const linkEmail = `https://fwd.innopolis.university/api/hw2?${new URLSearchParams({ email })}`;

  useEffect(() => {
    const ComicFetch = async () => {
      setLoading(true);
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
        setTitle(comic.safe_title);
        setSource(comic.img);
        setAlt(comic.alt);
        const ComicDate = new Date(comic.year, comic.month - 1, comic.day);
        setDate(ComicDate.toLocaleDateString());
        setReleased('Released ' + formatDistanceToNow(ComicDate) + ' ago');
      } catch (error) {
        if (error instanceof FetchIdError || error instanceof FetchComicError) {
          console.error(error.message);
        } else {
          console.error('An unexpected error occurred:', error);
        }
      } finally {
        setLoading(false);
      }
    };

    ComicFetch();
  }, [linkEmail]);

  return (
    <div className="body">
      <div className="comic-container">
        {loading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        ) : (
          <>
            <h1 id="comic-title">{title}</h1>
            <h2 id="comic-date">{date}</h2>
            <p id="comic-released">{released}</p>
            <img id="comic-image" src={source} alt={alt} />
          </>
        )}
      </div>
    </div>
  );
}
