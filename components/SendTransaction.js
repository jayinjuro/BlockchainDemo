import {useState,useEffect} from 'react';
import { Button, Card, ListGroup, ListGroupItem,Col,Row,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./SendTransaction.module.css";


function SendTransaction(props){
    const [enteredAddr,setEnteredAddr]=useState();
    const [enteredAmount, setEnteredAmount]=useState();


    const addrInputHandler= ({ target: { value } }) => {
        setEnteredAddr(value);
    }

    const amountInputHandler= ({ target: { value } }) => {
        setEnteredAmount(value);
    }

    async function Transaction(){
        try{
            const tx= await props.contract.methods.transfer(enteredAddr,enteredAmount).send({from:props.account})
            await tx.wait()
            console.log(tx)
            const tokenAmount=await props.contract.methods.balanceOf(props.account).call()

        } catch(err){
            console.log(`Something went wrong ${err}`)

        }
    }


    return <div className={classes.SendTransaction}>
        <Form style={{ width: '44rem' }} className="mb-5 mt-5">
            <Form.Group controlId="formTokenTx">
                <Form.Label><h1 className={classes.sendText}>Send your token to other address</h1></Form.Label>
                <Form.Control type="text" placeholder="Enter Account" onChange={addrInputHandler}></Form.Control>
                <Form.Control type="number" placeholder="Enter Amount of token you want to send" onChange={amountInputHandler}></Form.Control>
            </Form.Group>
            <Button variant="dark" className="mt-2" onClick={Transaction}>Send Token</Button>
        </Form>
    </div>
}

export default SendTransaction