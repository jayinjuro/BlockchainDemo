import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div>
      <MainNavigation account={props.account} login={props.login} logout={props.logout} />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
