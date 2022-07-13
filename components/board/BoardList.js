import BoardItem from './BoardItem';
import classes from './BoardList.module.css';
import Card from '../ui/Card';
import {Container, Row, Col,Button} from 'react-bootstrap'


export const DUMMY_BOARDS = [
    {
      id: 0,
      date: "2022.07.06 09:53",
      title: 'A First Board',
      description: 'This is a first article!',
      source:'Juro Instruments',
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
    },
    {
        id: 1,
        date:"2022.07.06  09:53",
        title: 'A Second Board',
        description: 'This is a Second article!',
        source:'Juro Instruments',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
    },
  ];

const BoardList=(props) =>{
  return (
    <Card>
    <Container>    
    <Row>
    <Col xs={11}>   
    <h3 className={classes.title}>Disclosure Information</h3>
    </Col>
    <Col xs={1}>
    {/* <button className={classes.button}>Wrtie</button> */}
    </Col>
    </Row>
    <Row className={classes.top}>
    <Col xs={6}>Title</Col>
    <Col xs={3}>Source</Col>
    <Col xs={3}>Date</Col>
    </Row>    
    <ul className={classes.list}>
      {props.board.map((article) => (
        <BoardItem clickChange={props.clickChange} numGetter={props.numGetter}
          id={article.id}
          date={article.date}
          title={article.title}
          description={article.description}
          source={article.source}
        />
      ))}
    </ul>
    </Container>
    </Card>
  );
}

export default BoardList;
