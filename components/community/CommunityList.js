import CommunityItem from './CommunityItem';
import classes from './CommunityList.module.css';
import Card from '../ui/Card';
import {Container, Row, Col,Button} from 'react-bootstrap'

let viewCount=0
const DUMMY_ARTICLES = [
    {
      id: 0,
      date: "2022.07.06 09:53",
      title: 'A First Article',
      description: 'This is a first article!',
      author:'James',
      views:viewCount,
      likes:6,
      dislikes:3,
      image:'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F008%2F2016%2F10%2F20%2F2016102014287421546_3_99_20161020171409.jpg&type=sc960_832',
    },
    {
        id: 1,
        date:"2022.07.06  09:53",
        title: 'A Second Article',
        description: 'This is a second article!',
        author:'Jake',
        views:viewCount,
        likes:6,
        dislikes:3,
        image:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160910_23%2Flakeyellow_1473474557611H0Sku_JPEG%2FIMG_2120.JPG&type=sc960_832',
    },
  ];

Object.defineProperty(DUMMY_ARTICLES,'views',{configurable:true, writable:true})
export {DUMMY_ARTICLES}


const CommunityList=(props) =>{
  function writeHandler(){
    if(props.isLoggedIn==true){
      props.writeChange(true);
    } else if(props.isLoggedIn==false){
      props.loginShow()

    }

  }
  return (
    <Card>
    <Container>    
    <Row>
    <Col xs={11}>   
    <h3 className={classes.title}>Token Community</h3>
    </Col>
    <Col xs={1} className={classes.actions}>
    <button onClick={writeHandler}>Wrtie</button>
    </Col>
    </Row>
    <Row className={classes.top}>
    <Col xs={3}>Date</Col>
    <Col xs={4}>Title</Col>
    <Col xs={2}>Author</Col>
    <Col xs={1}>views</Col>
    <Col xs={1}>Likes</Col>
    <Col xs={1}>Dislikes</Col>
    </Row>    
    <ul className={classes.list}>
      {props.article.map((article) => (
        <CommunityItem clickChange={props.clickChange} numGetter={props.numGetter}
          id={article.id}
          date={article.date}
          title={article.title}
          description={article.description}
          author={article.author}
          views={article.views}
          likes={article.likes}
          dislikes={article.dislikes}
        />
      ))}
    </ul>
    </Container>
    </Card>
  );
}

export default CommunityList;
