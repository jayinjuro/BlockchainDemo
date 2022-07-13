import {Modal, Button, Container, Row, Col} from 'react-bootstrap'
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./MyModal.module.css";
import Image from 'next/image'
import juroMain from '../img/juromain.png'
import CommunityList from '../community/CommunityList';
import BoardList from '../board/BoardList';
import CommunityDetail from '../community/CommunityDetail';
import BoardDetail from '../board/BoardDetail';
import NewCommunityForm from '../community/NewCommunityForm';
import Chart from '../Chart/Chart';
import LineChart from '../Chart/LineChart';
function MyModal(props) {
  const [titleClicked,setTitleClicked]=useState(false);
  const [boardTitleClicked, setBoardTitleClicked]=useState(false);
  const [writeClicked, setWriteClicked]=useState(false);
  const [clickNum,setClickNum]=useState(null);
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton className={classes.ModalHeader}>
          <Modal.Title id="contained-modal-title-vcenter">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid" className={classes.ModalBody}>
          <Container fluid>
            <Row>
              <Col xs={4} md={4}>
              <Image variant="top"  className={classes.ModalImage} src={props.image} width="200px" height="100px"/>
              <br></br>
              <br></br>
              <Button variant="success" className={classes.ModalButton}>White paper</Button>
              <ul className={classes.ModalList}>
                <br></br>
                <li className={classes.ModalTokenName}>{props.tokname}</li>
                <br></br>
                <li>Market Cap:</li>
  
                <li>Total Supply: {props.totalsupply}</li>
         
                <li>Predicted Return:</li>
                </ul>
              </Col>
              <Col xs={8} md={8}>
                {!titleClicked && !writeClicked && <CommunityList articlechange={props.articlechange} article={props.article} clickChange={setTitleClicked} writeChange={setWriteClicked} numGetter={setClickNum} isLoggedIn={props.isLoggedIn} loginShow={props.loginShow}></CommunityList>}
                {titleClicked && <CommunityDetail articlechange={props.articlechange} article={props.article} clickChange={setTitleClicked} id={clickNum}></CommunityDetail>}
                {writeClicked && <NewCommunityForm articleid={props.articleid} articlechange={props.articlechange} article={props.article} writeChange={setWriteClicked}></NewCommunityForm>}
                <br></br>
                <br></br>
                {!boardTitleClicked &&<BoardList clickChange={setBoardTitleClicked} numGetter={setClickNum} board={props.board}></BoardList>}
                {boardTitleClicked &&<BoardDetail clickChange={setBoardTitleClicked} id={clickNum} board={props.board}></BoardDetail>}
              </Col>
            </Row>
  
            <Row>
              <Col xs={4} md={4}>
                <LineChart></LineChart>
              </Col>
              <Col xs={8} md={8}>
              </Col>
            </Row>
            <Row>
              <Col xs={4} md={4}>
              </Col>
              <Col xs={8} md={8}>
                
              </Col>
            </Row>
            {/* <Row>
              <Col xs={4} md={4}>
                
              </Col>
              <Col xs={8} md={8}>
                .col-xs-6 .col-md-4
              </Col>
            </Row> */}
          </Container>
        </Modal.Body>
        <Modal.Footer className={classes.ModalFooter}>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default MyModal;