import classes from './BoardDetail.module.css';
import { DUMMY_BOARDS } from './BoardList';
import Card from '../ui/Card';
import {Container, Row, Col,Button} from 'react-bootstrap'

function BoardDetail(props) {
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
      <h1>{props.board[props.id].title}</h1>
      <p>{props.board[props.id].author}</p>
      <p>{props.board[props.id].description}</p>
    
    </section>
    </Container>
    </Card>
  );
}

export default BoardDetail;
