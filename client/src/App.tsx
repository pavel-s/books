import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './lib/theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ROUTES } from './lib/routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          {ROUTES.map((route, idx) => (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
              key={idx}
            />
          ))}
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
