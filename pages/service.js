import FooterPage from "../components/layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image'
import SendTransaction from "../components/SendTransaction";

function Service(props){
    return <div>
       <SendTransaction contract={props.contract} account={props.account}></SendTransaction>
       <FooterPage></FooterPage>
    </div>
}

export default Service;