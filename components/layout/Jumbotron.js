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
      <h1 className={classes.jumbotext}>Unified platform for Risk & Asset management</h1>
      <ul className={classes.jumbolist}><li>Financial Risk Management</li><li>High-performance computing</li><li>Fat-tail model</li></ul>
      <p className={classes.jumboamount}>
        JuroToken, Be an owner of UROSYS
      </p>
      {props.account && <p className={classes.jumboamount}>
        You owns {props.amount} JuroToken
      </p>}
      <Stack direction="horizontal" gap={3}>
        {!props.account && <Button variant="dark" className={classes.jumbobutton} onClick={props.click}>
          Connect
        </Button>}
        {props.account && <Button variant="dark" className={classes.jumbobutton} onClick={props.buyclick}>
          Get Token
        </Button>}
      </Stack>
    </div>
  );
}

export default Jumbotron;
