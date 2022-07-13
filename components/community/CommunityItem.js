import { useState,useRef } from 'react';
import { useRouter } from 'next/router';
import Card from '../ui/Card';
import classes from './CommunityItem.module.css';
import {Container, Row, Col} from 'react-bootstrap'


const CommunityItem=(props)=> {
    const router = useRouter();
  
    function showDetailsHandler() {
      props.numGetter(props.id)
      props.clickChange(true);
    
    }
  
    return (
      <li className={classes.item}>
          <Row className={classes.content}>
            <Col xs={3}>{props.date}</Col>
            <Col xs={4} onClick={showDetailsHandler}>{props.title}</Col>
            <Col xs={2}>{props.author}</Col>
            <Col xs={1}>{props.views}</Col>
            <Col xs={1}>{props.likes}</Col>
            <Col xs={1}>{props.dislikes}</Col>
          </Row>
      </li>
    );
  }
  
  export default CommunityItem;