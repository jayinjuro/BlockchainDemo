import { useRef } from 'react';
import { useRouter } from 'next/router';
import Card from '../ui/Card';
import classes from './BoardItem.module.css';
import {Container, Row, Col} from 'react-bootstrap'

  

const BoardItem=(props)=> {
    const router = useRouter();
  
    function showDetailsHandler() {
      props.numGetter(props.id);
      props.clickChange(true);
      
    }
  
    return (
      <li className={classes.item}>
          <Row className={classes.content}>
            <Col xs={6} onClick={showDetailsHandler}>{props.title}</Col>
            <Col xs={3}>{props.source}</Col>
            <Col xs={3}>{props.date}</Col>
          </Row>
      </li>
    );
  }
  
  export default BoardItem;