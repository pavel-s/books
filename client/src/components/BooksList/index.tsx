import { Box, Paper, Typography, Button } from '@mui/material';
import BookCard from './BookCard';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Link as RouterLink } from 'react-router-dom';
import { loadTestBooks } from '../../store/books/booksSlice';

const BooksList = () => {
  const books = useAppSelector((state) => state.books.books);

  const dispatch = useAppDispatch();

  if (!books.length) {
    const handleTestBooks = () => dispatch(loadTestBooks());
    return (
      <Paper sx={{ p: 2, mt: 2 }}>
        <Typography>
          There is no books here yet. You can{' '}
          <Button variant='text' component={RouterLink} to='/add'>
            add
          </Button>{' '}
          one, or try test{' '}
          <Button variant='text' onClick={handleTestBooks}>
            collection
          </Button>
          .
        </Typography>
      </Paper>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: 1,
        '& > *': {
          mb: 1,
          mr: 1,
        },
      }}
    >
      {books.map((book, idx) => (
        <BookCard {...book} key={idx} />
      ))}
    </Box>
  );
};

export default BooksList;
