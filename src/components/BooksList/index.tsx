import { Box } from '@mui/material';
import BookCard, { CARD_WIDTH } from './BookCard';
import { testBooks } from '../../lib/testBooks';
import { useAppSelector } from '../../hooks/redux';

const BooksList = () => {
  const books = useAppSelector((state) => state.books.books);

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

/*
     sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, ${CARD_WIDTH}px)`,
        gridTemplateRows: 'auto',
        gap: 2,
        padding: 1,
      }}


*/
