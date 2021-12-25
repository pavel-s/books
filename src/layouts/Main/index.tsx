import { AppBar, Box, Container, styled, Toolbar } from '@mui/material';
import { ComponentType, FC } from 'react';
import AppBreadcrumbs from './Breadcrumbs';

const MainContainer = styled(Container)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.lg,
  [theme.breakpoints.down('sm')]: {
    padding: 0,
  },
}));

interface MainLayoutProps {
  AppbarRight?: ComponentType;
}

const MainLayout: FC<MainLayoutProps> = ({ AppbarRight, children }) => {
  return (
    <>
      <AppBar position='static'>
        <MainContainer>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <AppBreadcrumbs />
            {AppbarRight && <AppbarRight />}
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
