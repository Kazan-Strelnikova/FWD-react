import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import MainPage from '../pages/MainPage/MainPage';
import ComicPage from '../pages/ComicPage/ComicPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <MainPage /> },
      { path: 'comic', element: <ComicPage /> },
    ],
  },
]);
