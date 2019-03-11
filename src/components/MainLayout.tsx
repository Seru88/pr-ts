import * as React from 'react';

import { AppBar, Grid, Typography, Toolbar } from '@material-ui/core';

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = (props: IMainLayoutProps) => {
  const { children } = props;
  return (
    <Grid container={true} style={{ padding: 0 }}>
      <Grid item={true} xs={12}>
        <AppBar
          component="header"
          position="fixed" /* style={{height: '10vh'}} */
        >
          <Toolbar>
            <Typography
              variant="h3"
              align="center"
              color="inherit" /* style={{marginTop: 8}} */
            >
              Post Reality
            </Typography>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item={true} xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};

export default MainLayout;
