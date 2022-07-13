import FooterPage from "../components/layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image'
import juroIntro from '../components/img/jurointro.jpg'
import juroProduct from '../components/img/juroProduct.jpg'
import uroSys from '../components/img/urosys.jpg'
import ibRisk from '../components/img/ibrisk.jpg'


function About(){

    return <div align="center">
        <Image variant="top" src={juroIntro} width="1000" height="1400"></Image>
        <Image variant="top" src={juroProduct} width="1000" height="1400"></Image>
        <Image variant="top" src={uroSys} width="1000" height="1400"></Image>
        <Image variant="top" src={ibRisk} width="1000" height="1200"></Image>
        <FooterPage></FooterPage>

    </div>

}

export default About;