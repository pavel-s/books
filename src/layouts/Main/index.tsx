import {
  AppBar,
  Box,
  Container,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import { FC } from 'react';

const MainContainer = styled(Container)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.lg,
  [theme.breakpoints.down('sm')]: {
    padding: 0,
  },
}));

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <AppBar position='static'>
        <MainContainer>
          <Toolbar>
            <Typography variant='h6' noWrap component='h1'>
              Books List
            </Typography>
          </Toolbar>
        </MainContainer>
      </AppBar>
      <MainContainer maxWidth='lg'>
        <Box component='main'>{children}</Box>
      </MainContainer>
    </>
  );
};

export default MainLayout;
