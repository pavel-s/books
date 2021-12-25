import { CssBaseline, ThemeProvider } from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch } from './hooks/redux';
import { theme } from './lib/theme';
import BooksPage from './pages/Books';
import { loadTestBooks } from './store/books/booksSlice';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadTestBooks());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BooksPage />
    </ThemeProvider>
  );
};

export default App;
