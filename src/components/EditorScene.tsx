import 'aframe';
import 'aframe-particle-system-component';

import { Entity, Scene } from 'aframe-react';
import * as React from 'react';

import {
  Button,
  createStyles,
  Paper,
  Theme,
  Typography,
  withStyles,
} from '@material-ui/core';

import { ITargetState } from '../states/TargetState';

interface IEditorProps {
  classes: any;
}

class EditorState {
  public target: ITargetState;
}

interface IStateAction {
  type: string;
  payload?: any;
}

const reducer = (state: EditorState, action: IStateAction) => {
  switch (action.type) {
    case 'add_target_to_scene':
      return {
        ...state,
        target: {
          transform: {
            postion: {x:0,y:0,z:-5},
            rotation: {x:0,y:0,z:0},
            scale: {x:1,y:1,z:1},
          },
          physcialWidth: 10,
          assset: {
            fileName: '',
            uuid: '',
            source: '',
          }
        },
      };
    case 'change_color':
      return {
        ...state,
        target: {
          ...state.target,
          asset: { ...state.target.asset, color: action.payload.color },
        },
      };
    default:
      throw new Error();
  }
};

const styles = (theme: Theme) =>
  createStyles({
    main: {
      backgroundColor: 'cyan',
    },
    leftMenu: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: 80,
      left: 0,
      width: 225,
      height: 500,
      margin: 20,
      padding: '25px 10px',
      justifyContent: 'flex-start',
      zIndex: 10,
    },
    rightMenu: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: 80,
      right: 0,
      width: 225,
      height: 500,
      margin: 20,
      padding: '25px 10px',
      justifyContent: 'flex-start',
      zIndex: 10,
    },
  });

const EditorScene = withStyles(styles)((props: IEditorProps) => {
  const { classes } = props;
  const [state, dispatch] = React.useReducer(reducer, new EditorState());
  const handleAddTarget = (ev: React.BaseSyntheticEvent) => {
    dispatch({ type: 'add_target_to_scene', payload: { msg: 'hi' } });
  };
  const handleChangeColor = (ev: React.BaseSyntheticEvent) => {
    const color = ev.target.innerHTML.toLowerCase();
    dispatch({ type: 'change_color', payload: { color } });
  };
  console.log(state.target);
  return (
    <>
      <Paper elevation={6} className={classes.leftMenu}>
        <Typography variant="h5" align="center">
          Add Element
        </Typography>
        <Button onClick={handleAddTarget} color="primary" variant="outlined">
          Add Target
        </Button>
        <Button onClick={handleChangeColor} color="primary" variant="outlined">
          Red
        </Button>
        <Button onClick={handleChangeColor} color="primary" variant="outlined">
          Green
        </Button>
        <Button onClick={handleChangeColor} color="primary" variant="outlined">
          Blue
        </Button>
      </Paper>
      <Paper elevation={6} className={classes.rightMenu}>
        <Typography variant="h5" align="center">
          Add Element
        </Typography>
        <Button onClick={handleChangeColor} color="primary" variant="outlined">
          Red
        </Button>
        <Button onClick={handleChangeColor} color="primary" variant="outlined">
          Green
        </Button>
        <Button onClick={handleChangeColor} color="primary" variant="outlined">
          Blue
        </Button>
      </Paper>
      <Scene embedded={true} vr-mode-ui="enabled: false">
        {state.target && (
          <Entity
            geometry={{ primitive: 'box' }}
            material={{ color: state.target.asset.color }}
            position={state.target.transform.position}
          />
        )}
      </Scene>
    </>
  );
});

export default EditorScene;
