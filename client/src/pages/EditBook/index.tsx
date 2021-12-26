import BookForm from '../../components/BookForm';
import MainLayout from '../../layouts/Main';
import { useHistory, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ROUTES } from '../../lib/routes';
import { booksBookEdit } from '../../store/books/booksSlice';

const EditBookPage = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const book = useAppSelector((state) =>
    state.books.books.find((book) => book.id === id)
  );

  if (!book) {
    history.push('/');
    return null;
  }

  return (
    <MainLayout>
      <BookForm
        title='Edit Book'
        submitButtonTitle='Save'
        onSubmit={(values) => {
          dispatch(booksBookEdit({ ...values, id: book.id }));
          history.push(ROUTES[0].path);
        }}
        initialValues={book}
      />
    </MainLayout>
  );
};

export default EditBookPage;
