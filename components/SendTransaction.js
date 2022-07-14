import {useState,useEffect} from 'react';
import { Button, Card, ListGroup, ListGroupItem,Col,Row,Form,Dropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./SendTransaction.module.css";


function SendTransaction(props){
    const [enteredAddr,setEnteredAddr]=useState();
    const [enteredAmount, setEnteredAmount]=useState();
    const [selectedToken, setSelectedToken]=useState();
    const [selectedContract,setSelectedContract]=useState();


    const addrInputHandler= ({ target: { value } }) => {
        setEnteredAddr(value);
    }

    const amountInputHandler= ({ target: { value } }) => {
        setEnteredAmount(value);
    }
    const selectTokenHandler= ({ target: { value } }) => {
        setSelectedToken(value);
        console.log(selectedToken)
    }

    function dropDownSelect(eventKey,event){
        if (eventKey=="juro"){
            juroContractHandler()
        }
        if (eventKey=="uroSys"){
            uroContractHandler()
        }
        if (eventKey=="riskWeather"){
            riskContractHandler()
        }
    }

    function juroContractHandler(){
        setSelectedContract(props.contract)
        setSelectedToken(props.tokenName)
        console.log(selectedToken)
        console.log(selectedContract)
    }
    function uroContractHandler(){
        setSelectedContract(props.contract2)
        setSelectedToken(props.tokenName2)
        console.log(selectedToken)
        console.log(selectedContract)
    }
    function riskContractHandler(){
        setSelectedContract(props.contract3)
        setSelectedToken(props.tokenName3)
        console.log(selectedToken)
        console.log(selectedContract)
    }

    async function Transaction(){
        try{
            const tx= await selectedContract.methods.transfer(enteredAddr,enteredAmount).send({from:props.account})
            console.log(tx)
            const tokenAmount=await selectedContract.methods.balanceOf(props.account).call()
            props.amountChange(tokenAmount)

        } catch(err){
            console.log(`Something went wrong ${err}`)

        }
    }

    const buyHandler = async () => {
        try {
          console.log(props.account,selectedContract)
          const getToken=await selectedContract.methods.getToken().send({ from:props.account, value:'1000000000000000'})
          const tokenAmount=await selectedContract.methods.balanceOf(props.account).call()
          props.amountChange(tokenAmount)
    
          console.log(getToken)
      
    
        } catch (error) {
          window.alert('Error occurred when buying')
        }
      }



    


    return <div className={classes.SendTransaction}>
        <h1 className={classes.title}>Request Transactions For Your Tokens</h1>
        <Row>
        <Col xs={10}>
            <p className={classes.paragraph}>Get various project tokens for an account and become the owner of the project. You can become a member of a open token community and communicate with other investors of the project</p>
        </Col>
        <Col xs={2}>   
        <Dropdown onSelect={dropDownSelect} className={classes.dropDown}>
        <Dropdown.Toggle variant="primary" id="dropdown-basic" className={classes.dropDownButton}>
            {!selectedToken&&"Select Token"}
            {selectedToken&&selectedToken}
        </Dropdown.Toggle>


        <Dropdown.Menu>
            <Dropdown.Item eventKey="juro">{props.tokenName}</Dropdown.Item>
            <Dropdown.Item eventKey="uroSys">{props.tokenName2}</Dropdown.Item>
            <Dropdown.Item eventKey="riskWeather">{props.tokenName3}</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </Col>
        </Row>
        <Form  className="mb-5 mt-4">
            <Form.Group controlId="formTokenTx">
                {!selectedToken && <Form.Label><h3 className={classes.sendText}>Select a token to send</h3></Form.Label>}
                {selectedToken && <Form.Label><h3 className={classes.sendText}>Send your {selectedToken} to other address</h3></Form.Label>}
                <Form.Control type="text" placeholder="Enter Wallet Address" onChange={addrInputHandler}></Form.Control>
                <Form.Control type="number" placeholder="Enter Amount of token you want to send" onChange={amountInputHandler}></Form.Control>
            </Form.Group>
            <Button variant="dark" className={classes.Button} onClick={Transaction}>Send Token</Button>
        </Form>

        <div className={classes.getTokenDiv}>
        {selectedToken &&<h3 className={classes.sendText}>Get {selectedToken} by 0.001 Ethers</h3>}
        {!selectedToken &&<h3 className={classes.sendText}>Select Token you want to buy</h3>}
        {selectedToken && <Button  variant="dark" className={classes.Button} onClick={buyHandler}>Get {selectedToken}</Button>}
        {!selectedToken && <Button  variant="dark"  className={classes.Button} onClick={buyHandler}>Select Token to Buy</Button>}
        </div>
    </div>
}

export default SendTransaction