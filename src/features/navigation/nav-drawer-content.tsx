import {
  Divider,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
  Toolbar,
} from '@material-ui/core';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { logoutThunk } from '../auth/auth-thunk';

const useStyles = makeStyles((theme: Theme) => ({
  contrastPrimary: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
    '&.Mui-selected': {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.background.default,
    },
  },
  listItemRoot: {
    color: theme.palette.primary.contrastText,
    // '&.Mui-selected': {
    //   color: theme.palette.secondary.main,
    // },
  },
  listItemIconRoot: {
    color: 'inherit',
  },
}));

export function NavDrawerContent(): JSX.Element {
  const classes = useStyles();
  const dispatch = useDispatch();

  type PageSlug = 'transfers' | 'search' | 'rss' | 'settings';
  const history = useHistory();
  const match = useRouteMatch<{ pageSlug: PageSlug }>('/:pageSlug');
  const pageSlug = match?.params.pageSlug;

  const handleClose = () => {};

  const handleItemClick = (main: string) => {
    history.push(main);
    handleClose();
  };

  return (
    <List disablePadding>
      <Hidden xsDown>
        <Toolbar />
      </Hidden>

      <ListItem
        button
        onClick={() => handleItemClick('/transfers')}
        selected={pageSlug === 'transfers'}
        classes={{ root: classes.listItemRoot }}
      >
        <ListItemIcon classes={{ root: classes.listItemIconRoot }}>
          <ImportExportIcon />
        </ListItemIcon>
        <ListItemText primary="Transfers" />
      </ListItem>

      <ListItem
        button
        onClick={() => handleItemClick('/search')}
        selected={pageSlug === 'search'}
        classes={{ root: classes.listItemRoot }}
      >
        <ListItemIcon classes={{ root: classes.listItemIconRoot }}>
          <SearchIcon />
        </ListItemIcon>
        <ListItemText primary="Search" />
      </ListItem>

      <ListItem
        button
        onClick={() => handleItemClick('/rss')}
        selected={pageSlug === 'rss'}
        classes={{ root: classes.listItemRoot }}
      >
        <ListItemIcon classes={{ root: classes.listItemIconRoot }}>
          <RssFeedIcon />
        </ListItemIcon>
        <ListItemText primary="RSS" />
      </ListItem>

      <ListItem
        button
        onClick={() => handleItemClick('/settings')}
        selected={pageSlug === 'settings'}
        classes={{ root: classes.listItemRoot }}
      >
        <ListItemIcon classes={{ root: classes.listItemIconRoot }}>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>

      <Divider />

      <ListItem button onClick={() => dispatch(logoutThunk())} classes={{ root: classes.listItemRoot }}>
        <ListItemIcon classes={{ root: classes.listItemIconRoot }}>
          <MeetingRoomIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </List>
  );
}
