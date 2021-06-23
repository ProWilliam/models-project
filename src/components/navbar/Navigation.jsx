import React from "react";
import NavBar from "./Navbar";
import MenuNavBar from "../Menu/MenuNavBar";
import { makeStyles, Hidden } from "@material-ui/core";

const style = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  }
}));

const Navigation = () => {

  const classes = style();
  const [opened, setOpened] = React.useState(false);

  const openAction = () => setOpened(!opened);

  return (
    <div className={classes.root}>
      <NavBar openAction={openAction}/>
      <Hidden xsDown>
        <MenuNavBar 
        variant='permanent'
        open={true}
        />
      </Hidden>
      <Hidden smUp>
        <MenuNavBar
          variant='temporary'
          open={opened}
          onClose={openAction}
        />
      </Hidden>
      <div className={classes.content}>
        <div className={classes.toolbar}/>
        contenedor
      </div>
    </div>  
  );
};

export default Navigation;
