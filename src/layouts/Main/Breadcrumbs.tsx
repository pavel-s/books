import { Breadcrumbs, Link, Typography } from '@mui/material';
import { ComponentPropsWithRef } from 'react';
import { useLocation, Link as RouterLink, LinkProps } from 'react-router-dom';

const breadcrumbNameMap: { [key: string]: string } = {
  '/add': 'Add',
  '/edit': 'Edit',
};

const LinkRouter = (
  props: ComponentPropsWithRef<typeof Link> & { to: LinkProps['to'] }
) => <Link {...props} component={RouterLink} />;

const AppBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // hide slug when on edit route
  let isEditRoute = false;

  return (
    <Breadcrumbs>
      <LinkRouter underline='hover' color='inherit' to='/'>
        Books
      </LinkRouter>

      {pathnames.map((value, index) => {
        let last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const text = breadcrumbNameMap[to] ?? value;

        if (isEditRoute) {
          return null;
        }

        if (value === 'edit') {
          isEditRoute = true;
          last = true;
        }

        return last ? (
          <Typography color='text.primary' key={to}>
            {text}
          </Typography>
        ) : (
          <LinkRouter underline='hover' color='inherit' to={to} key={to}>
            {text}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
};

export default AppBreadcrumbs;
