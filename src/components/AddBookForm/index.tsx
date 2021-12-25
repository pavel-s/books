import { Container, Paper, Typography } from '@mui/material';
import { Form } from './Form';

const AddBookForm = () => {
  return (
    <Container maxWidth='sm' sx={{ mt: 2 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant='h5' component='h2' mb={4}>
          Add new book to list
        </Typography>
        <Form />
      </Paper>
    </Container>
  );
};

export default AddBookForm;
