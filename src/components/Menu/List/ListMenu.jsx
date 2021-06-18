import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core';
import {
    CloudQueue,
    Deck
}from '@material-ui/icons';


const ListMenu = () => {
    return (
        <div>
            <List component='nav'>
                <ListItem button>
                    <ListItemIcon>
                        <CloudQueue/>
                    </ListItemIcon>
                    <ListItemText primary='Primer Elemento'/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Deck/>
                    </ListItemIcon>
                    <ListItemText primary='nav'/>
                </ListItem>
                <Divider/>
            </List> 
        </div>
    )
}

export default ListMenu;
