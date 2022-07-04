import Layout from "../components/layout/Layout";
import { useState, useEffect } from "react";
import Web3 from 'web3';
import JuroToken from '../build/contracts/JuroToken.json';


import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [web3, setWeb3] = useState(null)
	const [account, setAccount] = useState(null)
	const [amount, setAmount] = useState(0)
  const [JuroTokenContract, setJuroTokenContract] = useState(null)
  const tokenOwner='0x5b1030dcd0af8b77b83e1b52e01864a79bed32ed'


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
			setJuroTokenContract(juroToken)
      console.log(JuroTokenContract)

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
    if (account && JuroTokenContract){
      const tokenAmount=await JuroTokenContract.methods.balanceOf(account).call()
      setAmount(tokenAmount)
      console.log(amount)

    }
  }

  // useEffect(()=>{
  //   loadBlockChainData()
  // },[])

  useEffect(()=>{
    loadBlockChainData()
  },[account,])

  useEffect(()=>{
    loadBlockChainData()
  },[])

  useEffect(()=>{
    loadTokenAmountData()
  },[account,amount])
  
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
  
  return (
    <Layout account={account} login={connectHandler} logout={disconnectHandler}>
      <Component {...pageProps} account={account} amount={amount} click={connectHandler} buyclick={buyHandler} contract={JuroTokenContract} logout={disconnectHandler}/>
    </Layout>
  );
}

export default MyApp;
