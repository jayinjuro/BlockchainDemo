import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "../components/layout/Jumbotron";
import FooterPage from "../components/layout/Footer";
import Item from "../components/Item";

import SendTransaction from "../components/SendTransaction";

function HomePage(props) {

  return (
    <div>
      <Jumbotron click={props.click} buyclick={props.buyclick} account={props.account} amount={props.amount}></Jumbotron>
      <Item />
      <FooterPage></FooterPage>
    </div>
  );
}

export default HomePage;
