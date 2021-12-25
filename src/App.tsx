import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './lib/theme';
import BooksPage from './pages/Books';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BooksPage />
    </ThemeProvider>
  );
};

export default App;
