import BookForm from '../../components/BookForm';
import MainLayout from '../../layouts/Main';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { ROUTES } from '../../lib/routes';
import { booksBookAdd } from '../../store/books/booksSlice';

const AddBookPage = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  return (
    <MainLayout>
      <BookForm
        title='Add new book to list'
        submitButtonTitle='Add'
        onSubmit={(values) => {
          dispatch(booksBookAdd(values));
          history.push(ROUTES[0].path);
        }}
      />
    </MainLayout>
  );
};

export default AddBookPage;
