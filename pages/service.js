import FooterPage from "../components/layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image'
import SendTransaction from "../components/SendTransaction";

function Service(props){
    return <div>
       <SendTransaction amountChange={props.amountChange} contract={props.contract} account={props.account} tokenName={props.tokenName} tokenName2={props.tokenName2} tokenName3={props.tokenName3}></SendTransaction>
       <FooterPage></FooterPage>
    </div>
}

export default Service;