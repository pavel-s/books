import { Box, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { FC } from 'react';
import * as yup from 'yup';
import { TBook } from '../../store/books/types';

const validationSchema = yup.object({
  title: yup.string().required('Enter Book title'),
  author: yup.string().required('Enter Book author'),
  description: yup.string(),
  image: yup.string(),
});

export interface FormProps {
  initialValues?: Omit<TBook, 'id'>;
  onSubmit: (values: Omit<TBook, 'id'>) => void;
  submitButtonTitle: string;
}

export const Form: FC<FormProps> = ({
  initialValues,
  onSubmit,
  submitButtonTitle,
}) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      description: '',
      image: '',
      ...initialValues,
    },
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={{ '& > *:not(last-child)': { mb: 2 } }}>
        <TextField
          fullWidth
          id='title'
          name='title'
          label='title'
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <TextField
          fullWidth
          id='author'
          name='author'
          label='author'
          value={formik.values.author}
          onChange={formik.handleChange}
          error={formik.touched.author && Boolean(formik.errors.author)}
          helperText={formik.touched.author && formik.errors.author}
        />
        <TextField
          fullWidth
          id='description'
          name='description'
          label='description'
          value={formik.values.description}
          onChange={formik.handleChange}
          multiline
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
        />
        <TextField
          fullWidth
          id='image'
          name='image'
          label='image url'
          value={formik.values.image}
          onChange={formik.handleChange}
          error={formik.touched.image && Boolean(formik.errors.image)}
          helperText={formik.touched.image && formik.errors.image}
        />

        <Button color='primary' variant='contained' fullWidth type='submit'>
          {submitButtonTitle}
        </Button>
      </Box>
    </form>
  );
};
