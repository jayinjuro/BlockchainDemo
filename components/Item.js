import "bootstrap/dist/css/bootstrap.min.css";
import { Card, ListGroup, ListGroupItem, CardGroup } from "react-bootstrap";
import classes from "./Items.module.css";
import Image from 'next/image'
import uroSys from './img/urosys.jpg'
import juroMain from './img/juromain.png'
import modelsMap from './img/modelsmap.png'
import metaVerse from './img/metaverse.jpg'
import conference from './img/conference.jpg'
import risktokenimg from './img/riskimg.png'
import urotokenimg from './img/urotokenimg.png'


function Item() {
  return (
    <div className={classes.item}>
      <CardGroup>
        <Card className={classes.cardBody}>
          <Image variant="top" src={juroMain} width="300px" height="300px"/>
          <Card.Body>
            <Card.Title className={classes.cardTitle}>Juro Token</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className={classes.cardBody}>
          <Image variant="top" src={juroMain} width="300px" height="300px"/>
          <Card.Body>
            <Card.Title className={classes.cardTitle}>Urosys Token</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className={classes.cardBody}>
          <Image variant="top" src={juroMain} width="300px" height="300px"/>
          <Card.Body>
            <Card.Title className={classes.cardTitle}>Risk Weather Token</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Item;
