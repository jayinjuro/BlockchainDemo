import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "../components/layout/Jumbotron";
import FooterPage from "../components/layout/Footer";
import Item from "../components/Item";
import CommunityList from "../components/community/CommunityList";
import {useEffect} from 'react'

import SendTransaction from "../components/SendTransaction";
import {injected} from '../utils/connector';
import {useWeb3React} from "@web3-react/core"


function HomePage(props) {
  const { active, library, connector, activate, deactivate } = useWeb3React()

  const handleConnect = () => {
    if(active) {
      deactivate();
      return;
    }
    activate(injected,(error)=>{
      if('/No Ethereum provider was found on window.ethereum/'.test(error)){
        window.open('https://metamask.io/download.html');
      }
    });
  }

  async function connect() {
    try {
      await activate(injected)
      localStorage.setItem("isWalletConnected",true)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
      localStorage.setItem("isWalletConnected",false)
    } catch (ex) {
      console.log(ex)
    }
  }

  // useEffect(() => {
  //   const connectWalletOnPageLoad = async () => {
  //     if (localStorage?.getItem('isWalletConnected') === 'true') {
  //       try {
  //         await activate(injected)
  //       } catch (ex) {
  //         console.log(ex)
  //       }
  //     }
  //   }
  //   connectWalletOnPageLoad()
  // }, [])

  return (
    <div>
      
      <Jumbotron isLoggedIn={props.isAuthenticated} logoutClick={props.logoutClick} loginClick={props.loginClick} connector={handleConnect} active={active} click={props.click} unClick={props.logout} buyclick={props.buyclick} account={props.account} amount={props.amount} uroamount={props.uroamount} riskamount={props.riskamount} connect={connect} disconnect={disconnect}></Jumbotron>
      <Item totalsupply={props.totalsupply} modalClick={props.modalClick} uroModalClick={props.uroModalClick} riskModalClick={props.riskModalClick} tokenName={props.tokenName}/>
      <FooterPage></FooterPage>
    </div>
  );
}


export default HomePage;
