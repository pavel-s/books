import AddBookPage from '../pages/AddBook';
import BooksPage from '../pages/Books';

export const ROUTES = [
  {
    path: '/',
    exact: true,
    component: BooksPage,
  },
  {
    path: '/add',
    component: AddBookPage,
  },
];
