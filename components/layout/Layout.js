import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div>
      <MainNavigation createClicked={props.createClick} isLoggedIn={props.isAuthenticated} account={props.account} login={props.login} logout={props.logout} loginClick={props.loginClick} logoutClick={props.onLogout} />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
