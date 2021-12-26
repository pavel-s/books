import { IconButton, Tooltip } from '@mui/material';
import BooksList from '../../components/BooksList';
import MainLayout from '../../layouts/Main';
import AddIcon from '@mui/icons-material/Add';
import { Link as RouterLink } from 'react-router-dom';

const BooksPage = () => {
  return (
    <MainLayout
      AppbarRight={() => (
        <Tooltip title='add new book'>
          <IconButton
            component={RouterLink}
            to='/add'
            aria-label='add new book'
          >
            <AddIcon />
          </IconButton>
        </Tooltip>
      )}
    >
      <BooksList />
    </MainLayout>
  );
};

export default BooksPage;
