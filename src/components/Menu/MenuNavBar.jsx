import React from 'react';
import ListMenu from './List/ListMenu'
import {
  makeStyles,
  Drawer,
  Divider
} from '@material-ui/core';

const drawerWidth = 240;

const style = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar
}));

const MenuNavBar = (props) => {
  const classes = style()

  return (
    <Drawer 
    className={classes.drawer}
    classes={{
      paper: classes.drawerPaper
    }}
    anchor="left"
    variant={props.variant}
    open={props.open}
    onClose={props.onClose ? props.onClose : null}
    >
      <div className={classes.toolbar}>Menu</div>
      <Divider/>
      <ListMenu/>
    </Drawer>
  );
};

export default MenuNavBar;
