import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import HiddenList from './layout/Hidden';

const ListNavBar = () => {
  return (
    <div>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <MenuIcon />
          </ListItemIcon>
          <ListItemText primary="Aqui el contenido" />
        </ListItem>
      </List>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <MenuIcon />
          </ListItemIcon>
          <ListItemText primary="Aqui el contenido" />
        </ListItem>
      </List>
      <Divider />
      <HiddenList/>
    </div>
  );
};

export default ListNavBar;
