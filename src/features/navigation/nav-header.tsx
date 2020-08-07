import {
  AppBar,
  IconButton,
  ListItemIcon,
  makeStyles,
  Menu,
  MenuItem,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import MenuIcon from '@material-ui/icons/Menu';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { logoutThunk } from '../auth/auth-thunk';

const useStyles = makeStyles((theme: Theme) => ({
  listItemIcon: {
    minWidth: theme.spacing(5),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textTransform: 'capitalize',
    marginLeft: theme.spacing(0.5),
  },
}));

type PageSlug = 'transfers' | 'search' | 'rss' | 'settings';

export function NavHeader(): JSX.Element {
  const classes = useStyles();
  const dispatch = useDispatch();

  const history = useHistory();
  const match = useRouteMatch<{ pageSlug: PageSlug }>('/:pageSlug');
  const pageSlug = match?.params.pageSlug;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (main: string) => {
    history.push(main);
    handleClose();
  };

  const getPageIcon = (slug: PageSlug | undefined) => {
    switch (slug) {
      case 'transfers':
        return <ImportExportIcon />;
      case 'search':
        return <SearchIcon />;
      case 'rss':
        return <RssFeedIcon />;
      case 'settings':
        return <SettingsIcon />;
      default:
        return <ImportExportIcon />;
    }
  };

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <IconButton edge="start" onClick={handleClick} color="inherit" aria-label="menu" className={classes.menuButton}>
          <MenuIcon />
        </IconButton>
        {getPageIcon(pageSlug)}

        <Typography variant="h6" className={classes.title}>
          {pageSlug}
        </Typography>

        <IconButton onClick={() => dispatch(logoutThunk())} color="inherit" aria-label="logout">
          <ExitToAppIcon />
        </IconButton>

        <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={() => handleItemClick('/transfers')}>
            <ListItemIcon classes={{ root: classes.listItemIcon }}>
              <ImportExportIcon />
            </ListItemIcon>
            Transfers
          </MenuItem>

          <MenuItem onClick={() => handleItemClick('/search')}>
            <ListItemIcon classes={{ root: classes.listItemIcon }}>
              <SearchIcon />
            </ListItemIcon>
            Search
          </MenuItem>

          <MenuItem selected onClick={() => handleItemClick('/rss')}>
            <ListItemIcon classes={{ root: classes.listItemIcon }}>
              <RssFeedIcon />
            </ListItemIcon>
            RSS
          </MenuItem>

          <MenuItem onClick={() => handleItemClick('/settings')}>
            <ListItemIcon classes={{ root: classes.listItemIcon }}>
              <SettingsIcon />
            </ListItemIcon>
            Settings
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
