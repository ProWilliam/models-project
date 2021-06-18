import React from "react";
import NavBar from './Navbar';
import { makeStyles } from "@material-ui/core";
import theme from '../../config/themeConfig';

const style = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
}));

const Navigation = () => {
  const classes = style();

  return (
    <div className={classes.root}>
        <NavBar/>
        <div>
            <div className={classes.toolbar}/>
            contenido
        </div>
    </div>
  );
};

export default Navigation;
