import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./Footer.module.css";
import Image from 'next/image'
import faceBookIcon from '../img/facebook.png'

const FooterPage = () => {
  return (
    <MDBFooter className="font-small mt-5">
      <div className={classes.footer}>
        <MDBContainer fluid className="">
          <MDBRow>
            <MDBCol md="3">
              <h2>
                <div className={classes.footertext}>
                  Juro Instruments
                </div>
        
              </h2>
            </MDBCol>
            <MDBCol md="7">
              <h5 className="title">
              </h5>
              <ul className={classes.footerul} align="left">
                <li className={classes.footerlist}>
                  <p>Location: 04516 서울특별시 중구 서소문로 89-15 이주빌딩 7층
                    <br></br>
Phone: 070-4603-2370
<br></br>
Fax: 02-722-2370
<br></br>
Email: info@juroinstruments.com
<br></br>
Web: http://www.juroinstruments.com</p>
                </li>
    
              </ul>
    
            </MDBCol>
            <MDBCol md="2">
            <h5 className={classes.footersocial}>
                  Juro Social Link
            <a href="https://www.facebook.com/juroinstruments" className={classes.footerimg}><Image variant="top" src={faceBookIcon} width="20px" height="20px"/></a>
            </h5>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.juroinstruments.com/">
              {" "}
              https://www.juroinstruments.com/{" "}
            </a>
          </MDBContainer>
        </div>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
