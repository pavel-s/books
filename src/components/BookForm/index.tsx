import { Container, Paper, Typography } from '@mui/material';
import { FC } from 'react';
import { Form, FormProps } from './Form';

const BookForm: FC<FormProps & { title: string }> = ({
  title,
  initialValues,
  submitButtonTitle,
  onSubmit,
}) => {
  return (
    <Container maxWidth='sm' sx={{ mt: 2 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant='h5' component='h2' mb={4}>
          {title}
        </Typography>
        <Form
          initialValues={initialValues}
          onSubmit={onSubmit}
          submitButtonTitle={submitButtonTitle}
        />
      </Paper>
    </Container>
  );
};

export default BookForm;
