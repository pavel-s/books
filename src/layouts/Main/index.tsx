import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <AppBar position='static'>
        <Container maxWidth='md'>
          <Toolbar>
            <Typography variant='h6' noWrap component='div'>
              Books List
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth='md'>
        <Box component='main'>{children}</Box>
      </Container>
    </>
  );
};

export default MainLayout;
