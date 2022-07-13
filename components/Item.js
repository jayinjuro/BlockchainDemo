import "bootstrap/dist/css/bootstrap.min.css";
import { Card, ListGroup, ListGroupItem, CardGroup } from "react-bootstrap";
import classes from "./Item.module.css";
import Image from 'next/image'
import uroSys from './img/urosys.jpg'
import juroMain from './img/juromain.png'
import modelsMap from './img/modelsmap.png'
import metaVerse from './img/metaverse.jpg'
import conference from './img/conference.jpg'
import risktokenimg from './img/risktokenimg.png'
import urotokenimg from './img/urotokenimg.png'
import juroToken from './img/jurotoken.png'
import urosysToken from './img/urosysToken.png'
import riskWeather from './img/riskweather.png'


function Item(props) {

  const Items=[{image:juroMain,text:"Token",marketCap:"",totalSupply:props.totalSupply,predictedReturn:"",click:props.modalClick}]

  return (
    <div className={classes.item}>
      <CardGroup>
        <Card className={classes.cardBody} onClick={props.modalClick}>
          <div className={classes.top}></div>
          <Image variant="top"  src={juroToken} className={classes.img}width="150px" height="100px"/>
          <Card.Body className={classes.img}>
            <Card.Title className={classes.cardTitle}>{props.tokenName}</Card.Title>
            <Card.Text>
              Risk management solution for financial companies. Provides market risk estimation, OTC pricing module, commodity risk information. Adjusted services for each company,
              using statistical analysis tool R and BA tool for risk analysis. {" "}
              <br></br>
              <br></br>
              <ul className={classes.itemUl}>
              <li>Market Cap:</li>
              <br></br>
              <li>Total Supply: {props.totalsupply}</li>
              <br></br>
              <li>Predicted Return(year):</li>
              </ul>

            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className={classes.cardBody} onClick={props.uroModalClick}>
          <Image variant="top" src={urosysToken} width="300px" height="200px"/>
          <Card.Body className={classes.itemUl}>
            <Card.Title className={classes.cardTitle}>Urosys Token</Card.Title>
            <Card.Text>
              Risk management solution for financial companies. Provides market risk estimation, OTC pricing module, commodity risk information. Adjusted services for each company,
              using statistical analysis tool R and BA tool for risk analysis. {" "}
              <br></br>
              <br></br>
              <ul className={classes.itemUl}>
              <li>Market Cap:</li>
              <br></br>
              <li>Total Supply: {props.totalsupply}</li>
              <br></br>
              <li>Predicted Return(year):</li>
              </ul>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className={classes.cardBody} onClick={props.riskModalClick}>
          <Image variant="top" src={risktokenimg} width="200px" height="200px"/>
          <Card.Body className={classes.itemUl}>
            <Card.Title className={classes.cardTitle}>Risk Weather Token</Card.Title>
            <Card.Text>
              Risk management for everyone. Supports private investors to realize their risk intuitively.
              Like a weather forcast, private investors could easily apprehend asset's risk, intending investors to autonomously manage their risk.
        
              <br></br>
              <br></br>
              <ul className={classes.itemUl}>
            
              <li>Market Cap:</li>
              <br></br>
              <li>Total Supply: {props.totalsupply}</li>
              <br></br>
              <li>Predicted Return(year):</li>
              </ul>
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
