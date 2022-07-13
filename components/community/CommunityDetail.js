import classes from './CommunityDetail.module.css';
import { DUMMY_ARTICLES } from './CommunityList';
import Card from '../ui/Card';
import {Container, Row, Col,Button} from 'react-bootstrap'

function CommunityDetail(props) {
  
  function backHandler(){
    props.clickChange(false);
  }
  return (
    <Card>
    <Container>
    <section className={classes.detail}>
    <Row>
      <Col xs={2} className={classes.actions}><button onClick={backHandler}>Back</button></Col>
      <Col xs={10}></Col>
    </Row>
    <Row>
    <Col xs={9}>
      <h1>{props.article[props.id].title}</h1></Col>
    <Col xs={3}><p>Author: {props.article[props.id].author}</p></Col>
    </Row>
      <img src={props.article[props.id].image}></img>
      <p>{props.article[props.id].description}</p>
      <Row>
     <Col xs={6}><p>Likes: {props.article[props.id].likes}</p></Col>
     <Col xs={6}><p>Dislikes: {props.article[props.id].dislikes}</p></Col>
      </Row>
    
    </section>
    </Container>
    </Card>
  );
}

export default CommunityDetail;
