import AddBookPage from '../pages/AddBook';
import BooksPage from '../pages/Books';
import EditBookPage from '../pages/EditBook';

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
  {
    path: '/edit/:id',
    component: EditBookPage,
  },
];
