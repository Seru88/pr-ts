import * as React from 'react';

import {
  createStyles,
  Grid,
  // Paper,
  Theme,
  // Typography,
  withStyles,
} from '@material-ui/core';

import EditorScene from '../components/EditorScene';
import MainLayout from '../components/MainLayout';

const styles = (theme: Theme) =>
  createStyles({
    sceneContainer: {
      border: `4px solid ${theme.palette.primary.main}`,
      height: '100vh',
      width: '100%',
    },
  });

interface IAppProps {
  classes: any;
}

const App = withStyles(styles)((props: IAppProps) => {
  const { classes } = props;
  return (
    <div className="App">
      <MainLayout>
        <Grid container={true} spacing={0} >
          <Grid item={true} xs={12} >
            <div className={classes.sceneContainer}>
              <EditorScene />
            </div>
          </Grid>
        </Grid>
      </MainLayout>
    </div>
  );
});

export default App;
