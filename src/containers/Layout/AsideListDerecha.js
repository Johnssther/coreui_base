import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { DashboardRounded, TrendingDownRounded, MergeTypeRounded } from '@material-ui/icons';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DescriptionRounded from '@material-ui/icons/DescriptionRounded';
import { blue, green } from '@material-ui/core/colors';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

// https://medium.com/@modularcoder/reactjs-multi-level-sidebar-navigation-menu-with-typescrip-materialui-251943c12dda

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 560,
    fontSize: '10px',
    // backgroundColor: theme.palette.warning.light,
  },
  nested: {
    paddingLeft: theme.spacing(3),
  },
}));

function AsideList(props) {
  const classes = useStyles();

  const handleClickProfile = () => {
    props.history.push('/profile')
  };
  const handleClickLogout = () => {
    props.history.push('/login')
    localStorage.clear()
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      dense={true}
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" color="inherit" /* className="text-center" */>
          <ListItem alignItems="flex-start" button onClick={handleClickProfile}>
            <ListItemAvatar>
              <Avatar alt={JSON.parse(localStorage.getItem('auth')).name} src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={JSON.parse(localStorage.getItem('auth')).name}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    style={{ color: green[500] }}
                  >
                    Online
              </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </ListSubheader>
      }
      className={classes.root}
    >
      <Divider variant="inset" component="li" style={{ color: blue[50] }} />
      <ListItem dense={true} button onClick={handleClickLogout}>
        <ListItemIcon>
          <DashboardRounded style={{ color: blue[50] }} />
        </ListItemIcon>
        <ListItemText primary="Cerrar Sesión" />
      </ListItem>
    </List>
  );
}

export default AsideList;