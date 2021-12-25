import { FC } from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useAppDispatch } from '../../hooks/redux';
import { booksBookRemove } from '../../store/books/booksSlice';
import { TBook } from '../../store/books/types';

const CARD_IMAGE_WIDTH = 145;
const CARD_IMAGE_HEIGHT = 205;
const CARD_CONTENT_WIDTH = 220;

export const CARD_WIDTH = CARD_IMAGE_WIDTH + CARD_CONTENT_WIDTH;

const BookCard: FC<TBook> = ({ id, title, author, description, image }) => {
  const dispatch = useAppDispatch();

  const handleRemoveBook = () => {
    dispatch(booksBookRemove(id));
  };

  return (
    <Card
      sx={{
        display: 'inline-flex',
        flexShrink: 0,
        height: CARD_IMAGE_HEIGHT,
      }}
    >
      {image && (
        <Box width={CARD_IMAGE_WIDTH}>
          <CardMedia
            component='img'
            height={CARD_IMAGE_HEIGHT}
            image={image}
            alt={title}
          />
        </Box>
      )}
      <Box
        sx={{
          width: CARD_CONTENT_WIDTH,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <CardHeader title={title} subheader={author} sx={{ pt: 1 }} />
        <CardContent sx={{ flexGrow: 1, py: 0, overflow: 'auto' }}>
          <Typography variant='body2'>{description}</Typography>
        </CardContent>
        <CardActions>
          <Tooltip title='remove book'>
            <IconButton aria-label='remove book' onClick={handleRemoveBook}>
              <DeleteForeverIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Box>
    </Card>
  );
};

export default BookCard;
