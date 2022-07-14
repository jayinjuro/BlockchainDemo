import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Button, Container, Row, Col } from "react-bootstrap";
import classes from "./Jumbotron.module.css";
import Stack from 'react-bootstrap/Stack'
import Image from 'next/image'
import riskManage from '../img/riskmanagement.png'

function Jumbotron(props) {
  return (
    <div className={classes.jumbotron}>
      <h1 className={classes.jumbotext}>Investment Banking for Everyone</h1>
      <ul className={classes.jumbolist}><li>Be the owner of the project</li><li>Active token community</li><li>Trade your token freely</li></ul>
      <p className={classes.jumboamount}>
      </p>
      {props.account && <p className={classes.jumboamount}>
        Welcome {props.account}
      </p>}
      {props.account && <p className={classes.jumboamount}>
        You owns {props.amount} JuroToken
      </p>}
      {props.account && <p className={classes.jumboamount}>
        You owns {props.uroamount} UroSysToken
      </p>}
      {props.account && <p className={classes.jumboamount}>
        You owns {props.riskamount} RiskWeatherToken
      </p>}
      <Stack direction="horizontal" gap={3}>
        {!props.account && !props.isLoggedIn &&<Button variant="dark" className={classes.jumbobutton} onClick={props.loginClick}>
          Login
        </Button>}
        {props.isLoggedIn &&<Button variant="dark" className={classes.jumbobutton} onClick={props.logoutClick}>
          Logout
        </Button>}
        {!props.account && props.isLoggedIn &&<Button variant="dark" className={classes.jumbobutton} onClick={props.click}>
          Connect
        </Button>}
        {props.account && <Button variant="dark" className={classes.jumbobutton} onClick={props.unClick}>
          Change Wallet
        </Button>}
        {/* {props.account && <Button variant="dark" className={classes.jumbobutton} onClick={props.disconnect}>
          Disconnect
        </Button>} */}
      </Stack>
    </div>
  );
}

export default Jumbotron;
