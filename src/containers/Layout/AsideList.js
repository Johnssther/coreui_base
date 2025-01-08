import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { AssignmentReturnRounded, AssignmentReturnedRounded ,DashboardRounded, TrendingDownRounded, TrendingUpRounded, MergeTypeRounded } from '@material-ui/icons';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DescriptionRounded from '@material-ui/icons/DescriptionRounded';
import { blue, green, purple } from '@material-ui/core/colors';
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
  const [open, setOpen] = React.useState(false);
  const [openrevenues, setOpenrevenues] = React.useState(false);
  const [route1, setRoute1] = React.useState('#212121');
  const [route2, setRoute2] = React.useState('#212121');
  const [route3, setRoute3] = React.useState('#212121');
  const [path, setPath] = React.useState();
  const [name, setName] = React.useState(localStorage.getItem('auth') === null ? '' : JSON.parse(localStorage.getItem('auth')).name);

  function bg() {
    if (props.location) {
      console.log(props.location.pathname);
      let pathname = props.location.pathname;
      if (pathname === '/expenses/moduls/personalexpenses') {
        setOpen(true);
        setOpenrevenues(false);
        setRoute1('purple');
        setRoute2('#212121');
        setRoute3('#212121');
      }
      if (pathname === '/expenses/references/expensestype') {
        setOpen(true);
        setOpenrevenues(false);
        setRoute1('#212121');
        setRoute2('purple');
        setRoute3('#212121');
      }
      if (pathname === '/expenses/reports/rpersonalexpenses') {
        setOpen(true);
        setOpenrevenues(false);
        setRoute1('#212121');
        setRoute2('#212121');
        setRoute3('purple');
      }
    }
  }

  React.useEffect(() => {
    async function anyNameFunction() {
      bg();
    }
    anyNameFunction()
  }, [])

  // props.history.push('/expenses/moduls/personalexpenses/create')
  const handleClickProfile = () => {
    props.history.push('/profile')
    setOpen(false);
    setOpenrevenues(false)
  };

  const handleClickDashboard = () => {
    props.history.push('/dashboard')
    setOpen(false);
    setOpenrevenues(false)
  };

  const handleClickExpenses = () => {
    setOpen(!open);
    setOpenrevenues(false)
  };
  const handleClickExpensesReg = async () => {
    await props.history.push('/expenses/moduls/personalexpenses');
    setRoute1('purple');
    setRoute2('#212121');
    setRoute3('#212121');
  };
  const handleClickTypeExpenses = async () => {
    await props.history.push('/expenses/references/expensestype');
    setRoute1('#212121');
    setRoute2('purple');
    setRoute3('#212121');
  };
  const handleClickReportExpenses = async () => {
    await props.history.push('/expenses/reports/rpersonalexpenses');
    setRoute1('#212121');
    setRoute2('#212121');
    setRoute3('purple');
  };

  const handleClickRevenues = () => {
    setOpen(false);
    setOpenrevenues(!openrevenues)
  };
  const handleClickRevenuesReg = async () => {
    await props.history.push('/revenues');
  };
  const handleClickBudgetsReg = async () => {
    await props.history.push('/budget');
  };
  const handleClickReportRevenues = () => {
    //props.history.push('/expenses/reports/rpersonalexpenses')
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
              <Avatar alt={name} src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={name}
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
      <ListItem dense={true} button onClick={handleClickDashboard}>
        <ListItemIcon>
          <DashboardRounded style={{ color: blue[50] }} />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>

      <ListItem dense={true} button onClick={handleClickExpenses}>
        <ListItemIcon>
          <AssignmentReturnRounded style={{ color: blue[50] }} />
        </ListItemIcon>
        <ListItemText primary="Expenses" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          <ListItem style={{ background: route1 }} dense={true} button onClick={handleClickExpensesReg} className={classes.nested} autoFocus={true}>
            <ListItemIcon>
              <TrendingDownRounded style={{ color: blue[50] }} />
            </ListItemIcon>
            <ListItemText primary="My Expenses" />
          </ListItem>

          <ListItem style={{ background: route2 }} dense={true} button onClick={handleClickTypeExpenses} className={classes.nested} >
            <ListItemIcon>
              <MergeTypeRounded style={{ color: blue[50] }} />
            </ListItemIcon>
            <ListItemText primary="Expenses Type" />
          </ListItem>

          <ListItem style={{ background: route3 }} dense={true} button onClick={handleClickReportExpenses} className={classes.nested} >
            <ListItemIcon>
              <DescriptionRounded style={{ color: blue[50] }} />
            </ListItemIcon>
            <ListItemText primary="R. Expenses" style={{ fontSize: '8px' }} />
          </ListItem>

        </List>
      </Collapse>

      <ListItem dense={true} button onClick={handleClickRevenues}>
        <ListItemIcon style={{ color: blue[50] }}>
          <AssignmentReturnedRounded style={{ color: blue[50] }} />
          {/* Beta */}
        </ListItemIcon>
        <ListItemText primary="Revenues" />
        {openrevenues ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={openrevenues} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          <ListItem style={{ background: '#212121' }} dense={true} button onClick={handleClickRevenuesReg} className={classes.nested} autoFocus={true}>
            <ListItemIcon>
              <TrendingUpRounded style={{ color: blue[50] }} />
            </ListItemIcon>
            <ListItemText primary="My Revenues" />
          </ListItem>

          <ListItem style={{ background: '#212121' }} dense={true} button onClick={handleClickBudgetsReg} className={classes.nested} autoFocus={true}>
            <ListItemIcon>
              <TrendingUpRounded style={{ color: blue[50] }} />
            </ListItemIcon>
            <ListItemText primary="My Budget" />
          </ListItem>

       {/*    <ListItem style={{ background: '#212121' }} dense={true} button onClick={handleClickReportRevenues} className={classes.nested}>
            <ListItemIcon>
              <DescriptionRounded style={{ color: blue[50] }} />
            </ListItemIcon>
            <ListItemText primary="R. Revenues" />
          </ListItem> */}

        </List>
      </Collapse>
    </List>
  );
}

export default AsideList;