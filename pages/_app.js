import Layout from "../components/layout/Layout";
import React,{ useState, useEffect,useCallback } from "react";
import Web3 from 'web3';
import JuroToken from '../build/contracts/JuroToken.json';
import UroSysToken from '../build/contracts/UroSysToken.json'
import RiskWeatherToken from '../build/contracts/RiskWeatherToken.json'
import { Web3ReactProvider } from '@web3-react/core'
import MyModal from '../components/layout/MyModal';
import Login from "../components/Login/Login";
import CreateAccount from "../components/Login/CreateAccount";
import juroTokenImage from '../components/img/JuroToken.png';
import uroTokenImage from '../components/img/urosysToken.png';
import riskTokenImage from '../components/img/risktokenimg.png';
import { Document, Page, pdfjs } from "react-pdf";
// import juroWhitePaper from '../components/whitepaper/jurotoken_whitepaper.pdf'
// import urosysWhitePaper from '../components/whitepaper/urosys_whitepaper.pdf'
// import riskweatherWhitePaper from '../components/whitepaper/riskweather_whitepaper.pdf'


import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [web3, setWeb3] = useState(null)
	const [account, setAccount] = useState(null)
	const [amount, setAmount] = useState(0)
	const [uroSysAmount, setUroSysAmount] = useState(0)
	const [riskWeatherAmount, setRiskWeatherAmount] = useState(0)
  const [JuroTokenContract, setJuroTokenContract] = useState(null)
  const [uroSysTokenContract, setUroSysTokenContract] = useState(null)
  const [riskWeatherTokenContract, setRiskWeatherTokenContract] = useState(null)
  const tokenOwner='0x5b1030dcd0af8b77b83e1b52e01864a79bed32ed'
  const [totalToken, setTotalToken]=useState(0)
  const [uroTotalToken, setUroTotalToken]=useState(0)
  const [riskTotalToken, setRiskTotalToken]=useState(0)
  const [modalShow, setModalShow] = useState(false);
  const [uroModalShow, setUroModalShow] = useState(false);
  const [riskModalShow, setRiskModalShow] = useState(false);
  const [tokenName,setTokenName]=useState("");
  const [uroTokenName,setUroTokenName]=useState("");
  const [riskTokenName,setRiskTokenName]=useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginShow, setLoginShow]=useState(false);
  const [createShow, setCreateShow]=useState(false);

  let juroArticleId=1
  let uroArticleId=1
  let riskArticleId=1

  const [DUMMY_JURO_ARTICLES,setDUMMYJUROARTICLES] =useState([
    {
      id: 0,
      date: "2022.07.06 09:53",
      title: 'JURO First Article',
      description: 'This is a first juro article!',
      author:'James',
      views:6,
      likes:6,
      dislikes:3,
      image:'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F008%2F2016%2F10%2F20%2F2016102014287421546_3_99_20161020171409.jpg&type=sc960_832',
    },
    {
        id: 1,
        date:"2022.07.06  09:53",
        title: 'JURO Second Article',
        description: 'This is a second juro article!',
        author:'Jake',
        views:666,
        likes:66,
        dislikes:3,
        image:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160910_23%2Flakeyellow_1473474557611H0Sku_JPEG%2FIMG_2120.JPG&type=sc960_832',
    },
  ])
  const [DUMMY_UROSYS_ARTICLES,setDUMMYUROSYSARTICLES] = useState([
    {
      id: 0,
      date: "2022.07.06 09:53",
      title: 'UROSYS First Article',
      description: 'This is a first urosys article!',
      author:'James',
      views:9,
      likes:6,
      dislikes:3,
      image:'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F008%2F2016%2F10%2F20%2F2016102014287421546_3_99_20161020171409.jpg&type=sc960_832',
    },
    {
        id: 1,
        date:"2022.07.06  09:53",
        title: 'UROSYS Second Article',
        description: 'This is a second urosys article!',
        author:'Jake',
        views:10,
        likes:7,
        dislikes:3,
        image:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160910_23%2Flakeyellow_1473474557611H0Sku_JPEG%2FIMG_2120.JPG&type=sc960_832',
    },
  ])
  const [DUMMY_RISKWEATHER_ARTICLES,setDUMMYRISKWEATHERARTICLES] = useState([
    {
      id: 0,
      date: "2022.07.06 09:53",
      title: 'RiskWeather First Article',
      description: 'This is a first riskweather article!',
      author:'James',
      views:16,
      likes:26,
      dislikes:3,
      image:'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F008%2F2016%2F10%2F20%2F2016102014287421546_3_99_20161020171409.jpg&type=sc960_832',
    },
    {
        id: 1,
        date:"2022.07.06  09:53",
        title: 'RiskWeather Second Article',
        description: 'This is a second riskweather article!',
        author:'Jake',
        views:38,
        likes:1,
        dislikes:3,
        image:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160910_23%2Flakeyellow_1473474557611H0Sku_JPEG%2FIMG_2120.JPG&type=sc960_832',
    },
  ]);

  const DUMMY_JURO_BOARDS = [
    {
      id: 0,
      date: "2022.07.06 09:53",
      title: 'JURO First Board',
      description: 'This is a first article!',
      source:'Juro Instruments',
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
    },
    {
        id: 1,
        date:"2022.07.06  09:53",
        title: 'JURO Second Board',
        description: 'This is a Second article!',
        source:'Juro Instruments',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
    },
  ];

  const DUMMY_UROSYS_BOARDS = [
    {
      id: 0,
      date: "2022.07.06 09:53",
      title: 'UROSYS First Board',
      description: 'This is a first article!',
      source:'Juro Instruments',
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
    },
    {
        id: 1,
        date:"2022.07.06  09:53",
        title: 'UROSYS Second Board',
        description: 'This is a Second article!',
        source:'Juro Instruments',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
    },
  ];


  const DUMMY_RISKWEATHER_BOARDS = [
    {
      id: 0,
      date: "2022.07.06 09:53",
      title: 'RiskWeather First Board',
      description: 'This is a first article!',
      source:'Juro Instruments',
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
    },
    {
        id: 1,
        date:"2022.07.06  09:53",
        title: 'RiskWeather Second Board',
        description: 'This is a Second article!',
        source:'Juro Instruments',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
    },
  ];



  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
    setLoginShow(false);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  function getLibrary(provider) {
    return new Web3(provider)
  }

 


  const loadBlockChainData=async()=>{
    if (typeof window.ethereum!=='undefined') {
      // window.ethereum.request({method:'eth_requestAccounts'})
			const web3 = new Web3(window.ethereum)
			setWeb3(web3)

			const accounts = await web3.eth.getAccounts()
      console.log(accounts)

			if (accounts.length > 0) {
				setAccount(accounts[0])
			}

			const networkId = await web3.eth.net.getId()
      console.log(networkId)

			const juroToken = new web3.eth.Contract(JuroToken.abi, JuroToken.networks[networkId].address)
			const uroSysToken = new web3.eth.Contract(UroSysToken.abi, UroSysToken.networks[networkId].address)
			const riskWeatherToken = new web3.eth.Contract(RiskWeatherToken.abi, RiskWeatherToken.networks[networkId].address)
			setJuroTokenContract(juroToken)
			setUroSysTokenContract(uroSysToken)
			setRiskWeatherTokenContract(riskWeatherToken)
      console.log(JuroTokenContract)
      console.log(uroSysTokenContract)
      console.log(riskWeatherTokenContract)

      window.ethereum.on('accountsChanged', function (accounts) {
				setAccount(accounts[0])
        console.log(account)
			})
      window.ethereum.on('chainChanged', (chainId) => {
				window.location.reload();
			})
    }
  }

  const loadTokenAmountData=async()=>{
    if (account&&JuroTokenContract&&uroSysTokenContract&&riskWeatherTokenContract){
      const tokenAmount=await JuroTokenContract.methods.balanceOf(account).call()
      const tokenAmount2=await uroSysTokenContract.methods.balanceOf(account).call()
      const tokenAmount3=await riskWeatherTokenContract.methods.balanceOf(account).call()
      setAmount(tokenAmount)
      setUroSysAmount(tokenAmount2)
      setRiskWeatherAmount(tokenAmount3)
      console.log(amount)
      console.log(tokenAmount2)
      console.log(tokenAmount3)

    }
  }
  const totalSupplyData=async()=>{
    const web3 = new Web3(window.ethereum)
    setWeb3(web3)
    const networkId = await web3.eth.net.getId()
    const juroToken = new web3.eth.Contract(JuroToken.abi, JuroToken.networks[networkId].address)
    setJuroTokenContract(juroToken)
    const uroToken = new web3.eth.Contract(UroSysToken.abi, UroSysToken.networks[networkId].address)
    setUroSysTokenContract(uroToken)
    const riskToken = new web3.eth.Contract(RiskWeatherToken.abi, RiskWeatherToken.networks[networkId].address)
    setRiskWeatherTokenContract(riskToken)
    if (JuroTokenContract){
      const totalSupply=await JuroTokenContract.methods.totalSupply().call()
      setTotalToken(totalSupply);
      console.log(totalToken)
      }
    if (uroSysTokenContract){
      const uroTotalSupply=await uroSysTokenContract.methods.totalSupply().call()
      setUroTotalToken(uroTotalSupply)
    }
    if (riskWeatherTokenContract){
      const riskWeatherTotalSupply=await riskWeatherTokenContract.methods.totalSupply().call()
      setRiskTotalToken(riskWeatherTotalSupply)
    }
    }

    const getTokenName=async()=>{
      if (JuroTokenContract){
        const tokName=await JuroTokenContract.methods.name().call()
        setTokenName(tokName);
      }
      if (uroSysTokenContract){
        const tokName2=await uroSysTokenContract.methods.name().call()
        setUroTokenName(tokName2);
      }
      if (riskWeatherTokenContract){
        const tokName3=await riskWeatherTokenContract.methods.name().call()
        setRiskTokenName(tokName3);
      }
    }

  useEffect(()=>{
    totalSupplyData(),getTokenName()
  },[])


  useEffect(()=>{
    loadBlockChainData(),loadTokenAmountData(),getTokenName(),totalSupplyData()
  },[account])


  useEffect(()=>{
    loadTokenAmountData()
  },[account,amount])

  useEffect(()=>{
    totalSupplyData()
  },[totalToken])

  
  const connectHandler=async()=>{
    if (web3){const accounts=await window.ethereum.request({method:'eth_requestAccounts'})
    console.log(accounts)
    setAccount(accounts[0])}
  }

  const disconnectHandler=async()=>{
    if (web3){const accounts=await window.ethereum.request({
      method: "wallet_requestPermissions",
      params: [{eth_accounts: {}}]
      
  }).then(()=>ethereum.request({
    method:'eth_requestAccounts'
  }))

    setAccount(accounts[0])}
  }


  const buyHandler = async () => {
    try {
      console.log(account)
      const getToken=await JuroTokenContract.methods.getToken().send({ from:account, value:'1000000000000000'})
      const tokenAmount=await JuroTokenContract.methods.balanceOf(account).call()
      setAmount(tokenAmount)

      console.log(getToken)
  

    } catch (error) {
      window.alert('Error occurred when buying')
    }
  }

  function modalShowHandler(){
    setModalShow(true);
  }
  function modalHideHandler(){
    setModalShow(false);
  }
  function uroModalShowHandler(){
    setUroModalShow(true);
  }
  function uroModalHideHandler(){
    setUroModalShow(false);
  }
  function riskModalShowHandler(){
    setRiskModalShow(true);
  }
  function riskModalHideHandler(){
    setRiskModalShow(false);
  }

  function loginShowHandler(){
    setLoginShow(true);}
  function logoutShowHandler(){
    setLoginShow(false);}

  function createAccountHandler(){
    setCreateShow(true);
  }

  
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
    <Layout createClick={createAccountHandler} loginClick={loginShowHandler} logoutClick={logoutShowHandler} account={account} login={connectHandler} logout={disconnectHandler} isAuthenticated={isLoggedIn} onLogin={loginHandler} onLogout={logoutHandler}>
      <Component {...pageProps}  logoutClick={logoutHandler} isAuthenticated={isLoggedIn} loginClick={loginShowHandler} amountChange={setAmount} account={account} amount={amount} uroamount={uroSysAmount} riskamount={riskWeatherAmount} click={connectHandler} buyclick={buyHandler} contract={JuroTokenContract} contract2={uroSysTokenContract} contract3={riskWeatherTokenContract} logout={disconnectHandler} totalsupply={totalToken} onHide={modalHideHandler} modalClick={modalShowHandler} uroModalClick={uroModalShowHandler} riskModalClick={riskModalShowHandler} tokenName={tokenName} tokenName2={uroTokenName} tokenName3={riskTokenName}/>
    </Layout>
    <MyModal show={modalShow} onHide={() => setModalShow(false)} articleid={juroArticleId} tokname={tokenName} totalsupply={totalToken} isLoggedIn={isLoggedIn} loginShow={loginShowHandler} articlechange={setDUMMYJUROARTICLES} article={DUMMY_JURO_ARTICLES} board={DUMMY_JURO_BOARDS} image={juroTokenImage}/>
    <MyModal show={uroModalShow} onHide={() => setUroModalShow(false)} articleid={uroArticleId} tokname={uroTokenName}totalsupply={uroTotalToken} isLoggedIn={isLoggedIn} loginShow={loginShowHandler} articlechange={setDUMMYUROSYSARTICLES} article={DUMMY_UROSYS_ARTICLES} board={DUMMY_UROSYS_BOARDS} image={uroTokenImage}/>
    <MyModal show={riskModalShow} onHide={() => setRiskModalShow(false)} articleid={riskArticleId} tokname={riskTokenName} totalsupply={riskTotalToken} isLoggedIn={isLoggedIn} loginShow={loginShowHandler} articlechange={setDUMMYRISKWEATHERARTICLES} article={DUMMY_RISKWEATHER_ARTICLES} board={DUMMY_RISKWEATHER_BOARDS} image={riskTokenImage}/>
    <Login show={loginShow} onHide={() => setLoginShow(false)} isLoggedIn={isLoggedIn} onLogin={loginHandler} onLogout={logoutHandler}/>
    <CreateAccount show={createShow} onHide={() => setCreateShow(false)}  onCreate={createAccountHandler} createchange={setCreateShow}/>
    </Web3ReactProvider>
  );
}

export default MyApp;
