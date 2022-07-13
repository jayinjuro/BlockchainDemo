import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewCommunityForm.module.css';
import {Container, Row, Col,Button} from 'react-bootstrap'
import { DUMMY_ARTICLES } from './CommunityList';

let idCount= 1
let viewCount=0
let likeCount=0
let dislikeCount=0
let dateTime=new Date().toString()
dateTime=dateTime.substr(0,24)


function NewCommunityForm(props) {
  
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const authorInputRef = useRef();
  const descriptionInputRef = useRef();
  

  function addArticle(enteredData) {
    const newArticle=[...props.article]
    enteredData.id=enteredData.id+1
    console.log(enteredData);
    
    newArticle.push(enteredData)
    props.articlechange(newArticle)
    console.log(props.article)

  }

  function idCounter(){
    idCount=idCount++;
  }


  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAuthor = authorInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const communityData = {
      id:props.articleid,
      date:dateTime,
      title: enteredTitle,
      image: enteredImage,
      author: enteredAuthor,
      description: enteredDescription,
      views:viewCount,
      likes:likeCount,
      dislikes:dislikeCount,
    };



    addArticle(communityData);
    props.writeChange(false);
  }

  function backHandler(){
    props.writeChange(false);

  }

  return (
    <Card>
      <Row>
        <Col xs={2} className={classes.actions}>
            <button onClick={backHandler}>Back</button>
        </Col>
        <Col xs={10}>
        </Col>
      </Row>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' required id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Image</label>
          <input type='url'  id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add</button>
        </div>
      </form>
    </Card>
  );
}

export default NewCommunityForm;
