import { useState,useRef } from 'react';

import Card from '../ui/Card';
import classes from './CreateAccount.module.css';
import {Modal,Container, Row, Col,Button} from 'react-bootstrap'



const DUMMY_ID=[{
    id:1,
    date:"2022/07/11",
    name:"SeoMinho",
    email:"turtlemana@naver.com",
    password:"skcjswo1@",
    

}]

export {DUMMY_ID}


let idCount=1
let dateTime=new Date().toString()
dateTime=dateTime.substr(0,24)


function CreateAccount(props) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [createEmailIsValid, setCreateEmailIsValid]=useState()
  const [createPasswordIsValid, setCreatePasswordIsValid]=useState()



  function addAccount(enteredData) {
    enteredData.id=enteredData.id+1
    idCount=enteredData.id
    console.log(enteredData);
    DUMMY_ID.push(enteredData)
    console.log(DUMMY_ID)

  }

  function idCounter(){
    idCount=idCount++;
  }


  function accountSubmitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    


    if (enteredPassword.trim().length<=6){
        alert("Invalid Password")
    } else if(DUMMY_ID.some(id=>id.email===enteredEmail)){
        alert("Account has already created")
    } else{


      

        const accountData = {
        id:idCount,
        date:dateTime,
        name: enteredName,
        email: enteredEmail,
        password: enteredPassword,
        };



        addAccount(accountData);
        props.createchange(false);}
  }


  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
    <Modal.Header closeButton className={classes.ModalHeader}>
      <Modal.Title id="contained-modal-title-vcenter">
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className="show-grid" className={classes.ModalBody}>
      <Container fluid>
    <Card>
      <form className={classes.form} onSubmit={accountSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor='name'>Name</label>
          <input type='text' required id='name' ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='email'>Email</label>
          <input type="email" required id='email' ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Password</label>
          <input type="password" required id='password' ref={passwordInputRef}/>
        </div>
        <div className={classes.actions}>
          <button>Create Account</button>
        </div>
      </form>
    </Card>
    </Container>
    </Modal.Body>
    <Modal.Footer className={classes.ModalFooter}>
        <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
    </Modal>
  );
}

export default CreateAccount;
