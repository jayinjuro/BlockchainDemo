module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "./build/contracts/JuroToken.json":
/*!****************************************!*\
  !*** ./build/contracts/JuroToken.json ***!
  \****************************************/
/*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, immutableReferences, generatedSources, deployedGeneratedSources, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, networkType, devdoc, userdoc, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"contractName\":\"JuroToken\",\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"_totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"remaining\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true},{\"inputs\":[],\"name\":\"getToken\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"payable\",\"type\":\"function\",\"payable\":true}],\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.8.10+commit.fc410830\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"inputs\\\":[],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"constructor\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":true,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"owner\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":true,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"spender\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"value\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"Approval\\\",\\\"type\\\":\\\"event\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":true,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"from\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":true,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"to\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"value\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"Transfer\\\",\\\"type\\\":\\\"event\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"_totalSupply\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"tokenOwner\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"spender\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"allowance\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"remaining\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"spender\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"tokens\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"approve\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"success\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"tokenOwner\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"balanceOf\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"balance\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"decimals\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint8\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint8\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"getToken\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"payable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"name\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"symbol\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"totalSupply\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"to\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"tokens\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"transfer\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"success\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"from\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"to\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"tokens\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"transferFrom\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"success\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"}],\\\"devdoc\\\":{\\\"kind\\\":\\\"dev\\\",\\\"methods\\\":{},\\\"version\\\":1},\\\"userdoc\\\":{\\\"kind\\\":\\\"user\\\",\\\"methods\\\":{},\\\"notice\\\":\\\"ERC20 Token, with the addition of symbol, name and decimals and assisted token transfers\\\",\\\"version\\\":1}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"/C/Users/turtl/TokenApp/contracts/JuroTokenContract.sol\\\":\\\"JuroToken\\\"},\\\"evmVersion\\\":\\\"london\\\",\\\"libraries\\\":{},\\\"metadata\\\":{\\\"bytecodeHash\\\":\\\"ipfs\\\"},\\\"optimizer\\\":{\\\"enabled\\\":false,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"/C/Users/turtl/TokenApp/contracts/JuroTokenContract.sol\\\":{\\\"keccak256\\\":\\\"0x5bc333f2062ad111a3757a78f82eba9c4015bced67c7e048b358b570bba47a1e\\\",\\\"license\\\":\\\"MIT\\\",\\\"urls\\\":[\\\"bzz-raw://aa3d6577b96a73583d11a9b61f1bc61e2e81d467bec5e6a0daa195c71e141d6f\\\",\\\"dweb:/ipfs/QmP4MuuRzvMA1jQNXX5qoBZH7ncfqoR4eYM5Nw856Gvg9C\\\"]}},\\\"version\\\":1}\",\"bytecode\":\"0x60806040523480156200001157600080fd5b506040518060400160405280600481526020017f4a75726f00000000000000000000000000000000000000000000000000000000815250600090805190602001906200005f929190620001b1565b506040518060400160405280600a81526020017f4a75726f20546f6b656e0000000000000000000000000000000000000000000081525060019080519060200190620000ad929190620001b1565b5060028060006101000a81548160ff021916908360ff160217905550620186a060038190555060035460046000735b1030dcd0af8b77b83e1b52e01864a79bed32ed73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550735b1030dcd0af8b77b83e1b52e01864a79bed32ed73ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600354604051620001a391906200027c565b60405180910390a3620002fe565b828054620001bf90620002c8565b90600052602060002090601f016020900481019282620001e357600085556200022f565b82601f10620001fe57805160ff19168380011785556200022f565b828001600101855582156200022f579182015b828111156200022e57825182559160200191906001019062000211565b5b5090506200023e919062000242565b5090565b5b808211156200025d57600081600090555060010162000243565b5090565b6000819050919050565b620002768162000261565b82525050565b60006020820190506200029360008301846200026b565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002e157607f821691505b60208210811415620002f857620002f762000299565b5b50919050565b611008806200030e6000396000f3fe60806040526004361061009c5760003560e01c8063313ce56711610064578063313ce5671461018f5780633eaaf86b146101ba57806370a08231146101e557806395d89b4114610222578063a9059cbb1461024d578063dd62ed3e1461028a5761009c565b806306fdde03146100a1578063095ea7b3146100cc57806318160ddd1461010957806321df0da71461013457806323b872dd14610152575b600080fd5b3480156100ad57600080fd5b506100b66102c7565b6040516100c39190610c66565b60405180910390f35b3480156100d857600080fd5b506100f360048036038101906100ee9190610d21565b610355565b6040516101009190610d7c565b60405180910390f35b34801561011557600080fd5b5061011e610447565b60405161012b9190610da6565b60405180910390f35b61013c610499565b6040516101499190610d7c565b60405180910390f35b34801561015e57600080fd5b5061017960048036038101906101749190610dc1565b6105f7565b6040516101869190610d7c565b60405180910390f35b34801561019b57600080fd5b506101a4610887565b6040516101b19190610e30565b60405180910390f35b3480156101c657600080fd5b506101cf61089a565b6040516101dc9190610da6565b60405180910390f35b3480156101f157600080fd5b5061020c60048036038101906102079190610e4b565b6108a0565b6040516102199190610da6565b60405180910390f35b34801561022e57600080fd5b506102376108e9565b6040516102449190610c66565b60405180910390f35b34801561025957600080fd5b50610274600480360381019061026f9190610d21565b610977565b6040516102819190610d7c565b60405180910390f35b34801561029657600080fd5b506102b160048036038101906102ac9190610e78565b610b00565b6040516102be9190610da6565b60405180910390f35b600180546102d490610ee7565b80601f016020809104026020016040519081016040528092919081815260200182805461030090610ee7565b801561034d5780601f106103225761010080835404028352916020019161034d565b820191906000526020600020905b81548152906001019060200180831161033057829003601f168201915b505050505081565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516104359190610da6565b60405180910390a36001905092915050565b6000610494600354600460008073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610b87565b905090565b600066038d7ea4c6800034146104ae57600080fd5b61050c60046000735b1030dcd0af8b77b83e1b52e01864a79bed32ed73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600a610b87565b60046000735b1030dcd0af8b77b83e1b52e01864a79bed32ed73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506105ad600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600a610baa565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506001905090565b6000610642600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483610b87565b600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061070b600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483610b87565b600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506107d4600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483610baa565b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108749190610da6565b60405180910390a3600190509392505050565b600260009054906101000a900460ff1681565b60035481565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600080546108f690610ee7565b80601f016020809104026020016040519081016040528092919081815260200182805461092290610ee7565b801561096f5780601f106109445761010080835404028352916020019161096f565b820191906000526020600020905b81548152906001019060200180831161095257829003601f168201915b505050505081565b60006109c2600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483610b87565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610a4e600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483610baa565b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610aee9190610da6565b60405180910390a36001905092915050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600082821115610b9657600080fd5b8183610ba29190610f48565b905092915050565b60008183610bb89190610f7c565b905082811015610bc757600080fd5b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c07578082015181840152602081019050610bec565b83811115610c16576000848401525b50505050565b6000601f19601f8301169050919050565b6000610c3882610bcd565b610c428185610bd8565b9350610c52818560208601610be9565b610c5b81610c1c565b840191505092915050565b60006020820190508181036000830152610c808184610c2d565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610cb882610c8d565b9050919050565b610cc881610cad565b8114610cd357600080fd5b50565b600081359050610ce581610cbf565b92915050565b6000819050919050565b610cfe81610ceb565b8114610d0957600080fd5b50565b600081359050610d1b81610cf5565b92915050565b60008060408385031215610d3857610d37610c88565b5b6000610d4685828601610cd6565b9250506020610d5785828601610d0c565b9150509250929050565b60008115159050919050565b610d7681610d61565b82525050565b6000602082019050610d916000830184610d6d565b92915050565b610da081610ceb565b82525050565b6000602082019050610dbb6000830184610d97565b92915050565b600080600060608486031215610dda57610dd9610c88565b5b6000610de886828701610cd6565b9350506020610df986828701610cd6565b9250506040610e0a86828701610d0c565b9150509250925092565b600060ff82169050919050565b610e2a81610e14565b82525050565b6000602082019050610e456000830184610e21565b92915050565b600060208284031215610e6157610e60610c88565b5b6000610e6f84828501610cd6565b91505092915050565b60008060408385031215610e8f57610e8e610c88565b5b6000610e9d85828601610cd6565b9250506020610eae85828601610cd6565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610eff57607f821691505b60208210811415610f1357610f12610eb8565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610f5382610ceb565b9150610f5e83610ceb565b925082821015610f7157610f70610f19565b5b828203905092915050565b6000610f8782610ceb565b9150610f9283610ceb565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610fc757610fc6610f19565b5b82820190509291505056fea2646970667358221220f7bffee4ad68672b030a99e3b8bb5e243b1f1005de55e1577c6e6dcb5609d26264736f6c634300080a0033\",\"deployedBytecode\":\"0x60806040526004361061009c5760003560e01c8063313ce56711610064578063313ce5671461018f5780633eaaf86b146101ba57806370a08231146101e557806395d89b4114610222578063a9059cbb1461024d578063dd62ed3e1461028a5761009c565b806306fdde03146100a1578063095ea7b3146100cc57806318160ddd1461010957806321df0da71461013457806323b872dd14610152575b600080fd5b3480156100ad57600080fd5b506100b66102c7565b6040516100c39190610c66565b60405180910390f35b3480156100d857600080fd5b506100f360048036038101906100ee9190610d21565b610355565b6040516101009190610d7c565b60405180910390f35b34801561011557600080fd5b5061011e610447565b60405161012b9190610da6565b60405180910390f35b61013c610499565b6040516101499190610d7c565b60405180910390f35b34801561015e57600080fd5b5061017960048036038101906101749190610dc1565b6105f7565b6040516101869190610d7c565b60405180910390f35b34801561019b57600080fd5b506101a4610887565b6040516101b19190610e30565b60405180910390f35b3480156101c657600080fd5b506101cf61089a565b6040516101dc9190610da6565b60405180910390f35b3480156101f157600080fd5b5061020c60048036038101906102079190610e4b565b6108a0565b6040516102199190610da6565b60405180910390f35b34801561022e57600080fd5b506102376108e9565b6040516102449190610c66565b60405180910390f35b34801561025957600080fd5b50610274600480360381019061026f9190610d21565b610977565b6040516102819190610d7c565b60405180910390f35b34801561029657600080fd5b506102b160048036038101906102ac9190610e78565b610b00565b6040516102be9190610da6565b60405180910390f35b600180546102d490610ee7565b80601f016020809104026020016040519081016040528092919081815260200182805461030090610ee7565b801561034d5780601f106103225761010080835404028352916020019161034d565b820191906000526020600020905b81548152906001019060200180831161033057829003601f168201915b505050505081565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516104359190610da6565b60405180910390a36001905092915050565b6000610494600354600460008073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610b87565b905090565b600066038d7ea4c6800034146104ae57600080fd5b61050c60046000735b1030dcd0af8b77b83e1b52e01864a79bed32ed73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600a610b87565b60046000735b1030dcd0af8b77b83e1b52e01864a79bed32ed73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506105ad600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600a610baa565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506001905090565b6000610642600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483610b87565b600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061070b600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483610b87565b600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506107d4600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483610baa565b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108749190610da6565b60405180910390a3600190509392505050565b600260009054906101000a900460ff1681565b60035481565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600080546108f690610ee7565b80601f016020809104026020016040519081016040528092919081815260200182805461092290610ee7565b801561096f5780601f106109445761010080835404028352916020019161096f565b820191906000526020600020905b81548152906001019060200180831161095257829003601f168201915b505050505081565b60006109c2600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483610b87565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610a4e600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483610baa565b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610aee9190610da6565b60405180910390a36001905092915050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600082821115610b9657600080fd5b8183610ba29190610f48565b905092915050565b60008183610bb89190610f7c565b905082811015610bc757600080fd5b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c07578082015181840152602081019050610bec565b83811115610c16576000848401525b50505050565b6000601f19601f8301169050919050565b6000610c3882610bcd565b610c428185610bd8565b9350610c52818560208601610be9565b610c5b81610c1c565b840191505092915050565b60006020820190508181036000830152610c808184610c2d565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610cb882610c8d565b9050919050565b610cc881610cad565b8114610cd357600080fd5b50565b600081359050610ce581610cbf565b92915050565b6000819050919050565b610cfe81610ceb565b8114610d0957600080fd5b50565b600081359050610d1b81610cf5565b92915050565b60008060408385031215610d3857610d37610c88565b5b6000610d4685828601610cd6565b9250506020610d5785828601610d0c565b9150509250929050565b60008115159050919050565b610d7681610d61565b82525050565b6000602082019050610d916000830184610d6d565b92915050565b610da081610ceb565b82525050565b6000602082019050610dbb6000830184610d97565b92915050565b600080600060608486031215610dda57610dd9610c88565b5b6000610de886828701610cd6565b9350506020610df986828701610cd6565b9250506040610e0a86828701610d0c565b9150509250925092565b600060ff82169050919050565b610e2a81610e14565b82525050565b6000602082019050610e456000830184610e21565b92915050565b600060208284031215610e6157610e60610c88565b5b6000610e6f84828501610cd6565b91505092915050565b60008060408385031215610e8f57610e8e610c88565b5b6000610e9d85828601610cd6565b9250506020610eae85828601610cd6565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610eff57607f821691505b60208210811415610f1357610f12610eb8565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610f5382610ceb565b9150610f5e83610ceb565b925082821015610f7157610f70610f19565b5b828203905092915050565b6000610f8782610ceb565b9150610f9283610ceb565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610fc757610fc6610f19565b5b82820190509291505056fea2646970667358221220f7bffee4ad68672b030a99e3b8bb5e243b1f1005de55e1577c6e6dcb5609d26264736f6c634300080a0033\",\"immutableReferences\":{},\"generatedSources\":[{\"ast\":{\"nodeType\":\"YulBlock\",\"src\":\"0:951:1\",\"statements\":[{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"52:32:1\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"62:16:1\",\"value\":{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"73:5:1\"},\"variableNames\":[{\"name\":\"cleaned\",\"nodeType\":\"YulIdentifier\",\"src\":\"62:7:1\"}]}]},\"name\":\"cleanup_t_uint256\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"34:5:1\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"cleaned\",\"nodeType\":\"YulTypedName\",\"src\":\"44:7:1\",\"type\":\"\"}],\"src\":\"7:77:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"155:53:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"name\":\"pos\",\"nodeType\":\"YulIdentifier\",\"src\":\"172:3:1\"},{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"195:5:1\"}],\"functionName\":{\"name\":\"cleanup_t_uint256\",\"nodeType\":\"YulIdentifier\",\"src\":\"177:17:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"177:24:1\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"165:6:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"165:37:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"165:37:1\"}]},\"name\":\"abi_encode_t_uint256_to_t_uint256_fromStack\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"143:5:1\",\"type\":\"\"},{\"name\":\"pos\",\"nodeType\":\"YulTypedName\",\"src\":\"150:3:1\",\"type\":\"\"}],\"src\":\"90:118:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"312:124:1\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"322:26:1\",\"value\":{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"334:9:1\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"345:2:1\",\"type\":\"\",\"value\":\"32\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"330:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"330:18:1\"},\"variableNames\":[{\"name\":\"tail\",\"nodeType\":\"YulIdentifier\",\"src\":\"322:4:1\"}]},{\"expression\":{\"arguments\":[{\"name\":\"value0\",\"nodeType\":\"YulIdentifier\",\"src\":\"402:6:1\"},{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"415:9:1\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"426:1:1\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"411:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"411:17:1\"}],\"functionName\":{\"name\":\"abi_encode_t_uint256_to_t_uint256_fromStack\",\"nodeType\":\"YulIdentifier\",\"src\":\"358:43:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"358:71:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"358:71:1\"}]},\"name\":\"abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"headStart\",\"nodeType\":\"YulTypedName\",\"src\":\"284:9:1\",\"type\":\"\"},{\"name\":\"value0\",\"nodeType\":\"YulTypedName\",\"src\":\"296:6:1\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"tail\",\"nodeType\":\"YulTypedName\",\"src\":\"307:4:1\",\"type\":\"\"}],\"src\":\"214:222:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"470:152:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"487:1:1\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"490:77:1\",\"type\":\"\",\"value\":\"35408467139433450592217433187231851964531694900788300625387963629091585785856\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"480:6:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"480:88:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"480:88:1\"},{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"584:1:1\",\"type\":\"\",\"value\":\"4\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"587:4:1\",\"type\":\"\",\"value\":\"0x22\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"577:6:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"577:15:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"577:15:1\"},{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"608:1:1\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"611:4:1\",\"type\":\"\",\"value\":\"0x24\"}],\"functionName\":{\"name\":\"revert\",\"nodeType\":\"YulIdentifier\",\"src\":\"601:6:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"601:15:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"601:15:1\"}]},\"name\":\"panic_error_0x22\",\"nodeType\":\"YulFunctionDefinition\",\"src\":\"442:180:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"679:269:1\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"689:22:1\",\"value\":{\"arguments\":[{\"name\":\"data\",\"nodeType\":\"YulIdentifier\",\"src\":\"703:4:1\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"709:1:1\",\"type\":\"\",\"value\":\"2\"}],\"functionName\":{\"name\":\"div\",\"nodeType\":\"YulIdentifier\",\"src\":\"699:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"699:12:1\"},\"variableNames\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"689:6:1\"}]},{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"720:38:1\",\"value\":{\"arguments\":[{\"name\":\"data\",\"nodeType\":\"YulIdentifier\",\"src\":\"750:4:1\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"756:1:1\",\"type\":\"\",\"value\":\"1\"}],\"functionName\":{\"name\":\"and\",\"nodeType\":\"YulIdentifier\",\"src\":\"746:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"746:12:1\"},\"variables\":[{\"name\":\"outOfPlaceEncoding\",\"nodeType\":\"YulTypedName\",\"src\":\"724:18:1\",\"type\":\"\"}]},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"797:51:1\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"811:27:1\",\"value\":{\"arguments\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"825:6:1\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"833:4:1\",\"type\":\"\",\"value\":\"0x7f\"}],\"functionName\":{\"name\":\"and\",\"nodeType\":\"YulIdentifier\",\"src\":\"821:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"821:17:1\"},\"variableNames\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"811:6:1\"}]}]},\"condition\":{\"arguments\":[{\"name\":\"outOfPlaceEncoding\",\"nodeType\":\"YulIdentifier\",\"src\":\"777:18:1\"}],\"functionName\":{\"name\":\"iszero\",\"nodeType\":\"YulIdentifier\",\"src\":\"770:6:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"770:26:1\"},\"nodeType\":\"YulIf\",\"src\":\"767:81:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"900:42:1\",\"statements\":[{\"expression\":{\"arguments\":[],\"functionName\":{\"name\":\"panic_error_0x22\",\"nodeType\":\"YulIdentifier\",\"src\":\"914:16:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"914:18:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"914:18:1\"}]},\"condition\":{\"arguments\":[{\"name\":\"outOfPlaceEncoding\",\"nodeType\":\"YulIdentifier\",\"src\":\"864:18:1\"},{\"arguments\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"887:6:1\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"895:2:1\",\"type\":\"\",\"value\":\"32\"}],\"functionName\":{\"name\":\"lt\",\"nodeType\":\"YulIdentifier\",\"src\":\"884:2:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"884:14:1\"}],\"functionName\":{\"name\":\"eq\",\"nodeType\":\"YulIdentifier\",\"src\":\"861:2:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"861:38:1\"},\"nodeType\":\"YulIf\",\"src\":\"858:84:1\"}]},\"name\":\"extract_byte_array_length\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"data\",\"nodeType\":\"YulTypedName\",\"src\":\"663:4:1\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"length\",\"nodeType\":\"YulTypedName\",\"src\":\"672:6:1\",\"type\":\"\"}],\"src\":\"628:320:1\"}]},\"contents\":\"{\\n\\n    function cleanup_t_uint256(value) -> cleaned {\\n        cleaned := value\\n    }\\n\\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\\n        mstore(pos, cleanup_t_uint256(value))\\n    }\\n\\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\\n        tail := add(headStart, 32)\\n\\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\\n\\n    }\\n\\n    function panic_error_0x22() {\\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\\n        mstore(4, 0x22)\\n        revert(0, 0x24)\\n    }\\n\\n    function extract_byte_array_length(data) -> length {\\n        length := div(data, 2)\\n        let outOfPlaceEncoding := and(data, 1)\\n        if iszero(outOfPlaceEncoding) {\\n            length := and(length, 0x7f)\\n        }\\n\\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\\n            panic_error_0x22()\\n        }\\n    }\\n\\n}\\n\",\"id\":1,\"language\":\"Yul\",\"name\":\"#utility.yul\"}],\"deployedGeneratedSources\":[{\"ast\":{\"nodeType\":\"YulBlock\",\"src\":\"0:6919:1\",\"statements\":[{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"66:40:1\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"77:22:1\",\"value\":{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"93:5:1\"}],\"functionName\":{\"name\":\"mload\",\"nodeType\":\"YulIdentifier\",\"src\":\"87:5:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"87:12:1\"},\"variableNames\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"77:6:1\"}]}]},\"name\":\"array_length_t_string_memory_ptr\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"49:5:1\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"length\",\"nodeType\":\"YulTypedName\",\"src\":\"59:6:1\",\"type\":\"\"}],\"src\":\"7:99:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"208:73:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"name\":\"pos\",\"nodeType\":\"YulIdentifier\",\"src\":\"225:3:1\"},{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"230:6:1\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"218:6:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"218:19:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"218:19:1\"},{\"nodeType\":\"YulAssignment\",\"src\":\"246:29:1\",\"value\":{\"arguments\":[{\"name\":\"pos\",\"nodeType\":\"YulIdentifier\",\"src\":\"265:3:1\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"270:4:1\",\"type\":\"\",\"value\":\"0x20\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"261:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"261:14:1\"},\"variableNames\":[{\"name\":\"updated_pos\",\"nodeType\":\"YulIdentifier\",\"src\":\"246:11:1\"}]}]},\"name\":\"array_storeLengthForEncoding_t_string_memory_ptr_fromStack\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"pos\",\"nodeType\":\"YulTypedName\",\"src\":\"180:3:1\",\"type\":\"\"},{\"name\":\"length\",\"nodeType\":\"YulTypedName\",\"src\":\"185:6:1\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"updated_pos\",\"nodeType\":\"YulTypedName\",\"src\":\"196:11:1\",\"type\":\"\"}],\"src\":\"112:169:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"336:258:1\",\"statements\":[{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"346:10:1\",\"value\":{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"355:1:1\",\"type\":\"\",\"value\":\"0\"},\"variables\":[{\"name\":\"i\",\"nodeType\":\"YulTypedName\",\"src\":\"350:1:1\",\"type\":\"\"}]},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"415:63:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"arguments\":[{\"name\":\"dst\",\"nodeType\":\"YulIdentifier\",\"src\":\"440:3:1\"},{\"name\":\"i\",\"nodeType\":\"YulIdentifier\",\"src\":\"445:1:1\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"436:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"436:11:1\"},{\"arguments\":[{\"arguments\":[{\"name\":\"src\",\"nodeType\":\"YulIdentifier\",\"src\":\"459:3:1\"},{\"name\":\"i\",\"nodeType\":\"YulIdentifier\",\"src\":\"464:1:1\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"455:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"455:11:1\"}],\"functionName\":{\"name\":\"mload\",\"nodeType\":\"YulIdentifier\",\"src\":\"449:5:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"449:18:1\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"429:6:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"429:39:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"429:39:1\"}]},\"condition\":{\"arguments\":[{\"name\":\"i\",\"nodeType\":\"YulIdentifier\",\"src\":\"376:1:1\"},{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"379:6:1\"}],\"functionName\":{\"name\":\"lt\",\"nodeType\":\"YulIdentifier\",\"src\":\"373:2:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"373:13:1\"},\"nodeType\":\"YulForLoop\",\"post\":{\"nodeType\":\"YulBlock\",\"src\":\"387:19:1\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"389:15:1\",\"value\":{\"arguments\":[{\"name\":\"i\",\"nodeType\":\"YulIdentifier\",\"src\":\"398:1:1\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"401:2:1\",\"type\":\"\",\"value\":\"32\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"394:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"394:10:1\"},\"variableNames\":[{\"name\":\"i\",\"nodeType\":\"YulIdentifier\",\"src\":\"389:1:1\"}]}]},\"pre\":{\"nodeType\":\"YulBlock\",\"src\":\"369:3:1\",\"statements\":[]},\"src\":\"365:113:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"512:76:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"arguments\":[{\"name\":\"dst\",\"nodeType\":\"YulIdentifier\",\"src\":\"562:3:1\"},{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"567:6:1\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"558:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"558:16:1\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"576:1:1\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"551:6:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"551:27:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"551:27:1\"}]},\"condition\":{\"arguments\":[{\"name\":\"i\",\"nodeType\":\"YulIdentifier\",\"src\":\"493:1:1\"},{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"496:6:1\"}],\"functionName\":{\"name\":\"gt\",\"nodeType\":\"YulIdentifier\",\"src\":\"490:2:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"490:13:1\"},\"nodeType\":\"YulIf\",\"src\":\"487:101:1\"}]},\"name\":\"copy_memory_to_memory\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"src\",\"nodeType\":\"YulTypedName\",\"src\":\"318:3:1\",\"type\":\"\"},{\"name\":\"dst\",\"nodeType\":\"YulTypedName\",\"src\":\"323:3:1\",\"type\":\"\"},{\"name\":\"length\",\"nodeType\":\"YulTypedName\",\"src\":\"328:6:1\",\"type\":\"\"}],\"src\":\"287:307:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"648:54:1\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"658:38:1\",\"value\":{\"arguments\":[{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"676:5:1\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"683:2:1\",\"type\":\"\",\"value\":\"31\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"672:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"672:14:1\"},{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"692:2:1\",\"type\":\"\",\"value\":\"31\"}],\"functionName\":{\"name\":\"not\",\"nodeType\":\"YulIdentifier\",\"src\":\"688:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"688:7:1\"}],\"functionName\":{\"name\":\"and\",\"nodeType\":\"YulIdentifier\",\"src\":\"668:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"668:28:1\"},\"variableNames\":[{\"name\":\"result\",\"nodeType\":\"YulIdentifier\",\"src\":\"658:6:1\"}]}]},\"name\":\"round_up_to_mul_of_32\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"631:5:1\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"result\",\"nodeType\":\"YulTypedName\",\"src\":\"641:6:1\",\"type\":\"\"}],\"src\":\"600:102:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"800:272:1\",\"statements\":[{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"810:53:1\",\"value\":{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"857:5:1\"}],\"functionName\":{\"name\":\"array_length_t_string_memory_ptr\",\"nodeType\":\"YulIdentifier\",\"src\":\"824:32:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"824:39:1\"},\"variables\":[{\"name\":\"length\",\"nodeType\":\"YulTypedName\",\"src\":\"814:6:1\",\"type\":\"\"}]},{\"nodeType\":\"YulAssignment\",\"src\":\"872:78:1\",\"value\":{\"arguments\":[{\"name\":\"pos\",\"nodeType\":\"YulIdentifier\",\"src\":\"938:3:1\"},{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"943:6:1\"}],\"functionName\":{\"name\":\"array_storeLengthForEncoding_t_string_memory_ptr_fromStack\",\"nodeType\":\"YulIdentifier\",\"src\":\"879:58:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"879:71:1\"},\"variableNames\":[{\"name\":\"pos\",\"nodeType\":\"YulIdentifier\",\"src\":\"872:3:1\"}]},{\"expression\":{\"arguments\":[{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"985:5:1\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"992:4:1\",\"type\":\"\",\"value\":\"0x20\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"981:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"981:16:1\"},{\"name\":\"pos\",\"nodeType\":\"YulIdentifier\",\"src\":\"999:3:1\"},{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"1004:6:1\"}],\"functionName\":{\"name\":\"copy_memory_to_memory\",\"nodeType\":\"YulIdentifier\",\"src\":\"959:21:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"959:52:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"959:52:1\"},{\"nodeType\":\"YulAssignment\",\"src\":\"1020:46:1\",\"value\":{\"arguments\":[{\"name\":\"pos\",\"nodeType\":\"YulIdentifier\",\"src\":\"1031:3:1\"},{\"arguments\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"1058:6:1\"}],\"functionName\":{\"name\":\"round_up_to_mul_of_32\",\"nodeType\":\"YulIdentifier\",\"src\":\"1036:21:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1036:29:1\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"1027:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1027:39:1\"},\"variableNames\":[{\"name\":\"end\",\"nodeType\":\"YulIdentifier\",\"src\":\"1020:3:1\"}]}]},\"name\":\"abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"781:5:1\",\"type\":\"\"},{\"name\":\"pos\",\"nodeType\":\"YulTypedName\",\"src\":\"788:3:1\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"end\",\"nodeType\":\"YulTypedName\",\"src\":\"796:3:1\",\"type\":\"\"}],\"src\":\"708:364:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"1196:195:1\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"1206:26:1\",\"value\":{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"1218:9:1\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"1229:2:1\",\"type\":\"\",\"value\":\"32\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"1214:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1214:18:1\"},\"variableNames\":[{\"name\":\"tail\",\"nodeType\":\"YulIdentifier\",\"src\":\"1206:4:1\"}]},{\"expression\":{\"arguments\":[{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"1253:9:1\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"1264:1:1\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"1249:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1249:17:1\"},{\"arguments\":[{\"name\":\"tail\",\"nodeType\":\"YulIdentifier\",\"src\":\"1272:4:1\"},{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"1278:9:1\"}],\"functionName\":{\"name\":\"sub\",\"nodeType\":\"YulIdentifier\",\"src\":\"1268:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1268:20:1\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"1242:6:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1242:47:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"1242:47:1\"},{\"nodeType\":\"YulAssignment\",\"src\":\"1298:86:1\",\"value\":{\"arguments\":[{\"name\":\"value0\",\"nodeType\":\"YulIdentifier\",\"src\":\"1370:6:1\"},{\"name\":\"tail\",\"nodeType\":\"YulIdentifier\",\"src\":\"1379:4:1\"}],\"functionName\":{\"name\":\"abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack\",\"nodeType\":\"YulIdentifier\",\"src\":\"1306:63:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1306:78:1\"},\"variableNames\":[{\"name\":\"tail\",\"nodeType\":\"YulIdentifier\",\"src\":\"1298:4:1\"}]}]},\"name\":\"abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"headStart\",\"nodeType\":\"YulTypedName\",\"src\":\"1168:9:1\",\"type\":\"\"},{\"name\":\"value0\",\"nodeType\":\"YulTypedName\",\"src\":\"1180:6:1\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"tail\",\"nodeType\":\"YulTypedName\",\"src\":\"1191:4:1\",\"type\":\"\"}],\"src\":\"1078:313:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"1437:35:1\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"1447:19:1\",\"value\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"1463:2:1\",\"type\":\"\",\"value\":\"64\"}],\"functionName\":{\"name\":\"mload\",\"nodeType\":\"YulIdentifier\",\"src\":\"1457:5:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1457:9:1\"},\"variableNames\":[{\"name\":\"memPtr\",\"nodeType\":\"YulIdentifier\",\"src\":\"1447:6:1\"}]}]},\"name\":\"allocate_unbounded\",\"nodeType\":\"YulFunctionDefinition\",\"returnVariables\":[{\"name\":\"memPtr\",\"nodeType\":\"YulTypedName\",\"src\":\"1430:6:1\",\"type\":\"\"}],\"src\":\"1397:75:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"1567:28:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"1584:1:1\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"1587:1:1\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"revert\",\"nodeType\":\"YulIdentifier\",\"src\":\"1577:6:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1577:12:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"1577:12:1\"}]},\"name\":\"revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b\",\"nodeType\":\"YulFunctionDefinition\",\"src\":\"1478:117:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"1690:28:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"1707:1:1\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"1710:1:1\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"revert\",\"nodeType\":\"YulIdentifier\",\"src\":\"1700:6:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1700:12:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"1700:12:1\"}]},\"name\":\"revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db\",\"nodeType\":\"YulFunctionDefinition\",\"src\":\"1601:117:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"1769:81:1\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"1779:65:1\",\"value\":{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"1794:5:1\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"1801:42:1\",\"type\":\"\",\"value\":\"0xffffffffffffffffffffffffffffffffffffffff\"}],\"functionName\":{\"name\":\"and\",\"nodeType\":\"YulIdentifier\",\"src\":\"1790:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1790:54:1\"},\"variableNames\":[{\"name\":\"cleaned\",\"nodeType\":\"YulIdentifier\",\"src\":\"1779:7:1\"}]}]},\"name\":\"cleanup_t_uint160\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"1751:5:1\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"cleaned\",\"nodeType\":\"YulTypedName\",\"src\":\"1761:7:1\",\"type\":\"\"}],\"src\":\"1724:126:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"1901:51:1\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"1911:35:1\",\"value\":{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"1940:5:1\"}],\"functionName\":{\"name\":\"cleanup_t_uint160\",\"nodeType\":\"YulIdentifier\",\"src\":\"1922:17:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1922:24:1\"},\"variableNames\":[{\"name\":\"cleaned\",\"nodeType\":\"YulIdentifier\",\"src\":\"1911:7:1\"}]}]},\"name\":\"cleanup_t_address\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"1883:5:1\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"cleaned\",\"nodeType\":\"YulTypedName\",\"src\":\"1893:7:1\",\"type\":\"\"}],\"src\":\"1856:96:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"2001:79:1\",\"statements\":[{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"2058:16:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"2067:1:1\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"2070:1:1\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"revert\",\"nodeType\":\"YulIdentifier\",\"src\":\"2060:6:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2060:12:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"2060:12:1\"}]},\"condition\":{\"arguments\":[{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"2024:5:1\"},{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"2049:5:1\"}],\"functionName\":{\"name\":\"cleanup_t_address\",\"nodeType\":\"YulIdentifier\",\"src\":\"2031:17:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2031:24:1\"}],\"functionName\":{\"name\":\"eq\",\"nodeType\":\"YulIdentifier\",\"src\":\"2021:2:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2021:35:1\"}],\"functionName\":{\"name\":\"iszero\",\"nodeType\":\"YulIdentifier\",\"src\":\"2014:6:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2014:43:1\"},\"nodeType\":\"YulIf\",\"src\":\"2011:63:1\"}]},\"name\":\"validator_revert_t_address\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"1994:5:1\",\"type\":\"\"}],\"src\":\"1958:122:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"2138:87:1\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"2148:29:1\",\"value\":{\"arguments\":[{\"name\":\"offset\",\"nodeType\":\"YulIdentifier\",\"src\":\"2170:6:1\"}],\"functionName\":{\"name\":\"calldataload\",\"nodeType\":\"YulIdentifier\",\"src\":\"2157:12:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2157:20:1\"},\"variableNames\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"2148:5:1\"}]},{\"expression\":{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"2213:5:1\"}],\"functionName\":{\"name\":\"validator_revert_t_address\",\"nodeType\":\"YulIdentifier\",\"src\":\"2186:26:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2186:33:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"2186:33:1\"}]},\"name\":\"abi_decode_t_address\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"offset\",\"nodeType\":\"YulTypedName\",\"src\":\"2116:6:1\",\"type\":\"\"},{\"name\":\"end\",\"nodeType\":\"YulTypedName\",\"src\":\"2124:3:1\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"2132:5:1\",\"type\":\"\"}],\"src\":\"2086:139:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"2276:32:1\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"2286:16:1\",\"value\":{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"2297:5:1\"},\"variableNames\":[{\"name\":\"cleaned\",\"nodeType\":\"YulIdentifier\",\"src\":\"2286:7:1\"}]}]},\"name\":\"cleanup_t_uint256\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"2258:5:1\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"cleaned\",\"nodeType\":\"YulTypedName\",\"src\":\"2268:7:1\",\"type\":\"\"}],\"src\":\"2231:77:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"2357:79:1\",\"statements\":[{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"2414:16:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"2423:1:1\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"2426:1:1\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"revert\",\"nodeType\":\"YulIdentifier\",\"src\":\"2416:6:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2416:12:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"2416:12:1\"}]},\"condition\":{\"arguments\":[{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"2380:5:1\"},{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"2405:5:1\"}],\"functionName\":{\"name\":\"cleanup_t_uint256\",\"nodeType\":\"YulIdentifier\",\"src\":\"2387:17:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2387:24:1\"}],\"functionName\":{\"name\":\"eq\",\"nodeType\":\"YulIdentifier\",\"src\":\"2377:2:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2377:35:1\"}],\"functionName\":{\"name\":\"iszero\",\"nodeType\":\"YulIdentifier\",\"src\":\"2370:6:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2370:43:1\"},\"nodeType\":\"YulIf\",\"src\":\"2367:63:1\"}]},\"name\":\"validator_revert_t_uint256\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"2350:5:1\",\"type\":\"\"}],\"src\":\"2314:122:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"2494:87:1\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"2504:29:1\",\"value\":{\"arguments\":[{\"name\":\"offset\",\"nodeType\":\"YulIdentifier\",\"src\":\"2526:6:1\"}],\"functionName\":{\"name\":\"calldataload\",\"nodeType\":\"YulIdentifier\",\"src\":\"2513:12:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2513:20:1\"},\"variableNames\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"2504:5:1\"}]},{\"expression\":{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"2569:5:1\"}],\"functionName\":{\"name\":\"validator_revert_t_uint256\",\"nodeType\":\"YulIdentifier\",\"src\":\"2542:26:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2542:33:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"2542:33:1\"}]},\"name\":\"abi_decode_t_uint256\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"offset\",\"nodeType\":\"YulTypedName\",\"src\":\"2472:6:1\",\"type\":\"\"},{\"name\":\"end\",\"nodeType\":\"YulTypedName\",\"src\":\"2480:3:1\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"2488:5:1\",\"type\":\"\"}],\"src\":\"2442:139:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"2670:391:1\",\"statements\":[{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"2716:83:1\",\"statements\":[{\"expression\":{\"arguments\":[],\"functionName\":{\"name\":\"revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b\",\"nodeType\":\"YulIdentifier\",\"src\":\"2718:77:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2718:79:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"2718:79:1\"}]},\"condition\":{\"arguments\":[{\"arguments\":[{\"name\":\"dataEnd\",\"nodeType\":\"YulIdentifier\",\"src\":\"2691:7:1\"},{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"2700:9:1\"}],\"functionName\":{\"name\":\"sub\",\"nodeType\":\"YulIdentifier\",\"src\":\"2687:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2687:23:1\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"2712:2:1\",\"type\":\"\",\"value\":\"64\"}],\"functionName\":{\"name\":\"slt\",\"nodeType\":\"YulIdentifier\",\"src\":\"2683:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2683:32:1\"},\"nodeType\":\"YulIf\",\"src\":\"2680:119:1\"},{\"nodeType\":\"YulBlock\",\"src\":\"2809:117:1\",\"statements\":[{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"2824:15:1\",\"value\":{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"2838:1:1\",\"type\":\"\",\"value\":\"0\"},\"variables\":[{\"name\":\"offset\",\"nodeType\":\"YulTypedName\",\"src\":\"2828:6:1\",\"type\":\"\"}]},{\"nodeType\":\"YulAssignment\",\"src\":\"2853:63:1\",\"value\":{\"arguments\":[{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"2888:9:1\"},{\"name\":\"offset\",\"nodeType\":\"YulIdentifier\",\"src\":\"2899:6:1\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"2884:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2884:22:1\"},{\"name\":\"dataEnd\",\"nodeType\":\"YulIdentifier\",\"src\":\"2908:7:1\"}],\"functionName\":{\"name\":\"abi_decode_t_address\",\"nodeType\":\"YulIdentifier\",\"src\":\"2863:20:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2863:53:1\"},\"variableNames\":[{\"name\":\"value0\",\"nodeType\":\"YulIdentifier\",\"src\":\"2853:6:1\"}]}]},{\"nodeType\":\"YulBlock\",\"src\":\"2936:118:1\",\"statements\":[{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"2951:16:1\",\"value\":{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"2965:2:1\",\"type\":\"\",\"value\":\"32\"},\"variables\":[{\"name\":\"offset\",\"nodeType\":\"YulTypedName\",\"src\":\"2955:6:1\",\"type\":\"\"}]},{\"nodeType\":\"YulAssignment\",\"src\":\"2981:63:1\",\"value\":{\"arguments\":[{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"3016:9:1\"},{\"name\":\"offset\",\"nodeType\":\"YulIdentifier\",\"src\":\"3027:6:1\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"3012:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3012:22:1\"},{\"name\":\"dataEnd\",\"nodeType\":\"YulIdentifier\",\"src\":\"3036:7:1\"}],\"functionName\":{\"name\":\"abi_decode_t_uint256\",\"nodeType\":\"YulIdentifier\",\"src\":\"2991:20:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2991:53:1\"},\"variableNames\":[{\"name\":\"value1\",\"nodeType\":\"YulIdentifier\",\"src\":\"2981:6:1\"}]}]}]},\"name\":\"abi_decode_tuple_t_addresst_uint256\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"headStart\",\"nodeType\":\"YulTypedName\",\"src\":\"2632:9:1\",\"type\":\"\"},{\"name\":\"dataEnd\",\"nodeType\":\"YulTypedName\",\"src\":\"2643:7:1\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"value0\",\"nodeType\":\"YulTypedName\",\"src\":\"2655:6:1\",\"type\":\"\"},{\"name\":\"value1\",\"nodeType\":\"YulTypedName\",\"src\":\"2663:6:1\",\"type\":\"\"}],\"src\":\"2587:474:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"3109:48:1\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"3119:32:1\",\"value\":{\"arguments\":[{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"3144:5:1\"}],\"functionName\":{\"name\":\"iszero\",\"nodeType\":\"YulIdentifier\",\"src\":\"3137:6:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3137:13:1\"}],\"functionName\":{\"name\":\"iszero\",\"nodeType\":\"YulIdentifier\",\"src\":\"3130:6:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3130:21:1\"},\"variableNames\":[{\"name\":\"cleaned\",\"nodeType\":\"YulIdentifier\",\"src\":\"3119:7:1\"}]}]},\"name\":\"cleanup_t_bool\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"3091:5:1\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"cleaned\",\"nodeType\":\"YulTypedName\",\"src\":\"3101:7:1\",\"type\":\"\"}],\"src\":\"3067:90:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"3222:50:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"name\":\"pos\",\"nodeType\":\"YulIdentifier\",\"src\":\"3239:3:1\"},{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"3259:5:1\"}],\"functionName\":{\"name\":\"cleanup_t_bool\",\"nodeType\":\"YulIdentifier\",\"src\":\"3244:14:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3244:21:1\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"3232:6:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3232:34:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"3232:34:1\"}]},\"name\":\"abi_encode_t_bool_to_t_bool_fromStack\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"3210:5:1\",\"type\":\"\"},{\"name\":\"pos\",\"nodeType\":\"YulTypedName\",\"src\":\"3217:3:1\",\"type\":\"\"}],\"src\":\"3163:109:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"3370:118:1\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"3380:26:1\",\"value\":{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"3392:9:1\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"3403:2:1\",\"type\":\"\",\"value\":\"32\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"3388:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3388:18:1\"},\"variableNames\":[{\"name\":\"tail\",\"nodeType\":\"YulIdentifier\",\"src\":\"3380:4:1\"}]},{\"expression\":{\"arguments\":[{\"name\":\"value0\",\"nodeType\":\"YulIdentifier\",\"src\":\"3454:6:1\"},{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"3467:9:1\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"3478:1:1\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"3463:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3463:17:1\"}],\"functionName\":{\"name\":\"abi_encode_t_bool_to_t_bool_fromStack\",\"nodeType\":\"YulIdentifier\",\"src\":\"3416:37:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3416:65:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"3416:65:1\"}]},\"name\":\"abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"headStart\",\"nodeType\":\"YulTypedName\",\"src\":\"3342:9:1\",\"type\":\"\"},{\"name\":\"value0\",\"nodeType\":\"YulTypedName\",\"src\":\"3354:6:1\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"tail\",\"nodeType\":\"YulTypedName\",\"src\":\"3365:4:1\",\"type\":\"\"}],\"src\":\"3278:210:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"3559:53:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"name\":\"pos\",\"nodeType\":\"YulIdentifier\",\"src\":\"3576:3:1\"},{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"3599:5:1\"}],\"functionName\":{\"name\":\"cleanup_t_uint256\",\"nodeType\":\"YulIdentifier\",\"src\":\"3581:17:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3581:24:1\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"3569:6:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3569:37:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"3569:37:1\"}]},\"name\":\"abi_encode_t_uint256_to_t_uint256_fromStack\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"3547:5:1\",\"type\":\"\"},{\"name\":\"pos\",\"nodeType\":\"YulTypedName\",\"src\":\"3554:3:1\",\"type\":\"\"}],\"src\":\"3494:118:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"3716:124:1\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"3726:26:1\",\"value\":{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"3738:9:1\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"3749:2:1\",\"type\":\"\",\"value\":\"32\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"3734:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3734:18:1\"},\"variableNames\":[{\"name\":\"tail\",\"nodeType\":\"YulIdentifier\",\"src\":\"3726:4:1\"}]},{\"expression\":{\"arguments\":[{\"name\":\"value0\",\"nodeType\":\"YulIdentifier\",\"src\":\"3806:6:1\"},{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"3819:9:1\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"3830:1:1\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"3815:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3815:17:1\"}],\"functionName\":{\"name\":\"abi_encode_t_uint256_to_t_uint256_fromStack\",\"nodeType\":\"YulIdentifier\",\"src\":\"3762:43:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3762:71:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"3762:71:1\"}]},\"name\":\"abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"headStart\",\"nodeType\":\"YulTypedName\",\"src\":\"3688:9:1\",\"type\":\"\"},{\"name\":\"value0\",\"nodeType\":\"YulTypedName\",\"src\":\"3700:6:1\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"tail\",\"nodeType\":\"YulTypedName\",\"src\":\"3711:4:1\",\"type\":\"\"}],\"src\":\"3618:222:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"3946:519:1\",\"statements\":[{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"3992:83:1\",\"statements\":[{\"expression\":{\"arguments\":[],\"functionName\":{\"name\":\"revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b\",\"nodeType\":\"YulIdentifier\",\"src\":\"3994:77:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3994:79:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"3994:79:1\"}]},\"condition\":{\"arguments\":[{\"arguments\":[{\"name\":\"dataEnd\",\"nodeType\":\"YulIdentifier\",\"src\":\"3967:7:1\"},{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"3976:9:1\"}],\"functionName\":{\"name\":\"sub\",\"nodeType\":\"YulIdentifier\",\"src\":\"3963:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3963:23:1\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"3988:2:1\",\"type\":\"\",\"value\":\"96\"}],\"functionName\":{\"name\":\"slt\",\"nodeType\":\"YulIdentifier\",\"src\":\"3959:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3959:32:1\"},\"nodeType\":\"YulIf\",\"src\":\"3956:119:1\"},{\"nodeType\":\"YulBlock\",\"src\":\"4085:117:1\",\"statements\":[{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"4100:15:1\",\"value\":{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"4114:1:1\",\"type\":\"\",\"value\":\"0\"},\"variables\":[{\"name\":\"offset\",\"nodeType\":\"YulTypedName\",\"src\":\"4104:6:1\",\"type\":\"\"}]},{\"nodeType\":\"YulAssignment\",\"src\":\"4129:63:1\",\"value\":{\"arguments\":[{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"4164:9:1\"},{\"name\":\"offset\",\"nodeType\":\"YulIdentifier\",\"src\":\"4175:6:1\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"4160:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4160:22:1\"},{\"name\":\"dataEnd\",\"nodeType\":\"YulIdentifier\",\"src\":\"4184:7:1\"}],\"functionName\":{\"name\":\"abi_decode_t_address\",\"nodeType\":\"YulIdentifier\",\"src\":\"4139:20:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4139:53:1\"},\"variableNames\":[{\"name\":\"value0\",\"nodeType\":\"YulIdentifier\",\"src\":\"4129:6:1\"}]}]},{\"nodeType\":\"YulBlock\",\"src\":\"4212:118:1\",\"statements\":[{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"4227:16:1\",\"value\":{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"4241:2:1\",\"type\":\"\",\"value\":\"32\"},\"variables\":[{\"name\":\"offset\",\"nodeType\":\"YulTypedName\",\"src\":\"4231:6:1\",\"type\":\"\"}]},{\"nodeType\":\"YulAssignment\",\"src\":\"4257:63:1\",\"value\":{\"arguments\":[{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"4292:9:1\"},{\"name\":\"offset\",\"nodeType\":\"YulIdentifier\",\"src\":\"4303:6:1\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"4288:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4288:22:1\"},{\"name\":\"dataEnd\",\"nodeType\":\"YulIdentifier\",\"src\":\"4312:7:1\"}],\"functionName\":{\"name\":\"abi_decode_t_address\",\"nodeType\":\"YulIdentifier\",\"src\":\"4267:20:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4267:53:1\"},\"variableNames\":[{\"name\":\"value1\",\"nodeType\":\"YulIdentifier\",\"src\":\"4257:6:1\"}]}]},{\"nodeType\":\"YulBlock\",\"src\":\"4340:118:1\",\"statements\":[{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"4355:16:1\",\"value\":{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"4369:2:1\",\"type\":\"\",\"value\":\"64\"},\"variables\":[{\"name\":\"offset\",\"nodeType\":\"YulTypedName\",\"src\":\"4359:6:1\",\"type\":\"\"}]},{\"nodeType\":\"YulAssignment\",\"src\":\"4385:63:1\",\"value\":{\"arguments\":[{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"4420:9:1\"},{\"name\":\"offset\",\"nodeType\":\"YulIdentifier\",\"src\":\"4431:6:1\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"4416:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4416:22:1\"},{\"name\":\"dataEnd\",\"nodeType\":\"YulIdentifier\",\"src\":\"4440:7:1\"}],\"functionName\":{\"name\":\"abi_decode_t_uint256\",\"nodeType\":\"YulIdentifier\",\"src\":\"4395:20:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4395:53:1\"},\"variableNames\":[{\"name\":\"value2\",\"nodeType\":\"YulIdentifier\",\"src\":\"4385:6:1\"}]}]}]},\"name\":\"abi_decode_tuple_t_addresst_addresst_uint256\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"headStart\",\"nodeType\":\"YulTypedName\",\"src\":\"3900:9:1\",\"type\":\"\"},{\"name\":\"dataEnd\",\"nodeType\":\"YulTypedName\",\"src\":\"3911:7:1\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"value0\",\"nodeType\":\"YulTypedName\",\"src\":\"3923:6:1\",\"type\":\"\"},{\"name\":\"value1\",\"nodeType\":\"YulTypedName\",\"src\":\"3931:6:1\",\"type\":\"\"},{\"name\":\"value2\",\"nodeType\":\"YulTypedName\",\"src\":\"3939:6:1\",\"type\":\"\"}],\"src\":\"3846:619:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"4514:43:1\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"4524:27:1\",\"value\":{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"4539:5:1\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"4546:4:1\",\"type\":\"\",\"value\":\"0xff\"}],\"functionName\":{\"name\":\"and\",\"nodeType\":\"YulIdentifier\",\"src\":\"4535:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4535:16:1\"},\"variableNames\":[{\"name\":\"cleaned\",\"nodeType\":\"YulIdentifier\",\"src\":\"4524:7:1\"}]}]},\"name\":\"cleanup_t_uint8\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"4496:5:1\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"cleaned\",\"nodeType\":\"YulTypedName\",\"src\":\"4506:7:1\",\"type\":\"\"}],\"src\":\"4471:86:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"4624:51:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"name\":\"pos\",\"nodeType\":\"YulIdentifier\",\"src\":\"4641:3:1\"},{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"4662:5:1\"}],\"functionName\":{\"name\":\"cleanup_t_uint8\",\"nodeType\":\"YulIdentifier\",\"src\":\"4646:15:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4646:22:1\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"4634:6:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4634:35:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"4634:35:1\"}]},\"name\":\"abi_encode_t_uint8_to_t_uint8_fromStack\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"4612:5:1\",\"type\":\"\"},{\"name\":\"pos\",\"nodeType\":\"YulTypedName\",\"src\":\"4619:3:1\",\"type\":\"\"}],\"src\":\"4563:112:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"4775:120:1\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"4785:26:1\",\"value\":{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"4797:9:1\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"4808:2:1\",\"type\":\"\",\"value\":\"32\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"4793:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4793:18:1\"},\"variableNames\":[{\"name\":\"tail\",\"nodeType\":\"YulIdentifier\",\"src\":\"4785:4:1\"}]},{\"expression\":{\"arguments\":[{\"name\":\"value0\",\"nodeType\":\"YulIdentifier\",\"src\":\"4861:6:1\"},{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"4874:9:1\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"4885:1:1\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"4870:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4870:17:1\"}],\"functionName\":{\"name\":\"abi_encode_t_uint8_to_t_uint8_fromStack\",\"nodeType\":\"YulIdentifier\",\"src\":\"4821:39:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4821:67:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"4821:67:1\"}]},\"name\":\"abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"headStart\",\"nodeType\":\"YulTypedName\",\"src\":\"4747:9:1\",\"type\":\"\"},{\"name\":\"value0\",\"nodeType\":\"YulTypedName\",\"src\":\"4759:6:1\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"tail\",\"nodeType\":\"YulTypedName\",\"src\":\"4770:4:1\",\"type\":\"\"}],\"src\":\"4681:214:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"4967:263:1\",\"statements\":[{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"5013:83:1\",\"statements\":[{\"expression\":{\"arguments\":[],\"functionName\":{\"name\":\"revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b\",\"nodeType\":\"YulIdentifier\",\"src\":\"5015:77:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"5015:79:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"5015:79:1\"}]},\"condition\":{\"arguments\":[{\"arguments\":[{\"name\":\"dataEnd\",\"nodeType\":\"YulIdentifier\",\"src\":\"4988:7:1\"},{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"4997:9:1\"}],\"functionName\":{\"name\":\"sub\",\"nodeType\":\"YulIdentifier\",\"src\":\"4984:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4984:23:1\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5009:2:1\",\"type\":\"\",\"value\":\"32\"}],\"functionName\":{\"name\":\"slt\",\"nodeType\":\"YulIdentifier\",\"src\":\"4980:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4980:32:1\"},\"nodeType\":\"YulIf\",\"src\":\"4977:119:1\"},{\"nodeType\":\"YulBlock\",\"src\":\"5106:117:1\",\"statements\":[{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"5121:15:1\",\"value\":{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5135:1:1\",\"type\":\"\",\"value\":\"0\"},\"variables\":[{\"name\":\"offset\",\"nodeType\":\"YulTypedName\",\"src\":\"5125:6:1\",\"type\":\"\"}]},{\"nodeType\":\"YulAssignment\",\"src\":\"5150:63:1\",\"value\":{\"arguments\":[{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"5185:9:1\"},{\"name\":\"offset\",\"nodeType\":\"YulIdentifier\",\"src\":\"5196:6:1\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"5181:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"5181:22:1\"},{\"name\":\"dataEnd\",\"nodeType\":\"YulIdentifier\",\"src\":\"5205:7:1\"}],\"functionName\":{\"name\":\"abi_decode_t_address\",\"nodeType\":\"YulIdentifier\",\"src\":\"5160:20:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"5160:53:1\"},\"variableNames\":[{\"name\":\"value0\",\"nodeType\":\"YulIdentifier\",\"src\":\"5150:6:1\"}]}]}]},\"name\":\"abi_decode_tuple_t_address\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"headStart\",\"nodeType\":\"YulTypedName\",\"src\":\"4937:9:1\",\"type\":\"\"},{\"name\":\"dataEnd\",\"nodeType\":\"YulTypedName\",\"src\":\"4948:7:1\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"value0\",\"nodeType\":\"YulTypedName\",\"src\":\"4960:6:1\",\"type\":\"\"}],\"src\":\"4901:329:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"5319:391:1\",\"statements\":[{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"5365:83:1\",\"statements\":[{\"expression\":{\"arguments\":[],\"functionName\":{\"name\":\"revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b\",\"nodeType\":\"YulIdentifier\",\"src\":\"5367:77:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"5367:79:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"5367:79:1\"}]},\"condition\":{\"arguments\":[{\"arguments\":[{\"name\":\"dataEnd\",\"nodeType\":\"YulIdentifier\",\"src\":\"5340:7:1\"},{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"5349:9:1\"}],\"functionName\":{\"name\":\"sub\",\"nodeType\":\"YulIdentifier\",\"src\":\"5336:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"5336:23:1\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5361:2:1\",\"type\":\"\",\"value\":\"64\"}],\"functionName\":{\"name\":\"slt\",\"nodeType\":\"YulIdentifier\",\"src\":\"5332:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"5332:32:1\"},\"nodeType\":\"YulIf\",\"src\":\"5329:119:1\"},{\"nodeType\":\"YulBlock\",\"src\":\"5458:117:1\",\"statements\":[{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"5473:15:1\",\"value\":{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5487:1:1\",\"type\":\"\",\"value\":\"0\"},\"variables\":[{\"name\":\"offset\",\"nodeType\":\"YulTypedName\",\"src\":\"5477:6:1\",\"type\":\"\"}]},{\"nodeType\":\"YulAssignment\",\"src\":\"5502:63:1\",\"value\":{\"arguments\":[{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"5537:9:1\"},{\"name\":\"offset\",\"nodeType\":\"YulIdentifier\",\"src\":\"5548:6:1\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"5533:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"5533:22:1\"},{\"name\":\"dataEnd\",\"nodeType\":\"YulIdentifier\",\"src\":\"5557:7:1\"}],\"functionName\":{\"name\":\"abi_decode_t_address\",\"nodeType\":\"YulIdentifier\",\"src\":\"5512:20:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"5512:53:1\"},\"variableNames\":[{\"name\":\"value0\",\"nodeType\":\"YulIdentifier\",\"src\":\"5502:6:1\"}]}]},{\"nodeType\":\"YulBlock\",\"src\":\"5585:118:1\",\"statements\":[{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"5600:16:1\",\"value\":{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5614:2:1\",\"type\":\"\",\"value\":\"32\"},\"variables\":[{\"name\":\"offset\",\"nodeType\":\"YulTypedName\",\"src\":\"5604:6:1\",\"type\":\"\"}]},{\"nodeType\":\"YulAssignment\",\"src\":\"5630:63:1\",\"value\":{\"arguments\":[{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"5665:9:1\"},{\"name\":\"offset\",\"nodeType\":\"YulIdentifier\",\"src\":\"5676:6:1\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"5661:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"5661:22:1\"},{\"name\":\"dataEnd\",\"nodeType\":\"YulIdentifier\",\"src\":\"5685:7:1\"}],\"functionName\":{\"name\":\"abi_decode_t_address\",\"nodeType\":\"YulIdentifier\",\"src\":\"5640:20:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"5640:53:1\"},\"variableNames\":[{\"name\":\"value1\",\"nodeType\":\"YulIdentifier\",\"src\":\"5630:6:1\"}]}]}]},\"name\":\"abi_decode_tuple_t_addresst_address\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"headStart\",\"nodeType\":\"YulTypedName\",\"src\":\"5281:9:1\",\"type\":\"\"},{\"name\":\"dataEnd\",\"nodeType\":\"YulTypedName\",\"src\":\"5292:7:1\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"value0\",\"nodeType\":\"YulTypedName\",\"src\":\"5304:6:1\",\"type\":\"\"},{\"name\":\"value1\",\"nodeType\":\"YulTypedName\",\"src\":\"5312:6:1\",\"type\":\"\"}],\"src\":\"5236:474:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"5744:152:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5761:1:1\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5764:77:1\",\"type\":\"\",\"value\":\"35408467139433450592217433187231851964531694900788300625387963629091585785856\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"5754:6:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"5754:88:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"5754:88:1\"},{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5858:1:1\",\"type\":\"\",\"value\":\"4\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5861:4:1\",\"type\":\"\",\"value\":\"0x22\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"5851:6:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"5851:15:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"5851:15:1\"},{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5882:1:1\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5885:4:1\",\"type\":\"\",\"value\":\"0x24\"}],\"functionName\":{\"name\":\"revert\",\"nodeType\":\"YulIdentifier\",\"src\":\"5875:6:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"5875:15:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"5875:15:1\"}]},\"name\":\"panic_error_0x22\",\"nodeType\":\"YulFunctionDefinition\",\"src\":\"5716:180:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"5953:269:1\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"5963:22:1\",\"value\":{\"arguments\":[{\"name\":\"data\",\"nodeType\":\"YulIdentifier\",\"src\":\"5977:4:1\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5983:1:1\",\"type\":\"\",\"value\":\"2\"}],\"functionName\":{\"name\":\"div\",\"nodeType\":\"YulIdentifier\",\"src\":\"5973:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"5973:12:1\"},\"variableNames\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"5963:6:1\"}]},{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"5994:38:1\",\"value\":{\"arguments\":[{\"name\":\"data\",\"nodeType\":\"YulIdentifier\",\"src\":\"6024:4:1\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"6030:1:1\",\"type\":\"\",\"value\":\"1\"}],\"functionName\":{\"name\":\"and\",\"nodeType\":\"YulIdentifier\",\"src\":\"6020:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"6020:12:1\"},\"variables\":[{\"name\":\"outOfPlaceEncoding\",\"nodeType\":\"YulTypedName\",\"src\":\"5998:18:1\",\"type\":\"\"}]},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"6071:51:1\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"6085:27:1\",\"value\":{\"arguments\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"6099:6:1\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"6107:4:1\",\"type\":\"\",\"value\":\"0x7f\"}],\"functionName\":{\"name\":\"and\",\"nodeType\":\"YulIdentifier\",\"src\":\"6095:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"6095:17:1\"},\"variableNames\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"6085:6:1\"}]}]},\"condition\":{\"arguments\":[{\"name\":\"outOfPlaceEncoding\",\"nodeType\":\"YulIdentifier\",\"src\":\"6051:18:1\"}],\"functionName\":{\"name\":\"iszero\",\"nodeType\":\"YulIdentifier\",\"src\":\"6044:6:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"6044:26:1\"},\"nodeType\":\"YulIf\",\"src\":\"6041:81:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"6174:42:1\",\"statements\":[{\"expression\":{\"arguments\":[],\"functionName\":{\"name\":\"panic_error_0x22\",\"nodeType\":\"YulIdentifier\",\"src\":\"6188:16:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"6188:18:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"6188:18:1\"}]},\"condition\":{\"arguments\":[{\"name\":\"outOfPlaceEncoding\",\"nodeType\":\"YulIdentifier\",\"src\":\"6138:18:1\"},{\"arguments\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"6161:6:1\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"6169:2:1\",\"type\":\"\",\"value\":\"32\"}],\"functionName\":{\"name\":\"lt\",\"nodeType\":\"YulIdentifier\",\"src\":\"6158:2:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"6158:14:1\"}],\"functionName\":{\"name\":\"eq\",\"nodeType\":\"YulIdentifier\",\"src\":\"6135:2:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"6135:38:1\"},\"nodeType\":\"YulIf\",\"src\":\"6132:84:1\"}]},\"name\":\"extract_byte_array_length\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"data\",\"nodeType\":\"YulTypedName\",\"src\":\"5937:4:1\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"length\",\"nodeType\":\"YulTypedName\",\"src\":\"5946:6:1\",\"type\":\"\"}],\"src\":\"5902:320:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"6256:152:1\",\"statements\":[{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"6273:1:1\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"6276:77:1\",\"type\":\"\",\"value\":\"35408467139433450592217433187231851964531694900788300625387963629091585785856\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"6266:6:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"6266:88:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"6266:88:1\"},{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"6370:1:1\",\"type\":\"\",\"value\":\"4\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"6373:4:1\",\"type\":\"\",\"value\":\"0x11\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"6363:6:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"6363:15:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"6363:15:1\"},{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"6394:1:1\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"6397:4:1\",\"type\":\"\",\"value\":\"0x24\"}],\"functionName\":{\"name\":\"revert\",\"nodeType\":\"YulIdentifier\",\"src\":\"6387:6:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"6387:15:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"6387:15:1\"}]},\"name\":\"panic_error_0x11\",\"nodeType\":\"YulFunctionDefinition\",\"src\":\"6228:180:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"6459:146:1\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"6469:25:1\",\"value\":{\"arguments\":[{\"name\":\"x\",\"nodeType\":\"YulIdentifier\",\"src\":\"6492:1:1\"}],\"functionName\":{\"name\":\"cleanup_t_uint256\",\"nodeType\":\"YulIdentifier\",\"src\":\"6474:17:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"6474:20:1\"},\"variableNames\":[{\"name\":\"x\",\"nodeType\":\"YulIdentifier\",\"src\":\"6469:1:1\"}]},{\"nodeType\":\"YulAssignment\",\"src\":\"6503:25:1\",\"value\":{\"arguments\":[{\"name\":\"y\",\"nodeType\":\"YulIdentifier\",\"src\":\"6526:1:1\"}],\"functionName\":{\"name\":\"cleanup_t_uint256\",\"nodeType\":\"YulIdentifier\",\"src\":\"6508:17:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"6508:20:1\"},\"variableNames\":[{\"name\":\"y\",\"nodeType\":\"YulIdentifier\",\"src\":\"6503:1:1\"}]},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"6550:22:1\",\"statements\":[{\"expression\":{\"arguments\":[],\"functionName\":{\"name\":\"panic_error_0x11\",\"nodeType\":\"YulIdentifier\",\"src\":\"6552:16:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"6552:18:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"6552:18:1\"}]},\"condition\":{\"arguments\":[{\"name\":\"x\",\"nodeType\":\"YulIdentifier\",\"src\":\"6544:1:1\"},{\"name\":\"y\",\"nodeType\":\"YulIdentifier\",\"src\":\"6547:1:1\"}],\"functionName\":{\"name\":\"lt\",\"nodeType\":\"YulIdentifier\",\"src\":\"6541:2:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"6541:8:1\"},\"nodeType\":\"YulIf\",\"src\":\"6538:34:1\"},{\"nodeType\":\"YulAssignment\",\"src\":\"6582:17:1\",\"value\":{\"arguments\":[{\"name\":\"x\",\"nodeType\":\"YulIdentifier\",\"src\":\"6594:1:1\"},{\"name\":\"y\",\"nodeType\":\"YulIdentifier\",\"src\":\"6597:1:1\"}],\"functionName\":{\"name\":\"sub\",\"nodeType\":\"YulIdentifier\",\"src\":\"6590:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"6590:9:1\"},\"variableNames\":[{\"name\":\"diff\",\"nodeType\":\"YulIdentifier\",\"src\":\"6582:4:1\"}]}]},\"name\":\"checked_sub_t_uint256\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"x\",\"nodeType\":\"YulTypedName\",\"src\":\"6445:1:1\",\"type\":\"\"},{\"name\":\"y\",\"nodeType\":\"YulTypedName\",\"src\":\"6448:1:1\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"diff\",\"nodeType\":\"YulTypedName\",\"src\":\"6454:4:1\",\"type\":\"\"}],\"src\":\"6414:191:1\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"6655:261:1\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"6665:25:1\",\"value\":{\"arguments\":[{\"name\":\"x\",\"nodeType\":\"YulIdentifier\",\"src\":\"6688:1:1\"}],\"functionName\":{\"name\":\"cleanup_t_uint256\",\"nodeType\":\"YulIdentifier\",\"src\":\"6670:17:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"6670:20:1\"},\"variableNames\":[{\"name\":\"x\",\"nodeType\":\"YulIdentifier\",\"src\":\"6665:1:1\"}]},{\"nodeType\":\"YulAssignment\",\"src\":\"6699:25:1\",\"value\":{\"arguments\":[{\"name\":\"y\",\"nodeType\":\"YulIdentifier\",\"src\":\"6722:1:1\"}],\"functionName\":{\"name\":\"cleanup_t_uint256\",\"nodeType\":\"YulIdentifier\",\"src\":\"6704:17:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"6704:20:1\"},\"variableNames\":[{\"name\":\"y\",\"nodeType\":\"YulIdentifier\",\"src\":\"6699:1:1\"}]},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"6862:22:1\",\"statements\":[{\"expression\":{\"arguments\":[],\"functionName\":{\"name\":\"panic_error_0x11\",\"nodeType\":\"YulIdentifier\",\"src\":\"6864:16:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"6864:18:1\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"6864:18:1\"}]},\"condition\":{\"arguments\":[{\"name\":\"x\",\"nodeType\":\"YulIdentifier\",\"src\":\"6783:1:1\"},{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"6790:66:1\",\"type\":\"\",\"value\":\"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\"},{\"name\":\"y\",\"nodeType\":\"YulIdentifier\",\"src\":\"6858:1:1\"}],\"functionName\":{\"name\":\"sub\",\"nodeType\":\"YulIdentifier\",\"src\":\"6786:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"6786:74:1\"}],\"functionName\":{\"name\":\"gt\",\"nodeType\":\"YulIdentifier\",\"src\":\"6780:2:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"6780:81:1\"},\"nodeType\":\"YulIf\",\"src\":\"6777:107:1\"},{\"nodeType\":\"YulAssignment\",\"src\":\"6894:16:1\",\"value\":{\"arguments\":[{\"name\":\"x\",\"nodeType\":\"YulIdentifier\",\"src\":\"6905:1:1\"},{\"name\":\"y\",\"nodeType\":\"YulIdentifier\",\"src\":\"6908:1:1\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"6901:3:1\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"6901:9:1\"},\"variableNames\":[{\"name\":\"sum\",\"nodeType\":\"YulIdentifier\",\"src\":\"6894:3:1\"}]}]},\"name\":\"checked_add_t_uint256\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"x\",\"nodeType\":\"YulTypedName\",\"src\":\"6642:1:1\",\"type\":\"\"},{\"name\":\"y\",\"nodeType\":\"YulTypedName\",\"src\":\"6645:1:1\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"sum\",\"nodeType\":\"YulTypedName\",\"src\":\"6651:3:1\",\"type\":\"\"}],\"src\":\"6611:305:1\"}]},\"contents\":\"{\\n\\n    function array_length_t_string_memory_ptr(value) -> length {\\n\\n        length := mload(value)\\n\\n    }\\n\\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\\n        mstore(pos, length)\\n        updated_pos := add(pos, 0x20)\\n    }\\n\\n    function copy_memory_to_memory(src, dst, length) {\\n        let i := 0\\n        for { } lt(i, length) { i := add(i, 32) }\\n        {\\n            mstore(add(dst, i), mload(add(src, i)))\\n        }\\n        if gt(i, length)\\n        {\\n            // clear end\\n            mstore(add(dst, length), 0)\\n        }\\n    }\\n\\n    function round_up_to_mul_of_32(value) -> result {\\n        result := and(add(value, 31), not(31))\\n    }\\n\\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\\n        let length := array_length_t_string_memory_ptr(value)\\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\\n        copy_memory_to_memory(add(value, 0x20), pos, length)\\n        end := add(pos, round_up_to_mul_of_32(length))\\n    }\\n\\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\\n        tail := add(headStart, 32)\\n\\n        mstore(add(headStart, 0), sub(tail, headStart))\\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\\n\\n    }\\n\\n    function allocate_unbounded() -> memPtr {\\n        memPtr := mload(64)\\n    }\\n\\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\\n        revert(0, 0)\\n    }\\n\\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\\n        revert(0, 0)\\n    }\\n\\n    function cleanup_t_uint160(value) -> cleaned {\\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\\n    }\\n\\n    function cleanup_t_address(value) -> cleaned {\\n        cleaned := cleanup_t_uint160(value)\\n    }\\n\\n    function validator_revert_t_address(value) {\\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\\n    }\\n\\n    function abi_decode_t_address(offset, end) -> value {\\n        value := calldataload(offset)\\n        validator_revert_t_address(value)\\n    }\\n\\n    function cleanup_t_uint256(value) -> cleaned {\\n        cleaned := value\\n    }\\n\\n    function validator_revert_t_uint256(value) {\\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\\n    }\\n\\n    function abi_decode_t_uint256(offset, end) -> value {\\n        value := calldataload(offset)\\n        validator_revert_t_uint256(value)\\n    }\\n\\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1 {\\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\\n\\n        {\\n\\n            let offset := 0\\n\\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\\n        }\\n\\n        {\\n\\n            let offset := 32\\n\\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\\n        }\\n\\n    }\\n\\n    function cleanup_t_bool(value) -> cleaned {\\n        cleaned := iszero(iszero(value))\\n    }\\n\\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\\n        mstore(pos, cleanup_t_bool(value))\\n    }\\n\\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\\n        tail := add(headStart, 32)\\n\\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\\n\\n    }\\n\\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\\n        mstore(pos, cleanup_t_uint256(value))\\n    }\\n\\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\\n        tail := add(headStart, 32)\\n\\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\\n\\n    }\\n\\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2 {\\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\\n\\n        {\\n\\n            let offset := 0\\n\\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\\n        }\\n\\n        {\\n\\n            let offset := 32\\n\\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\\n        }\\n\\n        {\\n\\n            let offset := 64\\n\\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\\n        }\\n\\n    }\\n\\n    function cleanup_t_uint8(value) -> cleaned {\\n        cleaned := and(value, 0xff)\\n    }\\n\\n    function abi_encode_t_uint8_to_t_uint8_fromStack(value, pos) {\\n        mstore(pos, cleanup_t_uint8(value))\\n    }\\n\\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart , value0) -> tail {\\n        tail := add(headStart, 32)\\n\\n        abi_encode_t_uint8_to_t_uint8_fromStack(value0,  add(headStart, 0))\\n\\n    }\\n\\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\\n\\n        {\\n\\n            let offset := 0\\n\\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\\n        }\\n\\n    }\\n\\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1 {\\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\\n\\n        {\\n\\n            let offset := 0\\n\\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\\n        }\\n\\n        {\\n\\n            let offset := 32\\n\\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\\n        }\\n\\n    }\\n\\n    function panic_error_0x22() {\\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\\n        mstore(4, 0x22)\\n        revert(0, 0x24)\\n    }\\n\\n    function extract_byte_array_length(data) -> length {\\n        length := div(data, 2)\\n        let outOfPlaceEncoding := and(data, 1)\\n        if iszero(outOfPlaceEncoding) {\\n            length := and(length, 0x7f)\\n        }\\n\\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\\n            panic_error_0x22()\\n        }\\n    }\\n\\n    function panic_error_0x11() {\\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\\n        mstore(4, 0x11)\\n        revert(0, 0x24)\\n    }\\n\\n    function checked_sub_t_uint256(x, y) -> diff {\\n        x := cleanup_t_uint256(x)\\n        y := cleanup_t_uint256(y)\\n\\n        if lt(x, y) { panic_error_0x11() }\\n\\n        diff := sub(x, y)\\n    }\\n\\n    function checked_add_t_uint256(x, y) -> sum {\\n        x := cleanup_t_uint256(x)\\n        y := cleanup_t_uint256(y)\\n\\n        // overflow, if x > (maxValue - y)\\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\\n\\n        sum := add(x, y)\\n    }\\n\\n}\\n\",\"id\":1,\"language\":\"Yul\",\"name\":\"#utility.yul\"}],\"sourceMap\":\"1443:4860:0:-:0;;;1888:337;;;;;;;;;;1913:15;;;;;;;;;;;;;;;;;:6;:15;;;;;;;;;;;;:::i;:::-;;1939:19;;;;;;;;;;;;;;;;;:4;:19;;;;;;;;;;;;:::i;:::-;;1980:1;1969:8;;:12;;;;;;;;;;;;;;;;;;2007:6;1992:12;:21;;;;2079:12;;2024:8;:52;2033:42;2024:52;;;;;;;;;;;;;;;:67;;;;2160:42;2107:110;;2116:42;2107:110;;;2204:12;;2107:110;;;;;;:::i;:::-;;;;;;;;1443:4860;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:77:1:-;44:7;73:5;62:16;;7:77;;;:::o;90:118::-;177:24;195:5;177:24;:::i;:::-;172:3;165:37;90:118;;:::o;214:222::-;307:4;345:2;334:9;330:18;322:26;;358:71;426:1;415:9;411:17;402:6;358:71;:::i;:::-;214:222;;;;:::o;442:180::-;490:77;487:1;480:88;587:4;584:1;577:15;611:4;608:1;601:15;628:320;672:6;709:1;703:4;699:12;689:22;;756:1;750:4;746:12;777:18;767:81;;833:4;825:6;821:17;811:27;;767:81;895:2;887:6;884:14;864:18;861:38;858:84;;;914:18;;:::i;:::-;858:84;679:269;628:320;;;:::o;1443:4860:0:-;;;;;;;\",\"deployedSourceMap\":\"1443:4860:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1516:19;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3997:217;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2418:159;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5658:284;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4750:367;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1542:21;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1570:24;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2802:130;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1489:20;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3281:286;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5405:156;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1516:19;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;3997:217::-;4069:12;4125:6;4094:7;:19;4102:10;4094:19;;;;;;;;;;;;;;;:28;4114:7;4094:28;;;;;;;;;;;;;;;:37;;;;4168:7;4147:37;;4156:10;4147:37;;;4177:6;4147:37;;;;;;:::i;:::-;;;;;;;;4202:4;4195:11;;3997:217;;;;:::o;2418:159::-;2471:4;2495:74;2503:12;;2516:8;:52;2525:42;2516:52;;;;;;;;;;;;;;;;2495:7;:74::i;:::-;2488:81;;2418:159;:::o;5658:284::-;5711:4;5618:11;5607:9;:22;5599:31;;;;;;5782:65:::1;5790:8;:52;5799:42;5790:52;;;;;;;;;;;;;;;;5844:2;5782:7;:65::i;:::-;5727:8;:52;5736:42;5727:52;;;;;;;;;;;;;;;:120;;;;5879:32;5887:8;:20;5896:10;5887:20;;;;;;;;;;;;;;;;5908:2;5879:7;:32::i;:::-;5858:8;:20;5867:10;5858:20;;;;;;;;;;;;;;;:53;;;;5929:4;5922:11;;5658:284:::0;:::o;4750:367::-;4836:12;4878:31;4886:8;:14;4895:4;4886:14;;;;;;;;;;;;;;;;4902:6;4878:7;:31::i;:::-;4861:8;:14;4870:4;4861:14;;;;;;;;;;;;;;;:48;;;;4948:42;4956:7;:13;4964:4;4956:13;;;;;;;;;;;;;;;:25;4970:10;4956:25;;;;;;;;;;;;;;;;4983:6;4948:7;:42::i;:::-;4920:7;:13;4928:4;4920:13;;;;;;;;;;;;;;;:25;4934:10;4920:25;;;;;;;;;;;;;;;:70;;;;5016:29;5024:8;:12;5033:2;5024:12;;;;;;;;;;;;;;;;5038:6;5016:7;:29::i;:::-;5001:8;:12;5010:2;5001:12;;;;;;;;;;;;;;;:44;;;;5076:2;5061:26;;5070:4;5061:26;;;5080:6;5061:26;;;;;;:::i;:::-;;;;;;;;5105:4;5098:11;;4750:367;;;;;:::o;1542:21::-;;;;;;;;;;;;;:::o;1570:24::-;;;;:::o;2802:130::-;2872:12;2904:8;:20;2913:10;2904:20;;;;;;;;;;;;;;;;2897:27;;2802:130;;;:::o;1489:20::-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;3281:286::-;3349:12;3397:37;3405:8;:20;3414:10;3405:20;;;;;;;;;;;;;;;;3427:6;3397:7;:37::i;:::-;3374:8;:20;3383:10;3374:20;;;;;;;;;;;;;;;:60;;;;3460:29;3468:8;:12;3477:2;3468:12;;;;;;;;;;;;;;;;3482:6;3460:7;:29::i;:::-;3445:8;:12;3454:2;3445:12;;;;;;;;;;;;;;;:44;;;;3526:2;3505:32;;3514:10;3505:32;;;3530:6;3505:32;;;;;;:::i;:::-;;;;;;;;3555:4;3548:11;;3281:286;;;;:::o;5405:156::-;5491:14;5525:7;:19;5533:10;5525:19;;;;;;;;;;;;;;;:28;5545:7;5525:28;;;;;;;;;;;;;;;;5518:35;;5405:156;;;;:::o;224:118::-;280:6;312:1;307;:6;;299:15;;;;;;333:1;329;:5;;;;:::i;:::-;325:9;;224:118;;;;:::o;98:::-;154:6;181:1;177;:5;;;;:::i;:::-;173:9;;206:1;201;:6;;193:15;;;;;;98:118;;;;:::o;7:99:1:-;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:169::-;196:11;230:6;225:3;218:19;270:4;265:3;261:14;246:29;;112:169;;;;:::o;287:307::-;355:1;365:113;379:6;376:1;373:13;365:113;;;464:1;459:3;455:11;449:18;445:1;440:3;436:11;429:39;401:2;398:1;394:10;389:15;;365:113;;;496:6;493:1;490:13;487:101;;;576:1;567:6;562:3;558:16;551:27;487:101;336:258;287:307;;;:::o;600:102::-;641:6;692:2;688:7;683:2;676:5;672:14;668:28;658:38;;600:102;;;:::o;708:364::-;796:3;824:39;857:5;824:39;:::i;:::-;879:71;943:6;938:3;879:71;:::i;:::-;872:78;;959:52;1004:6;999:3;992:4;985:5;981:16;959:52;:::i;:::-;1036:29;1058:6;1036:29;:::i;:::-;1031:3;1027:39;1020:46;;800:272;708:364;;;;:::o;1078:313::-;1191:4;1229:2;1218:9;1214:18;1206:26;;1278:9;1272:4;1268:20;1264:1;1253:9;1249:17;1242:47;1306:78;1379:4;1370:6;1306:78;:::i;:::-;1298:86;;1078:313;;;;:::o;1478:117::-;1587:1;1584;1577:12;1724:126;1761:7;1801:42;1794:5;1790:54;1779:65;;1724:126;;;:::o;1856:96::-;1893:7;1922:24;1940:5;1922:24;:::i;:::-;1911:35;;1856:96;;;:::o;1958:122::-;2031:24;2049:5;2031:24;:::i;:::-;2024:5;2021:35;2011:63;;2070:1;2067;2060:12;2011:63;1958:122;:::o;2086:139::-;2132:5;2170:6;2157:20;2148:29;;2186:33;2213:5;2186:33;:::i;:::-;2086:139;;;;:::o;2231:77::-;2268:7;2297:5;2286:16;;2231:77;;;:::o;2314:122::-;2387:24;2405:5;2387:24;:::i;:::-;2380:5;2377:35;2367:63;;2426:1;2423;2416:12;2367:63;2314:122;:::o;2442:139::-;2488:5;2526:6;2513:20;2504:29;;2542:33;2569:5;2542:33;:::i;:::-;2442:139;;;;:::o;2587:474::-;2655:6;2663;2712:2;2700:9;2691:7;2687:23;2683:32;2680:119;;;2718:79;;:::i;:::-;2680:119;2838:1;2863:53;2908:7;2899:6;2888:9;2884:22;2863:53;:::i;:::-;2853:63;;2809:117;2965:2;2991:53;3036:7;3027:6;3016:9;3012:22;2991:53;:::i;:::-;2981:63;;2936:118;2587:474;;;;;:::o;3067:90::-;3101:7;3144:5;3137:13;3130:21;3119:32;;3067:90;;;:::o;3163:109::-;3244:21;3259:5;3244:21;:::i;:::-;3239:3;3232:34;3163:109;;:::o;3278:210::-;3365:4;3403:2;3392:9;3388:18;3380:26;;3416:65;3478:1;3467:9;3463:17;3454:6;3416:65;:::i;:::-;3278:210;;;;:::o;3494:118::-;3581:24;3599:5;3581:24;:::i;:::-;3576:3;3569:37;3494:118;;:::o;3618:222::-;3711:4;3749:2;3738:9;3734:18;3726:26;;3762:71;3830:1;3819:9;3815:17;3806:6;3762:71;:::i;:::-;3618:222;;;;:::o;3846:619::-;3923:6;3931;3939;3988:2;3976:9;3967:7;3963:23;3959:32;3956:119;;;3994:79;;:::i;:::-;3956:119;4114:1;4139:53;4184:7;4175:6;4164:9;4160:22;4139:53;:::i;:::-;4129:63;;4085:117;4241:2;4267:53;4312:7;4303:6;4292:9;4288:22;4267:53;:::i;:::-;4257:63;;4212:118;4369:2;4395:53;4440:7;4431:6;4420:9;4416:22;4395:53;:::i;:::-;4385:63;;4340:118;3846:619;;;;;:::o;4471:86::-;4506:7;4546:4;4539:5;4535:16;4524:27;;4471:86;;;:::o;4563:112::-;4646:22;4662:5;4646:22;:::i;:::-;4641:3;4634:35;4563:112;;:::o;4681:214::-;4770:4;4808:2;4797:9;4793:18;4785:26;;4821:67;4885:1;4874:9;4870:17;4861:6;4821:67;:::i;:::-;4681:214;;;;:::o;4901:329::-;4960:6;5009:2;4997:9;4988:7;4984:23;4980:32;4977:119;;;5015:79;;:::i;:::-;4977:119;5135:1;5160:53;5205:7;5196:6;5185:9;5181:22;5160:53;:::i;:::-;5150:63;;5106:117;4901:329;;;;:::o;5236:474::-;5304:6;5312;5361:2;5349:9;5340:7;5336:23;5332:32;5329:119;;;5367:79;;:::i;:::-;5329:119;5487:1;5512:53;5557:7;5548:6;5537:9;5533:22;5512:53;:::i;:::-;5502:63;;5458:117;5614:2;5640:53;5685:7;5676:6;5665:9;5661:22;5640:53;:::i;:::-;5630:63;;5585:118;5236:474;;;;;:::o;5716:180::-;5764:77;5761:1;5754:88;5861:4;5858:1;5851:15;5885:4;5882:1;5875:15;5902:320;5946:6;5983:1;5977:4;5973:12;5963:22;;6030:1;6024:4;6020:12;6051:18;6041:81;;6107:4;6099:6;6095:17;6085:27;;6041:81;6169:2;6161:6;6158:14;6138:18;6135:38;6132:84;;;6188:18;;:::i;:::-;6132:84;5953:269;5902:320;;;:::o;6228:180::-;6276:77;6273:1;6266:88;6373:4;6370:1;6363:15;6397:4;6394:1;6387:15;6414:191;6454:4;6474:20;6492:1;6474:20;:::i;:::-;6469:25;;6508:20;6526:1;6508:20;:::i;:::-;6503:25;;6547:1;6544;6541:8;6538:34;;;6552:18;;:::i;:::-;6538:34;6597:1;6594;6590:9;6582:17;;6414:191;;;;:::o;6611:305::-;6651:3;6670:20;6688:1;6670:20;:::i;:::-;6665:25;;6704:20;6722:1;6704:20;:::i;:::-;6699:25;;6858:1;6790:66;6786:74;6783:1;6780:81;6777:107;;;6864:18;;:::i;:::-;6777:107;6908:1;6905;6901:9;6894:16;;6611:305;;;;:::o\",\"source\":\"// SPDX-License-Identifier: MIT\\r\\npragma solidity >=0.4.22 <0.9.0;\\r\\n\\r\\n\\r\\ncontract SafeMath {\\r\\n\\r\\n    function safeAdd(uint a, uint b) internal pure returns (uint c) {\\r\\n        c = a + b;\\r\\n        require(c >= a);\\r\\n    }\\r\\n\\r\\n    function safeSub(uint a, uint b) internal pure returns (uint c) {\\r\\n        require(b <= a);\\r\\n        c = a - b;\\r\\n    }\\r\\n\\r\\n    function safeMul(uint a, uint b) internal pure returns (uint c) {\\r\\n        c = a * b;\\r\\n        require(a == 0 || c / a == b);\\r\\n    }\\r\\n\\r\\n    function safeDiv(uint a, uint b) internal pure returns (uint c) {\\r\\n        require(b > 0);\\r\\n        c = a / b;\\r\\n    }\\r\\n}\\r\\n\\r\\n\\r\\ninterface IERC20 {\\r\\n\\r\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\r\\n\\r\\n\\r\\n    event Approval(address indexed owner, address indexed spender, uint256 value);\\r\\n\\r\\n \\r\\n    function totalSupply() external view returns (uint256);\\r\\n\\r\\n\\r\\n    function balanceOf(address account) external view returns (uint256);\\r\\n\\r\\n\\r\\n    function transfer(address to, uint256 amount) external returns (bool);\\r\\n\\r\\n\\r\\n    function allowance(address owner, address spender) external view returns (uint256);\\r\\n\\r\\n\\r\\n    function approve(address spender, uint256 amount) external returns (bool);\\r\\n\\r\\n\\r\\n    function transferFrom(\\r\\n        address from,\\r\\n        address to,\\r\\n        uint256 amount\\r\\n    ) external returns (bool);\\r\\n}\\r\\n\\r\\n\\r\\n/**\\r\\nERC20 Token, with the addition of symbol, name and decimals and assisted token transfers\\r\\n*/\\r\\ncontract JuroToken is IERC20, SafeMath {\\r\\n    string public symbol;\\r\\n    string public  name;\\r\\n    uint8 public decimals;\\r\\n    uint public _totalSupply;\\r\\n\\r\\n    mapping(address => uint) balances;\\r\\n    mapping(address => mapping(address => uint)) allowed;\\r\\n\\r\\n\\r\\n    // ------------------------------------------------------------------------\\r\\n    // Constructor\\r\\n    // ------------------------------------------------------------------------\\r\\n    constructor() {\\r\\n        symbol = \\\"Juro\\\";\\r\\n        name = \\\"Juro Token\\\";\\r\\n        decimals = 2;\\r\\n        _totalSupply = 100000;\\r\\n        balances[0x5B1030dcD0aF8b77B83e1b52e01864A79bed32ED] = _totalSupply;\\r\\n        emit Transfer(0x0000000000000000000000000000000000000000, 0x5B1030dcD0aF8b77B83e1b52e01864A79bed32ED, _totalSupply);\\r\\n    }\\r\\n\\r\\n\\r\\n    // ------------------------------------------------------------------------\\r\\n    // Total supply\\r\\n    // ------------------------------------------------------------------------\\r\\n    function totalSupply() public view override returns (uint) {\\r\\n        return safeSub(_totalSupply,balances[0x0000000000000000000000000000000000000000]);\\r\\n    }\\r\\n\\r\\n\\r\\n    // ------------------------------------------------------------------------\\r\\n    // Get the token balance for account tokenOwner\\r\\n    // ------------------------------------------------------------------------\\r\\n    function balanceOf(address tokenOwner) public view override  returns (uint balance) {\\r\\n        return balances[tokenOwner];\\r\\n    }\\r\\n\\r\\n\\r\\n    // ------------------------------------------------------------------------\\r\\n    // Transfer the balance from token owner's account to to account\\r\\n    // - Owner's account must have sufficient balance to transfer\\r\\n    // - 0 value transfers are allowed\\r\\n    // ------------------------------------------------------------------------\\r\\n    function transfer(address to, uint tokens) public override returns (bool success) {\\r\\n        balances[msg.sender] = safeSub(balances[msg.sender], tokens);\\r\\n        balances[to] = safeAdd(balances[to], tokens);\\r\\n        emit Transfer(msg.sender, to, tokens);\\r\\n        return true;\\r\\n    }\\r\\n\\r\\n\\r\\n    // ------------------------------------------------------------------------\\r\\n    // Token owner can approve for spender to transferFrom(...) tokens\\r\\n    // from the token owner's account\\r\\n    //\\r\\n    // recommends that there are no checks for the approval double-spend attack\\r\\n    // as this should be implemented in user interfaces \\r\\n    // ------------------------------------------------------------------------\\r\\n    function approve(address spender, uint tokens) public override returns (bool success) {\\r\\n        allowed[msg.sender][spender] = tokens;\\r\\n        emit Approval(msg.sender, spender, tokens);\\r\\n        return true;\\r\\n    }\\r\\n\\r\\n\\r\\n    // ------------------------------------------------------------------------\\r\\n    // Transfer tokens from the from account to the to account\\r\\n    // \\r\\n    // The calling account must already have sufficient tokens approve(...)-d\\r\\n    // for spending from the from account and\\r\\n    // - From account must have sufficient balance to transfer\\r\\n    // - Spender must have sufficient allowance to transfer\\r\\n    // - 0 value transfers are allowed\\r\\n    // ------------------------------------------------------------------------\\r\\n    function transferFrom(address from, address to, uint tokens) public override returns (bool success) {\\r\\n        balances[from] = safeSub(balances[from], tokens);\\r\\n        allowed[from][msg.sender] = safeSub(allowed[from][msg.sender], tokens);\\r\\n        balances[to] = safeAdd(balances[to], tokens);\\r\\n        emit Transfer(from, to, tokens);\\r\\n        return true;\\r\\n    }\\r\\n\\r\\n\\r\\n    // ------------------------------------------------------------------------\\r\\n    // Returns the amount of tokens approved by the owner that can be\\r\\n    // transferred to the spender's account\\r\\n    // ------------------------------------------------------------------------\\r\\n    function allowance(address tokenOwner, address spender) public view override returns (uint remaining) {\\r\\n        return allowed[tokenOwner][spender];\\r\\n    }\\r\\n\\r\\n    modifier perValue(){\\r\\n        require(msg.value==0.001 ether);\\r\\n        _;\\r\\n    }\\r\\n\\r\\n    function getToken() public payable perValue returns (bool){\\r\\n        balances[0x5B1030dcD0aF8b77B83e1b52e01864A79bed32ED] = safeSub(balances[0x5B1030dcD0aF8b77B83e1b52e01864A79bed32ED], 10);\\r\\n        balances[msg.sender]=safeAdd(balances[msg.sender],10);\\r\\n        return true; \\r\\n    }\\r\\n\\r\\n\\r\\n    // ------------------------------------------------------------------------\\r\\n    // Token owner can approve for spender to transferFrom(...) tokens\\r\\n    // from the token owner's account. The spender contract function\\r\\n    // receiveApproval(...) is then executed\\r\\n    // ------------------------------------------------------------------------\\r\\n\\r\\n\\r\\n}\",\"sourcePath\":\"C:/Users/turtl/TokenApp/contracts/JuroTokenContract.sol\",\"ast\":{\"absolutePath\":\"/C/Users/turtl/TokenApp/contracts/JuroTokenContract.sol\",\"exportedSymbols\":{\"IERC20\":[163],\"JuroToken\":[441],\"SafeMath\":[96]},\"id\":442,\"license\":\"MIT\",\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":1,\"literals\":[\"solidity\",\">=\",\"0.4\",\".22\",\"<\",\"0.9\",\".0\"],\"nodeType\":\"PragmaDirective\",\"src\":\"33:32:0\"},{\"abstract\":false,\"baseContracts\":[],\"canonicalName\":\"SafeMath\",\"contractDependencies\":[],\"contractKind\":\"contract\",\"fullyImplemented\":true,\"id\":96,\"linearizedBaseContracts\":[96],\"name\":\"SafeMath\",\"nameLocation\":\"80:8:0\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"body\":{\"id\":22,\"nodeType\":\"Block\",\"src\":\"162:54:0\",\"statements\":[{\"expression\":{\"id\":14,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":10,\"name\":\"c\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":8,\"src\":\"173:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":13,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":11,\"name\":\"a\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":3,\"src\":\"177:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"+\",\"rightExpression\":{\"id\":12,\"name\":\"b\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":5,\"src\":\"181:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"177:5:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"173:9:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":15,\"nodeType\":\"ExpressionStatement\",\"src\":\"173:9:0\"},{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":19,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":17,\"name\":\"c\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":8,\"src\":\"201:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\">=\",\"rightExpression\":{\"id\":18,\"name\":\"a\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":3,\"src\":\"206:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"201:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":16,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[4294967278,4294967278],\"referencedDeclaration\":4294967278,\"src\":\"193:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":20,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"193:15:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":21,\"nodeType\":\"ExpressionStatement\",\"src\":\"193:15:0\"}]},\"id\":23,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"safeAdd\",\"nameLocation\":\"107:7:0\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":6,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":3,\"mutability\":\"mutable\",\"name\":\"a\",\"nameLocation\":\"120:1:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":23,\"src\":\"115:6:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":2,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"115:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":5,\"mutability\":\"mutable\",\"name\":\"b\",\"nameLocation\":\"128:1:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":23,\"src\":\"123:6:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":4,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"123:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"114:16:0\"},\"returnParameters\":{\"id\":9,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":8,\"mutability\":\"mutable\",\"name\":\"c\",\"nameLocation\":\"159:1:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":23,\"src\":\"154:6:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":7,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"154:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"153:8:0\"},\"scope\":96,\"src\":\"98:118:0\",\"stateMutability\":\"pure\",\"virtual\":false,\"visibility\":\"internal\"},{\"body\":{\"id\":44,\"nodeType\":\"Block\",\"src\":\"288:54:0\",\"statements\":[{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":35,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":33,\"name\":\"b\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":27,\"src\":\"307:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"<=\",\"rightExpression\":{\"id\":34,\"name\":\"a\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":25,\"src\":\"312:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"307:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":32,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[4294967278,4294967278],\"referencedDeclaration\":4294967278,\"src\":\"299:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":36,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"299:15:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":37,\"nodeType\":\"ExpressionStatement\",\"src\":\"299:15:0\"},{\"expression\":{\"id\":42,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":38,\"name\":\"c\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":30,\"src\":\"325:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":41,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":39,\"name\":\"a\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":25,\"src\":\"329:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"-\",\"rightExpression\":{\"id\":40,\"name\":\"b\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":27,\"src\":\"333:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"329:5:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"325:9:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":43,\"nodeType\":\"ExpressionStatement\",\"src\":\"325:9:0\"}]},\"id\":45,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"safeSub\",\"nameLocation\":\"233:7:0\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":28,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":25,\"mutability\":\"mutable\",\"name\":\"a\",\"nameLocation\":\"246:1:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":45,\"src\":\"241:6:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":24,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"241:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":27,\"mutability\":\"mutable\",\"name\":\"b\",\"nameLocation\":\"254:1:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":45,\"src\":\"249:6:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":26,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"249:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"240:16:0\"},\"returnParameters\":{\"id\":31,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":30,\"mutability\":\"mutable\",\"name\":\"c\",\"nameLocation\":\"285:1:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":45,\"src\":\"280:6:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":29,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"280:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"279:8:0\"},\"scope\":96,\"src\":\"224:118:0\",\"stateMutability\":\"pure\",\"virtual\":false,\"visibility\":\"internal\"},{\"body\":{\"id\":72,\"nodeType\":\"Block\",\"src\":\"414:68:0\",\"statements\":[{\"expression\":{\"id\":58,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":54,\"name\":\"c\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":52,\"src\":\"425:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":57,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":55,\"name\":\"a\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":47,\"src\":\"429:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"*\",\"rightExpression\":{\"id\":56,\"name\":\"b\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":49,\"src\":\"433:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"429:5:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"425:9:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":59,\"nodeType\":\"ExpressionStatement\",\"src\":\"425:9:0\"},{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"id\":69,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":63,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":61,\"name\":\"a\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":47,\"src\":\"453:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"hexValue\":\"30\",\"id\":62,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"458:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"src\":\"453:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"||\",\"rightExpression\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":68,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":66,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":64,\"name\":\"c\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":52,\"src\":\"463:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"/\",\"rightExpression\":{\"id\":65,\"name\":\"a\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":47,\"src\":\"467:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"463:5:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"id\":67,\"name\":\"b\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":49,\"src\":\"472:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"463:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"src\":\"453:20:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":60,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[4294967278,4294967278],\"referencedDeclaration\":4294967278,\"src\":\"445:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":70,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"445:29:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":71,\"nodeType\":\"ExpressionStatement\",\"src\":\"445:29:0\"}]},\"id\":73,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"safeMul\",\"nameLocation\":\"359:7:0\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":50,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":47,\"mutability\":\"mutable\",\"name\":\"a\",\"nameLocation\":\"372:1:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":73,\"src\":\"367:6:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":46,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"367:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":49,\"mutability\":\"mutable\",\"name\":\"b\",\"nameLocation\":\"380:1:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":73,\"src\":\"375:6:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":48,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"375:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"366:16:0\"},\"returnParameters\":{\"id\":53,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":52,\"mutability\":\"mutable\",\"name\":\"c\",\"nameLocation\":\"411:1:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":73,\"src\":\"406:6:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":51,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"406:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"405:8:0\"},\"scope\":96,\"src\":\"350:132:0\",\"stateMutability\":\"pure\",\"virtual\":false,\"visibility\":\"internal\"},{\"body\":{\"id\":94,\"nodeType\":\"Block\",\"src\":\"554:53:0\",\"statements\":[{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":85,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":83,\"name\":\"b\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":77,\"src\":\"573:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\">\",\"rightExpression\":{\"hexValue\":\"30\",\"id\":84,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"577:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"src\":\"573:5:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":82,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[4294967278,4294967278],\"referencedDeclaration\":4294967278,\"src\":\"565:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":86,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"565:14:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":87,\"nodeType\":\"ExpressionStatement\",\"src\":\"565:14:0\"},{\"expression\":{\"id\":92,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":88,\"name\":\"c\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":80,\"src\":\"590:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":91,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":89,\"name\":\"a\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":75,\"src\":\"594:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"/\",\"rightExpression\":{\"id\":90,\"name\":\"b\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":77,\"src\":\"598:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"594:5:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"590:9:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":93,\"nodeType\":\"ExpressionStatement\",\"src\":\"590:9:0\"}]},\"id\":95,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"safeDiv\",\"nameLocation\":\"499:7:0\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":78,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":75,\"mutability\":\"mutable\",\"name\":\"a\",\"nameLocation\":\"512:1:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":95,\"src\":\"507:6:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":74,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"507:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":77,\"mutability\":\"mutable\",\"name\":\"b\",\"nameLocation\":\"520:1:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":95,\"src\":\"515:6:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":76,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"515:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"506:16:0\"},\"returnParameters\":{\"id\":81,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":80,\"mutability\":\"mutable\",\"name\":\"c\",\"nameLocation\":\"551:1:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":95,\"src\":\"546:6:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":79,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"546:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"545:8:0\"},\"scope\":96,\"src\":\"490:117:0\",\"stateMutability\":\"pure\",\"virtual\":false,\"visibility\":\"internal\"}],\"scope\":442,\"src\":\"71:539:0\",\"usedErrors\":[]},{\"abstract\":false,\"baseContracts\":[],\"canonicalName\":\"IERC20\",\"contractDependencies\":[],\"contractKind\":\"interface\",\"fullyImplemented\":false,\"id\":163,\"linearizedBaseContracts\":[163],\"name\":\"IERC20\",\"nameLocation\":\"626:6:0\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"anonymous\":false,\"id\":104,\"name\":\"Transfer\",\"nameLocation\":\"648:8:0\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":103,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":98,\"indexed\":true,\"mutability\":\"mutable\",\"name\":\"from\",\"nameLocation\":\"673:4:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":104,\"src\":\"657:20:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":97,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"657:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":100,\"indexed\":true,\"mutability\":\"mutable\",\"name\":\"to\",\"nameLocation\":\"695:2:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":104,\"src\":\"679:18:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":99,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"679:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":102,\"indexed\":false,\"mutability\":\"mutable\",\"name\":\"value\",\"nameLocation\":\"707:5:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":104,\"src\":\"699:13:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":101,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"699:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"656:57:0\"},\"src\":\"642:72:0\"},{\"anonymous\":false,\"id\":112,\"name\":\"Approval\",\"nameLocation\":\"730:8:0\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":111,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":106,\"indexed\":true,\"mutability\":\"mutable\",\"name\":\"owner\",\"nameLocation\":\"755:5:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":112,\"src\":\"739:21:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":105,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"739:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":108,\"indexed\":true,\"mutability\":\"mutable\",\"name\":\"spender\",\"nameLocation\":\"778:7:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":112,\"src\":\"762:23:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":107,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"762:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":110,\"indexed\":false,\"mutability\":\"mutable\",\"name\":\"value\",\"nameLocation\":\"795:5:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":112,\"src\":\"787:13:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":109,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"787:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"738:63:0\"},\"src\":\"724:78:0\"},{\"functionSelector\":\"18160ddd\",\"id\":117,\"implemented\":false,\"kind\":\"function\",\"modifiers\":[],\"name\":\"totalSupply\",\"nameLocation\":\"822:11:0\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":113,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"833:2:0\"},\"returnParameters\":{\"id\":116,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":115,\"mutability\":\"mutable\",\"name\":\"\",\"nameLocation\":\"-1:-1:-1\",\"nodeType\":\"VariableDeclaration\",\"scope\":117,\"src\":\"859:7:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":114,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"859:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"858:9:0\"},\"scope\":163,\"src\":\"813:55:0\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"external\"},{\"functionSelector\":\"70a08231\",\"id\":124,\"implemented\":false,\"kind\":\"function\",\"modifiers\":[],\"name\":\"balanceOf\",\"nameLocation\":\"887:9:0\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":120,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":119,\"mutability\":\"mutable\",\"name\":\"account\",\"nameLocation\":\"905:7:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":124,\"src\":\"897:15:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":118,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"897:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"src\":\"896:17:0\"},\"returnParameters\":{\"id\":123,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":122,\"mutability\":\"mutable\",\"name\":\"\",\"nameLocation\":\"-1:-1:-1\",\"nodeType\":\"VariableDeclaration\",\"scope\":124,\"src\":\"937:7:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":121,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"937:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"936:9:0\"},\"scope\":163,\"src\":\"878:68:0\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"external\"},{\"functionSelector\":\"a9059cbb\",\"id\":133,\"implemented\":false,\"kind\":\"function\",\"modifiers\":[],\"name\":\"transfer\",\"nameLocation\":\"965:8:0\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":129,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":126,\"mutability\":\"mutable\",\"name\":\"to\",\"nameLocation\":\"982:2:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":133,\"src\":\"974:10:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":125,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"974:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":128,\"mutability\":\"mutable\",\"name\":\"amount\",\"nameLocation\":\"994:6:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":133,\"src\":\"986:14:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":127,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"986:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"973:28:0\"},\"returnParameters\":{\"id\":132,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":131,\"mutability\":\"mutable\",\"name\":\"\",\"nameLocation\":\"-1:-1:-1\",\"nodeType\":\"VariableDeclaration\",\"scope\":133,\"src\":\"1020:4:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":130,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1020:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"1019:6:0\"},\"scope\":163,\"src\":\"956:70:0\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"external\"},{\"functionSelector\":\"dd62ed3e\",\"id\":142,\"implemented\":false,\"kind\":\"function\",\"modifiers\":[],\"name\":\"allowance\",\"nameLocation\":\"1045:9:0\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":138,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":135,\"mutability\":\"mutable\",\"name\":\"owner\",\"nameLocation\":\"1063:5:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":142,\"src\":\"1055:13:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":134,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1055:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":137,\"mutability\":\"mutable\",\"name\":\"spender\",\"nameLocation\":\"1078:7:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":142,\"src\":\"1070:15:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":136,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1070:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"src\":\"1054:32:0\"},\"returnParameters\":{\"id\":141,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":140,\"mutability\":\"mutable\",\"name\":\"\",\"nameLocation\":\"-1:-1:-1\",\"nodeType\":\"VariableDeclaration\",\"scope\":142,\"src\":\"1110:7:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":139,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1110:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"1109:9:0\"},\"scope\":163,\"src\":\"1036:83:0\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"external\"},{\"functionSelector\":\"095ea7b3\",\"id\":151,\"implemented\":false,\"kind\":\"function\",\"modifiers\":[],\"name\":\"approve\",\"nameLocation\":\"1138:7:0\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":147,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":144,\"mutability\":\"mutable\",\"name\":\"spender\",\"nameLocation\":\"1154:7:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":151,\"src\":\"1146:15:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":143,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1146:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":146,\"mutability\":\"mutable\",\"name\":\"amount\",\"nameLocation\":\"1171:6:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":151,\"src\":\"1163:14:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":145,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1163:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"1145:33:0\"},\"returnParameters\":{\"id\":150,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":149,\"mutability\":\"mutable\",\"name\":\"\",\"nameLocation\":\"-1:-1:-1\",\"nodeType\":\"VariableDeclaration\",\"scope\":151,\"src\":\"1197:4:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":148,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1197:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"1196:6:0\"},\"scope\":163,\"src\":\"1129:74:0\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"external\"},{\"functionSelector\":\"23b872dd\",\"id\":162,\"implemented\":false,\"kind\":\"function\",\"modifiers\":[],\"name\":\"transferFrom\",\"nameLocation\":\"1222:12:0\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":158,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":153,\"mutability\":\"mutable\",\"name\":\"from\",\"nameLocation\":\"1253:4:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":162,\"src\":\"1245:12:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":152,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1245:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":155,\"mutability\":\"mutable\",\"name\":\"to\",\"nameLocation\":\"1276:2:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":162,\"src\":\"1268:10:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":154,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1268:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":157,\"mutability\":\"mutable\",\"name\":\"amount\",\"nameLocation\":\"1297:6:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":162,\"src\":\"1289:14:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":156,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1289:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"1234:76:0\"},\"returnParameters\":{\"id\":161,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":160,\"mutability\":\"mutable\",\"name\":\"\",\"nameLocation\":\"-1:-1:-1\",\"nodeType\":\"VariableDeclaration\",\"scope\":162,\"src\":\"1329:4:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":159,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1329:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"1328:6:0\"},\"scope\":163,\"src\":\"1213:122:0\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"external\"}],\"scope\":442,\"src\":\"616:722:0\",\"usedErrors\":[]},{\"abstract\":false,\"baseContracts\":[{\"baseName\":{\"id\":165,\"name\":\"IERC20\",\"nodeType\":\"IdentifierPath\",\"referencedDeclaration\":163,\"src\":\"1465:6:0\"},\"id\":166,\"nodeType\":\"InheritanceSpecifier\",\"src\":\"1465:6:0\"},{\"baseName\":{\"id\":167,\"name\":\"SafeMath\",\"nodeType\":\"IdentifierPath\",\"referencedDeclaration\":96,\"src\":\"1473:8:0\"},\"id\":168,\"nodeType\":\"InheritanceSpecifier\",\"src\":\"1473:8:0\"}],\"canonicalName\":\"JuroToken\",\"contractDependencies\":[],\"contractKind\":\"contract\",\"documentation\":{\"id\":164,\"nodeType\":\"StructuredDocumentation\",\"src\":\"1344:97:0\",\"text\":\"ERC20 Token, with the addition of symbol, name and decimals and assisted token transfers\"},\"fullyImplemented\":true,\"id\":441,\"linearizedBaseContracts\":[441,96,163],\"name\":\"JuroToken\",\"nameLocation\":\"1452:9:0\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"constant\":false,\"functionSelector\":\"95d89b41\",\"id\":170,\"mutability\":\"mutable\",\"name\":\"symbol\",\"nameLocation\":\"1503:6:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":441,\"src\":\"1489:20:0\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string\"},\"typeName\":{\"id\":169,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1489:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"06fdde03\",\"id\":172,\"mutability\":\"mutable\",\"name\":\"name\",\"nameLocation\":\"1531:4:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":441,\"src\":\"1516:19:0\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string\"},\"typeName\":{\"id\":171,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1516:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"313ce567\",\"id\":174,\"mutability\":\"mutable\",\"name\":\"decimals\",\"nameLocation\":\"1555:8:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":441,\"src\":\"1542:21:0\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint8\",\"typeString\":\"uint8\"},\"typeName\":{\"id\":173,\"name\":\"uint8\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1542:5:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint8\",\"typeString\":\"uint8\"}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"3eaaf86b\",\"id\":176,\"mutability\":\"mutable\",\"name\":\"_totalSupply\",\"nameLocation\":\"1582:12:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":441,\"src\":\"1570:24:0\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":175,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1570:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"public\"},{\"constant\":false,\"id\":180,\"mutability\":\"mutable\",\"name\":\"balances\",\"nameLocation\":\"1628:8:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":441,\"src\":\"1603:33:0\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"},\"typeName\":{\"id\":179,\"keyType\":{\"id\":177,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1611:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"1603:24:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"},\"valueType\":{\"id\":178,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1622:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":186,\"mutability\":\"mutable\",\"name\":\"allowed\",\"nameLocation\":\"1688:7:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":441,\"src\":\"1643:52:0\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$\",\"typeString\":\"mapping(address => mapping(address => uint256))\"},\"typeName\":{\"id\":185,\"keyType\":{\"id\":181,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1651:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"1643:44:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$\",\"typeString\":\"mapping(address => mapping(address => uint256))\"},\"valueType\":{\"id\":184,\"keyType\":{\"id\":182,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1670:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"1662:24:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"},\"valueType\":{\"id\":183,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1681:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}}},\"visibility\":\"internal\"},{\"body\":{\"id\":217,\"nodeType\":\"Block\",\"src\":\"1902:323:0\",\"statements\":[{\"expression\":{\"id\":191,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":189,\"name\":\"symbol\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":170,\"src\":\"1913:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"hexValue\":\"4a75726f\",\"id\":190,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1922:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_bbe6dba80d26e5b356544f8e9eef12f40bcc626a268c7430fee632e0511a4703\",\"typeString\":\"literal_string \\\"Juro\\\"\"},\"value\":\"Juro\"},\"src\":\"1913:15:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":192,\"nodeType\":\"ExpressionStatement\",\"src\":\"1913:15:0\"},{\"expression\":{\"id\":195,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":193,\"name\":\"name\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":172,\"src\":\"1939:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"hexValue\":\"4a75726f20546f6b656e\",\"id\":194,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1946:12:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_2ac89f99b084d8456d56f678b3722d1563d2e01e620e9fc6d03e51830658bca6\",\"typeString\":\"literal_string \\\"Juro Token\\\"\"},\"value\":\"Juro Token\"},\"src\":\"1939:19:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":196,\"nodeType\":\"ExpressionStatement\",\"src\":\"1939:19:0\"},{\"expression\":{\"id\":199,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":197,\"name\":\"decimals\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":174,\"src\":\"1969:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint8\",\"typeString\":\"uint8\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"hexValue\":\"32\",\"id\":198,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1980:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_2_by_1\",\"typeString\":\"int_const 2\"},\"value\":\"2\"},\"src\":\"1969:12:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint8\",\"typeString\":\"uint8\"}},\"id\":200,\"nodeType\":\"ExpressionStatement\",\"src\":\"1969:12:0\"},{\"expression\":{\"id\":203,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":201,\"name\":\"_totalSupply\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":176,\"src\":\"1992:12:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"hexValue\":\"313030303030\",\"id\":202,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2007:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_100000_by_1\",\"typeString\":\"int_const 100000\"},\"value\":\"100000\"},\"src\":\"1992:21:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":204,\"nodeType\":\"ExpressionStatement\",\"src\":\"1992:21:0\"},{\"expression\":{\"id\":209,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"id\":205,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":180,\"src\":\"2024:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":207,\"indexExpression\":{\"hexValue\":\"307835423130333064634430614638623737423833653162353265303138363441373962656433324544\",\"id\":206,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2033:42:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"value\":\"0x5B1030dcD0aF8b77B83e1b52e01864A79bed32ED\"},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"2024:52:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":208,\"name\":\"_totalSupply\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":176,\"src\":\"2079:12:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"2024:67:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":210,\"nodeType\":\"ExpressionStatement\",\"src\":\"2024:67:0\"},{\"eventCall\":{\"arguments\":[{\"hexValue\":\"307830303030303030303030303030303030303030303030303030303030303030303030303030303030\",\"id\":212,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2116:42:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"value\":\"0x0000000000000000000000000000000000000000\"},{\"hexValue\":\"307835423130333064634430614638623737423833653162353265303138363441373962656433324544\",\"id\":213,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2160:42:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"value\":\"0x5B1030dcD0aF8b77B83e1b52e01864A79bed32ED\"},{\"id\":214,\"name\":\"_totalSupply\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":176,\"src\":\"2204:12:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":211,\"name\":\"Transfer\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":104,\"src\":\"2107:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$\",\"typeString\":\"function (address,address,uint256)\"}},\"id\":215,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2107:110:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":216,\"nodeType\":\"EmitStatement\",\"src\":\"2102:115:0\"}]},\"id\":218,\"implemented\":true,\"kind\":\"constructor\",\"modifiers\":[],\"name\":\"\",\"nameLocation\":\"-1:-1:-1\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":187,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1899:2:0\"},\"returnParameters\":{\"id\":188,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1902:0:0\"},\"scope\":441,\"src\":\"1888:337:0\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"baseFunctions\":[117],\"body\":{\"id\":231,\"nodeType\":\"Block\",\"src\":\"2477:100:0\",\"statements\":[{\"expression\":{\"arguments\":[{\"id\":225,\"name\":\"_totalSupply\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":176,\"src\":\"2503:12:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},{\"baseExpression\":{\"id\":226,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":180,\"src\":\"2516:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":228,\"indexExpression\":{\"hexValue\":\"307830303030303030303030303030303030303030303030303030303030303030303030303030303030\",\"id\":227,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2525:42:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"value\":\"0x0000000000000000000000000000000000000000\"},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2516:52:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":224,\"name\":\"safeSub\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":45,\"src\":\"2495:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$\",\"typeString\":\"function (uint256,uint256) pure returns (uint256)\"}},\"id\":229,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2495:74:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"functionReturnParameters\":223,\"id\":230,\"nodeType\":\"Return\",\"src\":\"2488:81:0\"}]},\"functionSelector\":\"18160ddd\",\"id\":232,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"totalSupply\",\"nameLocation\":\"2427:11:0\",\"nodeType\":\"FunctionDefinition\",\"overrides\":{\"id\":220,\"nodeType\":\"OverrideSpecifier\",\"overrides\":[],\"src\":\"2453:8:0\"},\"parameters\":{\"id\":219,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"2438:2:0\"},\"returnParameters\":{\"id\":223,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":222,\"mutability\":\"mutable\",\"name\":\"\",\"nameLocation\":\"-1:-1:-1\",\"nodeType\":\"VariableDeclaration\",\"scope\":232,\"src\":\"2471:4:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":221,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2471:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"2470:6:0\"},\"scope\":441,\"src\":\"2418:159:0\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"baseFunctions\":[124],\"body\":{\"id\":244,\"nodeType\":\"Block\",\"src\":\"2886:46:0\",\"statements\":[{\"expression\":{\"baseExpression\":{\"id\":240,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":180,\"src\":\"2904:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":242,\"indexExpression\":{\"id\":241,\"name\":\"tokenOwner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":234,\"src\":\"2913:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2904:20:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"functionReturnParameters\":239,\"id\":243,\"nodeType\":\"Return\",\"src\":\"2897:27:0\"}]},\"functionSelector\":\"70a08231\",\"id\":245,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"balanceOf\",\"nameLocation\":\"2811:9:0\",\"nodeType\":\"FunctionDefinition\",\"overrides\":{\"id\":236,\"nodeType\":\"OverrideSpecifier\",\"overrides\":[],\"src\":\"2853:8:0\"},\"parameters\":{\"id\":235,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":234,\"mutability\":\"mutable\",\"name\":\"tokenOwner\",\"nameLocation\":\"2829:10:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":245,\"src\":\"2821:18:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":233,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2821:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"src\":\"2820:20:0\"},\"returnParameters\":{\"id\":239,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":238,\"mutability\":\"mutable\",\"name\":\"balance\",\"nameLocation\":\"2877:7:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":245,\"src\":\"2872:12:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":237,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2872:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"2871:14:0\"},\"scope\":441,\"src\":\"2802:130:0\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"baseFunctions\":[133],\"body\":{\"id\":288,\"nodeType\":\"Block\",\"src\":\"3363:204:0\",\"statements\":[{\"expression\":{\"id\":266,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"id\":255,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":180,\"src\":\"3374:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":258,\"indexExpression\":{\"expression\":{\"id\":256,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":4294967281,\"src\":\"3383:3:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":257,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"3383:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"3374:20:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"arguments\":[{\"baseExpression\":{\"id\":260,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":180,\"src\":\"3405:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":263,\"indexExpression\":{\"expression\":{\"id\":261,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":4294967281,\"src\":\"3414:3:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":262,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"3414:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"3405:20:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},{\"id\":264,\"name\":\"tokens\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":249,\"src\":\"3427:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":259,\"name\":\"safeSub\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":45,\"src\":\"3397:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$\",\"typeString\":\"function (uint256,uint256) pure returns (uint256)\"}},\"id\":265,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"3397:37:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"3374:60:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":267,\"nodeType\":\"ExpressionStatement\",\"src\":\"3374:60:0\"},{\"expression\":{\"id\":277,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"id\":268,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":180,\"src\":\"3445:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":270,\"indexExpression\":{\"id\":269,\"name\":\"to\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":247,\"src\":\"3454:2:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"3445:12:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"arguments\":[{\"baseExpression\":{\"id\":272,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":180,\"src\":\"3468:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":274,\"indexExpression\":{\"id\":273,\"name\":\"to\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":247,\"src\":\"3477:2:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"3468:12:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},{\"id\":275,\"name\":\"tokens\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":249,\"src\":\"3482:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":271,\"name\":\"safeAdd\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":23,\"src\":\"3460:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$\",\"typeString\":\"function (uint256,uint256) pure returns (uint256)\"}},\"id\":276,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"3460:29:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"3445:44:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":278,\"nodeType\":\"ExpressionStatement\",\"src\":\"3445:44:0\"},{\"eventCall\":{\"arguments\":[{\"expression\":{\"id\":280,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":4294967281,\"src\":\"3514:3:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":281,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"3514:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},{\"id\":282,\"name\":\"to\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":247,\"src\":\"3526:2:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},{\"id\":283,\"name\":\"tokens\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":249,\"src\":\"3530:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":279,\"name\":\"Transfer\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":104,\"src\":\"3505:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$\",\"typeString\":\"function (address,address,uint256)\"}},\"id\":284,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"3505:32:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":285,\"nodeType\":\"EmitStatement\",\"src\":\"3500:37:0\"},{\"expression\":{\"hexValue\":\"74727565\",\"id\":286,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"3555:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"functionReturnParameters\":254,\"id\":287,\"nodeType\":\"Return\",\"src\":\"3548:11:0\"}]},\"functionSelector\":\"a9059cbb\",\"id\":289,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"transfer\",\"nameLocation\":\"3290:8:0\",\"nodeType\":\"FunctionDefinition\",\"overrides\":{\"id\":251,\"nodeType\":\"OverrideSpecifier\",\"overrides\":[],\"src\":\"3331:8:0\"},\"parameters\":{\"id\":250,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":247,\"mutability\":\"mutable\",\"name\":\"to\",\"nameLocation\":\"3307:2:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":289,\"src\":\"3299:10:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":246,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3299:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":249,\"mutability\":\"mutable\",\"name\":\"tokens\",\"nameLocation\":\"3316:6:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":289,\"src\":\"3311:11:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":248,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3311:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"3298:25:0\"},\"returnParameters\":{\"id\":254,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":253,\"mutability\":\"mutable\",\"name\":\"success\",\"nameLocation\":\"3354:7:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":289,\"src\":\"3349:12:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":252,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3349:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"3348:14:0\"},\"scope\":441,\"src\":\"3281:286:0\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"baseFunctions\":[151],\"body\":{\"id\":317,\"nodeType\":\"Block\",\"src\":\"4083:131:0\",\"statements\":[{\"expression\":{\"id\":306,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"baseExpression\":{\"id\":299,\"name\":\"allowed\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":186,\"src\":\"4094:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$\",\"typeString\":\"mapping(address => mapping(address => uint256))\"}},\"id\":303,\"indexExpression\":{\"expression\":{\"id\":300,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":4294967281,\"src\":\"4102:3:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":301,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"4102:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4094:19:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":304,\"indexExpression\":{\"id\":302,\"name\":\"spender\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":291,\"src\":\"4114:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"4094:28:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":305,\"name\":\"tokens\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":293,\"src\":\"4125:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"4094:37:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":307,\"nodeType\":\"ExpressionStatement\",\"src\":\"4094:37:0\"},{\"eventCall\":{\"arguments\":[{\"expression\":{\"id\":309,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":4294967281,\"src\":\"4156:3:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":310,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"4156:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},{\"id\":311,\"name\":\"spender\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":291,\"src\":\"4168:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},{\"id\":312,\"name\":\"tokens\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":293,\"src\":\"4177:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":308,\"name\":\"Approval\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"4147:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$\",\"typeString\":\"function (address,address,uint256)\"}},\"id\":313,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"4147:37:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":314,\"nodeType\":\"EmitStatement\",\"src\":\"4142:42:0\"},{\"expression\":{\"hexValue\":\"74727565\",\"id\":315,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"4202:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"functionReturnParameters\":298,\"id\":316,\"nodeType\":\"Return\",\"src\":\"4195:11:0\"}]},\"functionSelector\":\"095ea7b3\",\"id\":318,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"approve\",\"nameLocation\":\"4006:7:0\",\"nodeType\":\"FunctionDefinition\",\"overrides\":{\"id\":295,\"nodeType\":\"OverrideSpecifier\",\"overrides\":[],\"src\":\"4051:8:0\"},\"parameters\":{\"id\":294,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":291,\"mutability\":\"mutable\",\"name\":\"spender\",\"nameLocation\":\"4022:7:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":318,\"src\":\"4014:15:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":290,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4014:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":293,\"mutability\":\"mutable\",\"name\":\"tokens\",\"nameLocation\":\"4036:6:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":318,\"src\":\"4031:11:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":292,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4031:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"4013:30:0\"},\"returnParameters\":{\"id\":298,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":297,\"mutability\":\"mutable\",\"name\":\"success\",\"nameLocation\":\"4074:7:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":318,\"src\":\"4069:12:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":296,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4069:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"4068:14:0\"},\"scope\":441,\"src\":\"3997:217:0\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"baseFunctions\":[162],\"body\":{\"id\":377,\"nodeType\":\"Block\",\"src\":\"4850:267:0\",\"statements\":[{\"expression\":{\"id\":339,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"id\":330,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":180,\"src\":\"4861:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":332,\"indexExpression\":{\"id\":331,\"name\":\"from\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":320,\"src\":\"4870:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"4861:14:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"arguments\":[{\"baseExpression\":{\"id\":334,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":180,\"src\":\"4886:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":336,\"indexExpression\":{\"id\":335,\"name\":\"from\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":320,\"src\":\"4895:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4886:14:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},{\"id\":337,\"name\":\"tokens\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":324,\"src\":\"4902:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":333,\"name\":\"safeSub\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":45,\"src\":\"4878:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$\",\"typeString\":\"function (uint256,uint256) pure returns (uint256)\"}},\"id\":338,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"4878:31:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"4861:48:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":340,\"nodeType\":\"ExpressionStatement\",\"src\":\"4861:48:0\"},{\"expression\":{\"id\":356,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"baseExpression\":{\"id\":341,\"name\":\"allowed\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":186,\"src\":\"4920:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$\",\"typeString\":\"mapping(address => mapping(address => uint256))\"}},\"id\":345,\"indexExpression\":{\"id\":342,\"name\":\"from\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":320,\"src\":\"4928:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4920:13:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":346,\"indexExpression\":{\"expression\":{\"id\":343,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":4294967281,\"src\":\"4934:3:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":344,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"4934:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"4920:25:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"arguments\":[{\"baseExpression\":{\"baseExpression\":{\"id\":348,\"name\":\"allowed\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":186,\"src\":\"4956:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$\",\"typeString\":\"mapping(address => mapping(address => uint256))\"}},\"id\":350,\"indexExpression\":{\"id\":349,\"name\":\"from\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":320,\"src\":\"4964:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4956:13:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":353,\"indexExpression\":{\"expression\":{\"id\":351,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":4294967281,\"src\":\"4970:3:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":352,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"4970:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4956:25:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},{\"id\":354,\"name\":\"tokens\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":324,\"src\":\"4983:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":347,\"name\":\"safeSub\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":45,\"src\":\"4948:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$\",\"typeString\":\"function (uint256,uint256) pure returns (uint256)\"}},\"id\":355,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"4948:42:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"4920:70:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":357,\"nodeType\":\"ExpressionStatement\",\"src\":\"4920:70:0\"},{\"expression\":{\"id\":367,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"id\":358,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":180,\"src\":\"5001:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":360,\"indexExpression\":{\"id\":359,\"name\":\"to\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":322,\"src\":\"5010:2:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"5001:12:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"arguments\":[{\"baseExpression\":{\"id\":362,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":180,\"src\":\"5024:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":364,\"indexExpression\":{\"id\":363,\"name\":\"to\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":322,\"src\":\"5033:2:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"5024:12:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},{\"id\":365,\"name\":\"tokens\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":324,\"src\":\"5038:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":361,\"name\":\"safeAdd\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":23,\"src\":\"5016:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$\",\"typeString\":\"function (uint256,uint256) pure returns (uint256)\"}},\"id\":366,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5016:29:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"5001:44:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":368,\"nodeType\":\"ExpressionStatement\",\"src\":\"5001:44:0\"},{\"eventCall\":{\"arguments\":[{\"id\":370,\"name\":\"from\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":320,\"src\":\"5070:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},{\"id\":371,\"name\":\"to\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":322,\"src\":\"5076:2:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},{\"id\":372,\"name\":\"tokens\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":324,\"src\":\"5080:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":369,\"name\":\"Transfer\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":104,\"src\":\"5061:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$\",\"typeString\":\"function (address,address,uint256)\"}},\"id\":373,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5061:26:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":374,\"nodeType\":\"EmitStatement\",\"src\":\"5056:31:0\"},{\"expression\":{\"hexValue\":\"74727565\",\"id\":375,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"5105:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"functionReturnParameters\":329,\"id\":376,\"nodeType\":\"Return\",\"src\":\"5098:11:0\"}]},\"functionSelector\":\"23b872dd\",\"id\":378,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"transferFrom\",\"nameLocation\":\"4759:12:0\",\"nodeType\":\"FunctionDefinition\",\"overrides\":{\"id\":326,\"nodeType\":\"OverrideSpecifier\",\"overrides\":[],\"src\":\"4818:8:0\"},\"parameters\":{\"id\":325,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":320,\"mutability\":\"mutable\",\"name\":\"from\",\"nameLocation\":\"4780:4:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":378,\"src\":\"4772:12:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":319,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4772:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":322,\"mutability\":\"mutable\",\"name\":\"to\",\"nameLocation\":\"4794:2:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":378,\"src\":\"4786:10:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":321,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4786:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":324,\"mutability\":\"mutable\",\"name\":\"tokens\",\"nameLocation\":\"4803:6:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":378,\"src\":\"4798:11:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":323,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4798:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"4771:39:0\"},\"returnParameters\":{\"id\":329,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":328,\"mutability\":\"mutable\",\"name\":\"success\",\"nameLocation\":\"4841:7:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":378,\"src\":\"4836:12:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":327,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4836:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"4835:14:0\"},\"scope\":441,\"src\":\"4750:367:0\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"baseFunctions\":[142],\"body\":{\"id\":394,\"nodeType\":\"Block\",\"src\":\"5507:54:0\",\"statements\":[{\"expression\":{\"baseExpression\":{\"baseExpression\":{\"id\":388,\"name\":\"allowed\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":186,\"src\":\"5525:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$\",\"typeString\":\"mapping(address => mapping(address => uint256))\"}},\"id\":390,\"indexExpression\":{\"id\":389,\"name\":\"tokenOwner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":380,\"src\":\"5533:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"5525:19:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":392,\"indexExpression\":{\"id\":391,\"name\":\"spender\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":382,\"src\":\"5545:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"5525:28:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"functionReturnParameters\":387,\"id\":393,\"nodeType\":\"Return\",\"src\":\"5518:35:0\"}]},\"functionSelector\":\"dd62ed3e\",\"id\":395,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"allowance\",\"nameLocation\":\"5414:9:0\",\"nodeType\":\"FunctionDefinition\",\"overrides\":{\"id\":384,\"nodeType\":\"OverrideSpecifier\",\"overrides\":[],\"src\":\"5473:8:0\"},\"parameters\":{\"id\":383,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":380,\"mutability\":\"mutable\",\"name\":\"tokenOwner\",\"nameLocation\":\"5432:10:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":395,\"src\":\"5424:18:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":379,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5424:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":382,\"mutability\":\"mutable\",\"name\":\"spender\",\"nameLocation\":\"5452:7:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":395,\"src\":\"5444:15:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":381,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5444:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"src\":\"5423:37:0\"},\"returnParameters\":{\"id\":387,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":386,\"mutability\":\"mutable\",\"name\":\"remaining\",\"nameLocation\":\"5496:9:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":395,\"src\":\"5491:14:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":385,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5491:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"5490:16:0\"},\"scope\":441,\"src\":\"5405:156:0\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":405,\"nodeType\":\"Block\",\"src\":\"5588:62:0\",\"statements\":[{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":401,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"expression\":{\"id\":398,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":4294967281,\"src\":\"5607:3:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":399,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"value\",\"nodeType\":\"MemberAccess\",\"src\":\"5607:9:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"hexValue\":\"302e303031\",\"id\":400,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"5618:11:0\",\"subdenomination\":\"ether\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1000000000000000_by_1\",\"typeString\":\"int_const 1000000000000000\"},\"value\":\"0.001\"},\"src\":\"5607:22:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":397,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[4294967278,4294967278],\"referencedDeclaration\":4294967278,\"src\":\"5599:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":402,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5599:31:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":403,\"nodeType\":\"ExpressionStatement\",\"src\":\"5599:31:0\"},{\"id\":404,\"nodeType\":\"PlaceholderStatement\",\"src\":\"5641:1:0\"}]},\"id\":406,\"name\":\"perValue\",\"nameLocation\":\"5578:8:0\",\"nodeType\":\"ModifierDefinition\",\"parameters\":{\"id\":396,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"5586:2:0\"},\"src\":\"5569:81:0\",\"virtual\":false,\"visibility\":\"internal\"},{\"body\":{\"id\":439,\"nodeType\":\"Block\",\"src\":\"5716:226:0\",\"statements\":[{\"expression\":{\"id\":422,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"id\":413,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":180,\"src\":\"5727:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":415,\"indexExpression\":{\"hexValue\":\"307835423130333064634430614638623737423833653162353265303138363441373962656433324544\",\"id\":414,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"5736:42:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"value\":\"0x5B1030dcD0aF8b77B83e1b52e01864A79bed32ED\"},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"5727:52:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"arguments\":[{\"baseExpression\":{\"id\":417,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":180,\"src\":\"5790:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":419,\"indexExpression\":{\"hexValue\":\"307835423130333064634430614638623737423833653162353265303138363441373962656433324544\",\"id\":418,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"5799:42:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"value\":\"0x5B1030dcD0aF8b77B83e1b52e01864A79bed32ED\"},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"5790:52:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},{\"hexValue\":\"3130\",\"id\":420,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"5844:2:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_10_by_1\",\"typeString\":\"int_const 10\"},\"value\":\"10\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},{\"typeIdentifier\":\"t_rational_10_by_1\",\"typeString\":\"int_const 10\"}],\"id\":416,\"name\":\"safeSub\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":45,\"src\":\"5782:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$\",\"typeString\":\"function (uint256,uint256) pure returns (uint256)\"}},\"id\":421,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5782:65:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"5727:120:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":423,\"nodeType\":\"ExpressionStatement\",\"src\":\"5727:120:0\"},{\"expression\":{\"id\":435,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"id\":424,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":180,\"src\":\"5858:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":427,\"indexExpression\":{\"expression\":{\"id\":425,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":4294967281,\"src\":\"5867:3:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":426,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"5867:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"5858:20:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"arguments\":[{\"baseExpression\":{\"id\":429,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":180,\"src\":\"5887:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":432,\"indexExpression\":{\"expression\":{\"id\":430,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":4294967281,\"src\":\"5896:3:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":431,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"5896:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"5887:20:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},{\"hexValue\":\"3130\",\"id\":433,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"5908:2:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_10_by_1\",\"typeString\":\"int_const 10\"},\"value\":\"10\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},{\"typeIdentifier\":\"t_rational_10_by_1\",\"typeString\":\"int_const 10\"}],\"id\":428,\"name\":\"safeAdd\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":23,\"src\":\"5879:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$\",\"typeString\":\"function (uint256,uint256) pure returns (uint256)\"}},\"id\":434,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5879:32:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"5858:53:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":436,\"nodeType\":\"ExpressionStatement\",\"src\":\"5858:53:0\"},{\"expression\":{\"hexValue\":\"74727565\",\"id\":437,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"5929:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"functionReturnParameters\":412,\"id\":438,\"nodeType\":\"Return\",\"src\":\"5922:11:0\"}]},\"functionSelector\":\"21df0da7\",\"id\":440,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":409,\"kind\":\"modifierInvocation\",\"modifierName\":{\"id\":408,\"name\":\"perValue\",\"nodeType\":\"IdentifierPath\",\"referencedDeclaration\":406,\"src\":\"5693:8:0\"},\"nodeType\":\"ModifierInvocation\",\"src\":\"5693:8:0\"}],\"name\":\"getToken\",\"nameLocation\":\"5667:8:0\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":407,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"5675:2:0\"},\"returnParameters\":{\"id\":412,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":411,\"mutability\":\"mutable\",\"name\":\"\",\"nameLocation\":\"-1:-1:-1\",\"nodeType\":\"VariableDeclaration\",\"scope\":440,\"src\":\"5711:4:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":410,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5711:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"5710:6:0\"},\"scope\":441,\"src\":\"5658:284:0\",\"stateMutability\":\"payable\",\"virtual\":false,\"visibility\":\"public\"}],\"scope\":442,\"src\":\"1443:4860:0\",\"usedErrors\":[]}],\"src\":\"33:6270:0\"},\"legacyAST\":{\"absolutePath\":\"/C/Users/turtl/TokenApp/contracts/JuroTokenContract.sol\",\"exportedSymbols\":{\"IERC20\":[163],\"JuroToken\":[441],\"SafeMath\":[96]},\"id\":442,\"license\":\"MIT\",\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":1,\"literals\":[\"solidity\",\">=\",\"0.4\",\".22\",\"<\",\"0.9\",\".0\"],\"nodeType\":\"PragmaDirective\",\"src\":\"33:32:0\"},{\"abstract\":false,\"baseContracts\":[],\"canonicalName\":\"SafeMath\",\"contractDependencies\":[],\"contractKind\":\"contract\",\"fullyImplemented\":true,\"id\":96,\"linearizedBaseContracts\":[96],\"name\":\"SafeMath\",\"nameLocation\":\"80:8:0\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"body\":{\"id\":22,\"nodeType\":\"Block\",\"src\":\"162:54:0\",\"statements\":[{\"expression\":{\"id\":14,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":10,\"name\":\"c\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":8,\"src\":\"173:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":13,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":11,\"name\":\"a\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":3,\"src\":\"177:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"+\",\"rightExpression\":{\"id\":12,\"name\":\"b\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":5,\"src\":\"181:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"177:5:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"173:9:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":15,\"nodeType\":\"ExpressionStatement\",\"src\":\"173:9:0\"},{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":19,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":17,\"name\":\"c\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":8,\"src\":\"201:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\">=\",\"rightExpression\":{\"id\":18,\"name\":\"a\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":3,\"src\":\"206:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"201:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":16,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[4294967278,4294967278],\"referencedDeclaration\":4294967278,\"src\":\"193:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":20,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"193:15:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":21,\"nodeType\":\"ExpressionStatement\",\"src\":\"193:15:0\"}]},\"id\":23,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"safeAdd\",\"nameLocation\":\"107:7:0\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":6,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":3,\"mutability\":\"mutable\",\"name\":\"a\",\"nameLocation\":\"120:1:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":23,\"src\":\"115:6:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":2,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"115:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":5,\"mutability\":\"mutable\",\"name\":\"b\",\"nameLocation\":\"128:1:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":23,\"src\":\"123:6:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":4,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"123:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"114:16:0\"},\"returnParameters\":{\"id\":9,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":8,\"mutability\":\"mutable\",\"name\":\"c\",\"nameLocation\":\"159:1:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":23,\"src\":\"154:6:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":7,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"154:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"153:8:0\"},\"scope\":96,\"src\":\"98:118:0\",\"stateMutability\":\"pure\",\"virtual\":false,\"visibility\":\"internal\"},{\"body\":{\"id\":44,\"nodeType\":\"Block\",\"src\":\"288:54:0\",\"statements\":[{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":35,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":33,\"name\":\"b\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":27,\"src\":\"307:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"<=\",\"rightExpression\":{\"id\":34,\"name\":\"a\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":25,\"src\":\"312:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"307:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":32,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[4294967278,4294967278],\"referencedDeclaration\":4294967278,\"src\":\"299:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":36,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"299:15:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":37,\"nodeType\":\"ExpressionStatement\",\"src\":\"299:15:0\"},{\"expression\":{\"id\":42,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":38,\"name\":\"c\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":30,\"src\":\"325:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":41,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":39,\"name\":\"a\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":25,\"src\":\"329:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"-\",\"rightExpression\":{\"id\":40,\"name\":\"b\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":27,\"src\":\"333:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"329:5:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"325:9:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":43,\"nodeType\":\"ExpressionStatement\",\"src\":\"325:9:0\"}]},\"id\":45,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"safeSub\",\"nameLocation\":\"233:7:0\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":28,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":25,\"mutability\":\"mutable\",\"name\":\"a\",\"nameLocation\":\"246:1:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":45,\"src\":\"241:6:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":24,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"241:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":27,\"mutability\":\"mutable\",\"name\":\"b\",\"nameLocation\":\"254:1:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":45,\"src\":\"249:6:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":26,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"249:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"240:16:0\"},\"returnParameters\":{\"id\":31,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":30,\"mutability\":\"mutable\",\"name\":\"c\",\"nameLocation\":\"285:1:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":45,\"src\":\"280:6:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":29,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"280:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"279:8:0\"},\"scope\":96,\"src\":\"224:118:0\",\"stateMutability\":\"pure\",\"virtual\":false,\"visibility\":\"internal\"},{\"body\":{\"id\":72,\"nodeType\":\"Block\",\"src\":\"414:68:0\",\"statements\":[{\"expression\":{\"id\":58,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":54,\"name\":\"c\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":52,\"src\":\"425:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":57,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":55,\"name\":\"a\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":47,\"src\":\"429:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"*\",\"rightExpression\":{\"id\":56,\"name\":\"b\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":49,\"src\":\"433:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"429:5:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"425:9:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":59,\"nodeType\":\"ExpressionStatement\",\"src\":\"425:9:0\"},{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"id\":69,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":63,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":61,\"name\":\"a\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":47,\"src\":\"453:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"hexValue\":\"30\",\"id\":62,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"458:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"src\":\"453:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"||\",\"rightExpression\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":68,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":66,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":64,\"name\":\"c\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":52,\"src\":\"463:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"/\",\"rightExpression\":{\"id\":65,\"name\":\"a\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":47,\"src\":\"467:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"463:5:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"id\":67,\"name\":\"b\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":49,\"src\":\"472:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"463:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"src\":\"453:20:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":60,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[4294967278,4294967278],\"referencedDeclaration\":4294967278,\"src\":\"445:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":70,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"445:29:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":71,\"nodeType\":\"ExpressionStatement\",\"src\":\"445:29:0\"}]},\"id\":73,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"safeMul\",\"nameLocation\":\"359:7:0\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":50,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":47,\"mutability\":\"mutable\",\"name\":\"a\",\"nameLocation\":\"372:1:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":73,\"src\":\"367:6:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":46,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"367:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":49,\"mutability\":\"mutable\",\"name\":\"b\",\"nameLocation\":\"380:1:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":73,\"src\":\"375:6:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":48,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"375:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"366:16:0\"},\"returnParameters\":{\"id\":53,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":52,\"mutability\":\"mutable\",\"name\":\"c\",\"nameLocation\":\"411:1:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":73,\"src\":\"406:6:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":51,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"406:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"405:8:0\"},\"scope\":96,\"src\":\"350:132:0\",\"stateMutability\":\"pure\",\"virtual\":false,\"visibility\":\"internal\"},{\"body\":{\"id\":94,\"nodeType\":\"Block\",\"src\":\"554:53:0\",\"statements\":[{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":85,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":83,\"name\":\"b\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":77,\"src\":\"573:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\">\",\"rightExpression\":{\"hexValue\":\"30\",\"id\":84,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"577:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"src\":\"573:5:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":82,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[4294967278,4294967278],\"referencedDeclaration\":4294967278,\"src\":\"565:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":86,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"565:14:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":87,\"nodeType\":\"ExpressionStatement\",\"src\":\"565:14:0\"},{\"expression\":{\"id\":92,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":88,\"name\":\"c\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":80,\"src\":\"590:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":91,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"id\":89,\"name\":\"a\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":75,\"src\":\"594:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"/\",\"rightExpression\":{\"id\":90,\"name\":\"b\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":77,\"src\":\"598:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"594:5:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"590:9:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":93,\"nodeType\":\"ExpressionStatement\",\"src\":\"590:9:0\"}]},\"id\":95,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"safeDiv\",\"nameLocation\":\"499:7:0\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":78,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":75,\"mutability\":\"mutable\",\"name\":\"a\",\"nameLocation\":\"512:1:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":95,\"src\":\"507:6:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":74,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"507:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":77,\"mutability\":\"mutable\",\"name\":\"b\",\"nameLocation\":\"520:1:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":95,\"src\":\"515:6:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":76,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"515:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"506:16:0\"},\"returnParameters\":{\"id\":81,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":80,\"mutability\":\"mutable\",\"name\":\"c\",\"nameLocation\":\"551:1:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":95,\"src\":\"546:6:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":79,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"546:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"545:8:0\"},\"scope\":96,\"src\":\"490:117:0\",\"stateMutability\":\"pure\",\"virtual\":false,\"visibility\":\"internal\"}],\"scope\":442,\"src\":\"71:539:0\",\"usedErrors\":[]},{\"abstract\":false,\"baseContracts\":[],\"canonicalName\":\"IERC20\",\"contractDependencies\":[],\"contractKind\":\"interface\",\"fullyImplemented\":false,\"id\":163,\"linearizedBaseContracts\":[163],\"name\":\"IERC20\",\"nameLocation\":\"626:6:0\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"anonymous\":false,\"id\":104,\"name\":\"Transfer\",\"nameLocation\":\"648:8:0\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":103,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":98,\"indexed\":true,\"mutability\":\"mutable\",\"name\":\"from\",\"nameLocation\":\"673:4:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":104,\"src\":\"657:20:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":97,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"657:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":100,\"indexed\":true,\"mutability\":\"mutable\",\"name\":\"to\",\"nameLocation\":\"695:2:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":104,\"src\":\"679:18:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":99,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"679:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":102,\"indexed\":false,\"mutability\":\"mutable\",\"name\":\"value\",\"nameLocation\":\"707:5:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":104,\"src\":\"699:13:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":101,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"699:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"656:57:0\"},\"src\":\"642:72:0\"},{\"anonymous\":false,\"id\":112,\"name\":\"Approval\",\"nameLocation\":\"730:8:0\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":111,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":106,\"indexed\":true,\"mutability\":\"mutable\",\"name\":\"owner\",\"nameLocation\":\"755:5:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":112,\"src\":\"739:21:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":105,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"739:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":108,\"indexed\":true,\"mutability\":\"mutable\",\"name\":\"spender\",\"nameLocation\":\"778:7:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":112,\"src\":\"762:23:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":107,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"762:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":110,\"indexed\":false,\"mutability\":\"mutable\",\"name\":\"value\",\"nameLocation\":\"795:5:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":112,\"src\":\"787:13:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":109,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"787:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"738:63:0\"},\"src\":\"724:78:0\"},{\"functionSelector\":\"18160ddd\",\"id\":117,\"implemented\":false,\"kind\":\"function\",\"modifiers\":[],\"name\":\"totalSupply\",\"nameLocation\":\"822:11:0\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":113,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"833:2:0\"},\"returnParameters\":{\"id\":116,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":115,\"mutability\":\"mutable\",\"name\":\"\",\"nameLocation\":\"-1:-1:-1\",\"nodeType\":\"VariableDeclaration\",\"scope\":117,\"src\":\"859:7:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":114,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"859:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"858:9:0\"},\"scope\":163,\"src\":\"813:55:0\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"external\"},{\"functionSelector\":\"70a08231\",\"id\":124,\"implemented\":false,\"kind\":\"function\",\"modifiers\":[],\"name\":\"balanceOf\",\"nameLocation\":\"887:9:0\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":120,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":119,\"mutability\":\"mutable\",\"name\":\"account\",\"nameLocation\":\"905:7:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":124,\"src\":\"897:15:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":118,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"897:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"src\":\"896:17:0\"},\"returnParameters\":{\"id\":123,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":122,\"mutability\":\"mutable\",\"name\":\"\",\"nameLocation\":\"-1:-1:-1\",\"nodeType\":\"VariableDeclaration\",\"scope\":124,\"src\":\"937:7:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":121,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"937:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"936:9:0\"},\"scope\":163,\"src\":\"878:68:0\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"external\"},{\"functionSelector\":\"a9059cbb\",\"id\":133,\"implemented\":false,\"kind\":\"function\",\"modifiers\":[],\"name\":\"transfer\",\"nameLocation\":\"965:8:0\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":129,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":126,\"mutability\":\"mutable\",\"name\":\"to\",\"nameLocation\":\"982:2:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":133,\"src\":\"974:10:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":125,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"974:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":128,\"mutability\":\"mutable\",\"name\":\"amount\",\"nameLocation\":\"994:6:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":133,\"src\":\"986:14:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":127,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"986:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"973:28:0\"},\"returnParameters\":{\"id\":132,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":131,\"mutability\":\"mutable\",\"name\":\"\",\"nameLocation\":\"-1:-1:-1\",\"nodeType\":\"VariableDeclaration\",\"scope\":133,\"src\":\"1020:4:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":130,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1020:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"1019:6:0\"},\"scope\":163,\"src\":\"956:70:0\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"external\"},{\"functionSelector\":\"dd62ed3e\",\"id\":142,\"implemented\":false,\"kind\":\"function\",\"modifiers\":[],\"name\":\"allowance\",\"nameLocation\":\"1045:9:0\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":138,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":135,\"mutability\":\"mutable\",\"name\":\"owner\",\"nameLocation\":\"1063:5:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":142,\"src\":\"1055:13:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":134,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1055:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":137,\"mutability\":\"mutable\",\"name\":\"spender\",\"nameLocation\":\"1078:7:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":142,\"src\":\"1070:15:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":136,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1070:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"src\":\"1054:32:0\"},\"returnParameters\":{\"id\":141,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":140,\"mutability\":\"mutable\",\"name\":\"\",\"nameLocation\":\"-1:-1:-1\",\"nodeType\":\"VariableDeclaration\",\"scope\":142,\"src\":\"1110:7:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":139,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1110:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"1109:9:0\"},\"scope\":163,\"src\":\"1036:83:0\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"external\"},{\"functionSelector\":\"095ea7b3\",\"id\":151,\"implemented\":false,\"kind\":\"function\",\"modifiers\":[],\"name\":\"approve\",\"nameLocation\":\"1138:7:0\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":147,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":144,\"mutability\":\"mutable\",\"name\":\"spender\",\"nameLocation\":\"1154:7:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":151,\"src\":\"1146:15:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":143,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1146:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":146,\"mutability\":\"mutable\",\"name\":\"amount\",\"nameLocation\":\"1171:6:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":151,\"src\":\"1163:14:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":145,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1163:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"1145:33:0\"},\"returnParameters\":{\"id\":150,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":149,\"mutability\":\"mutable\",\"name\":\"\",\"nameLocation\":\"-1:-1:-1\",\"nodeType\":\"VariableDeclaration\",\"scope\":151,\"src\":\"1197:4:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":148,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1197:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"1196:6:0\"},\"scope\":163,\"src\":\"1129:74:0\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"external\"},{\"functionSelector\":\"23b872dd\",\"id\":162,\"implemented\":false,\"kind\":\"function\",\"modifiers\":[],\"name\":\"transferFrom\",\"nameLocation\":\"1222:12:0\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":158,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":153,\"mutability\":\"mutable\",\"name\":\"from\",\"nameLocation\":\"1253:4:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":162,\"src\":\"1245:12:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":152,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1245:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":155,\"mutability\":\"mutable\",\"name\":\"to\",\"nameLocation\":\"1276:2:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":162,\"src\":\"1268:10:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":154,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1268:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":157,\"mutability\":\"mutable\",\"name\":\"amount\",\"nameLocation\":\"1297:6:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":162,\"src\":\"1289:14:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":156,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1289:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"1234:76:0\"},\"returnParameters\":{\"id\":161,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":160,\"mutability\":\"mutable\",\"name\":\"\",\"nameLocation\":\"-1:-1:-1\",\"nodeType\":\"VariableDeclaration\",\"scope\":162,\"src\":\"1329:4:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":159,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1329:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"1328:6:0\"},\"scope\":163,\"src\":\"1213:122:0\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"external\"}],\"scope\":442,\"src\":\"616:722:0\",\"usedErrors\":[]},{\"abstract\":false,\"baseContracts\":[{\"baseName\":{\"id\":165,\"name\":\"IERC20\",\"nodeType\":\"IdentifierPath\",\"referencedDeclaration\":163,\"src\":\"1465:6:0\"},\"id\":166,\"nodeType\":\"InheritanceSpecifier\",\"src\":\"1465:6:0\"},{\"baseName\":{\"id\":167,\"name\":\"SafeMath\",\"nodeType\":\"IdentifierPath\",\"referencedDeclaration\":96,\"src\":\"1473:8:0\"},\"id\":168,\"nodeType\":\"InheritanceSpecifier\",\"src\":\"1473:8:0\"}],\"canonicalName\":\"JuroToken\",\"contractDependencies\":[],\"contractKind\":\"contract\",\"documentation\":{\"id\":164,\"nodeType\":\"StructuredDocumentation\",\"src\":\"1344:97:0\",\"text\":\"ERC20 Token, with the addition of symbol, name and decimals and assisted token transfers\"},\"fullyImplemented\":true,\"id\":441,\"linearizedBaseContracts\":[441,96,163],\"name\":\"JuroToken\",\"nameLocation\":\"1452:9:0\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"constant\":false,\"functionSelector\":\"95d89b41\",\"id\":170,\"mutability\":\"mutable\",\"name\":\"symbol\",\"nameLocation\":\"1503:6:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":441,\"src\":\"1489:20:0\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string\"},\"typeName\":{\"id\":169,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1489:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"06fdde03\",\"id\":172,\"mutability\":\"mutable\",\"name\":\"name\",\"nameLocation\":\"1531:4:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":441,\"src\":\"1516:19:0\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string\"},\"typeName\":{\"id\":171,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1516:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"313ce567\",\"id\":174,\"mutability\":\"mutable\",\"name\":\"decimals\",\"nameLocation\":\"1555:8:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":441,\"src\":\"1542:21:0\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint8\",\"typeString\":\"uint8\"},\"typeName\":{\"id\":173,\"name\":\"uint8\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1542:5:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint8\",\"typeString\":\"uint8\"}},\"visibility\":\"public\"},{\"constant\":false,\"functionSelector\":\"3eaaf86b\",\"id\":176,\"mutability\":\"mutable\",\"name\":\"_totalSupply\",\"nameLocation\":\"1582:12:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":441,\"src\":\"1570:24:0\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":175,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1570:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"public\"},{\"constant\":false,\"id\":180,\"mutability\":\"mutable\",\"name\":\"balances\",\"nameLocation\":\"1628:8:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":441,\"src\":\"1603:33:0\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"},\"typeName\":{\"id\":179,\"keyType\":{\"id\":177,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1611:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"1603:24:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"},\"valueType\":{\"id\":178,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1622:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":186,\"mutability\":\"mutable\",\"name\":\"allowed\",\"nameLocation\":\"1688:7:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":441,\"src\":\"1643:52:0\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$\",\"typeString\":\"mapping(address => mapping(address => uint256))\"},\"typeName\":{\"id\":185,\"keyType\":{\"id\":181,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1651:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"1643:44:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$\",\"typeString\":\"mapping(address => mapping(address => uint256))\"},\"valueType\":{\"id\":184,\"keyType\":{\"id\":182,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1670:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"1662:24:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"},\"valueType\":{\"id\":183,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1681:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}}},\"visibility\":\"internal\"},{\"body\":{\"id\":217,\"nodeType\":\"Block\",\"src\":\"1902:323:0\",\"statements\":[{\"expression\":{\"id\":191,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":189,\"name\":\"symbol\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":170,\"src\":\"1913:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"hexValue\":\"4a75726f\",\"id\":190,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1922:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_bbe6dba80d26e5b356544f8e9eef12f40bcc626a268c7430fee632e0511a4703\",\"typeString\":\"literal_string \\\"Juro\\\"\"},\"value\":\"Juro\"},\"src\":\"1913:15:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":192,\"nodeType\":\"ExpressionStatement\",\"src\":\"1913:15:0\"},{\"expression\":{\"id\":195,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":193,\"name\":\"name\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":172,\"src\":\"1939:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"hexValue\":\"4a75726f20546f6b656e\",\"id\":194,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"string\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1946:12:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_stringliteral_2ac89f99b084d8456d56f678b3722d1563d2e01e620e9fc6d03e51830658bca6\",\"typeString\":\"literal_string \\\"Juro Token\\\"\"},\"value\":\"Juro Token\"},\"src\":\"1939:19:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":196,\"nodeType\":\"ExpressionStatement\",\"src\":\"1939:19:0\"},{\"expression\":{\"id\":199,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":197,\"name\":\"decimals\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":174,\"src\":\"1969:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint8\",\"typeString\":\"uint8\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"hexValue\":\"32\",\"id\":198,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"1980:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_2_by_1\",\"typeString\":\"int_const 2\"},\"value\":\"2\"},\"src\":\"1969:12:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint8\",\"typeString\":\"uint8\"}},\"id\":200,\"nodeType\":\"ExpressionStatement\",\"src\":\"1969:12:0\"},{\"expression\":{\"id\":203,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"id\":201,\"name\":\"_totalSupply\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":176,\"src\":\"1992:12:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"hexValue\":\"313030303030\",\"id\":202,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2007:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_100000_by_1\",\"typeString\":\"int_const 100000\"},\"value\":\"100000\"},\"src\":\"1992:21:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":204,\"nodeType\":\"ExpressionStatement\",\"src\":\"1992:21:0\"},{\"expression\":{\"id\":209,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"id\":205,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":180,\"src\":\"2024:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":207,\"indexExpression\":{\"hexValue\":\"307835423130333064634430614638623737423833653162353265303138363441373962656433324544\",\"id\":206,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2033:42:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"value\":\"0x5B1030dcD0aF8b77B83e1b52e01864A79bed32ED\"},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"2024:52:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":208,\"name\":\"_totalSupply\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":176,\"src\":\"2079:12:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"2024:67:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":210,\"nodeType\":\"ExpressionStatement\",\"src\":\"2024:67:0\"},{\"eventCall\":{\"arguments\":[{\"hexValue\":\"307830303030303030303030303030303030303030303030303030303030303030303030303030303030\",\"id\":212,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2116:42:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"value\":\"0x0000000000000000000000000000000000000000\"},{\"hexValue\":\"307835423130333064634430614638623737423833653162353265303138363441373962656433324544\",\"id\":213,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2160:42:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"value\":\"0x5B1030dcD0aF8b77B83e1b52e01864A79bed32ED\"},{\"id\":214,\"name\":\"_totalSupply\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":176,\"src\":\"2204:12:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":211,\"name\":\"Transfer\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":104,\"src\":\"2107:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$\",\"typeString\":\"function (address,address,uint256)\"}},\"id\":215,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2107:110:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":216,\"nodeType\":\"EmitStatement\",\"src\":\"2102:115:0\"}]},\"id\":218,\"implemented\":true,\"kind\":\"constructor\",\"modifiers\":[],\"name\":\"\",\"nameLocation\":\"-1:-1:-1\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":187,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1899:2:0\"},\"returnParameters\":{\"id\":188,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"1902:0:0\"},\"scope\":441,\"src\":\"1888:337:0\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"baseFunctions\":[117],\"body\":{\"id\":231,\"nodeType\":\"Block\",\"src\":\"2477:100:0\",\"statements\":[{\"expression\":{\"arguments\":[{\"id\":225,\"name\":\"_totalSupply\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":176,\"src\":\"2503:12:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},{\"baseExpression\":{\"id\":226,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":180,\"src\":\"2516:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":228,\"indexExpression\":{\"hexValue\":\"307830303030303030303030303030303030303030303030303030303030303030303030303030303030\",\"id\":227,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"2525:42:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"value\":\"0x0000000000000000000000000000000000000000\"},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2516:52:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":224,\"name\":\"safeSub\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":45,\"src\":\"2495:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$\",\"typeString\":\"function (uint256,uint256) pure returns (uint256)\"}},\"id\":229,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"2495:74:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"functionReturnParameters\":223,\"id\":230,\"nodeType\":\"Return\",\"src\":\"2488:81:0\"}]},\"functionSelector\":\"18160ddd\",\"id\":232,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"totalSupply\",\"nameLocation\":\"2427:11:0\",\"nodeType\":\"FunctionDefinition\",\"overrides\":{\"id\":220,\"nodeType\":\"OverrideSpecifier\",\"overrides\":[],\"src\":\"2453:8:0\"},\"parameters\":{\"id\":219,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"2438:2:0\"},\"returnParameters\":{\"id\":223,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":222,\"mutability\":\"mutable\",\"name\":\"\",\"nameLocation\":\"-1:-1:-1\",\"nodeType\":\"VariableDeclaration\",\"scope\":232,\"src\":\"2471:4:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":221,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2471:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"2470:6:0\"},\"scope\":441,\"src\":\"2418:159:0\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"baseFunctions\":[124],\"body\":{\"id\":244,\"nodeType\":\"Block\",\"src\":\"2886:46:0\",\"statements\":[{\"expression\":{\"baseExpression\":{\"id\":240,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":180,\"src\":\"2904:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":242,\"indexExpression\":{\"id\":241,\"name\":\"tokenOwner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":234,\"src\":\"2913:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"2904:20:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"functionReturnParameters\":239,\"id\":243,\"nodeType\":\"Return\",\"src\":\"2897:27:0\"}]},\"functionSelector\":\"70a08231\",\"id\":245,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"balanceOf\",\"nameLocation\":\"2811:9:0\",\"nodeType\":\"FunctionDefinition\",\"overrides\":{\"id\":236,\"nodeType\":\"OverrideSpecifier\",\"overrides\":[],\"src\":\"2853:8:0\"},\"parameters\":{\"id\":235,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":234,\"mutability\":\"mutable\",\"name\":\"tokenOwner\",\"nameLocation\":\"2829:10:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":245,\"src\":\"2821:18:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":233,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2821:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"src\":\"2820:20:0\"},\"returnParameters\":{\"id\":239,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":238,\"mutability\":\"mutable\",\"name\":\"balance\",\"nameLocation\":\"2877:7:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":245,\"src\":\"2872:12:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":237,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2872:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"2871:14:0\"},\"scope\":441,\"src\":\"2802:130:0\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"baseFunctions\":[133],\"body\":{\"id\":288,\"nodeType\":\"Block\",\"src\":\"3363:204:0\",\"statements\":[{\"expression\":{\"id\":266,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"id\":255,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":180,\"src\":\"3374:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":258,\"indexExpression\":{\"expression\":{\"id\":256,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":4294967281,\"src\":\"3383:3:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":257,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"3383:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"3374:20:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"arguments\":[{\"baseExpression\":{\"id\":260,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":180,\"src\":\"3405:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":263,\"indexExpression\":{\"expression\":{\"id\":261,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":4294967281,\"src\":\"3414:3:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":262,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"3414:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"3405:20:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},{\"id\":264,\"name\":\"tokens\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":249,\"src\":\"3427:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":259,\"name\":\"safeSub\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":45,\"src\":\"3397:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$\",\"typeString\":\"function (uint256,uint256) pure returns (uint256)\"}},\"id\":265,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"3397:37:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"3374:60:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":267,\"nodeType\":\"ExpressionStatement\",\"src\":\"3374:60:0\"},{\"expression\":{\"id\":277,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"id\":268,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":180,\"src\":\"3445:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":270,\"indexExpression\":{\"id\":269,\"name\":\"to\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":247,\"src\":\"3454:2:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"3445:12:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"arguments\":[{\"baseExpression\":{\"id\":272,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":180,\"src\":\"3468:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":274,\"indexExpression\":{\"id\":273,\"name\":\"to\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":247,\"src\":\"3477:2:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"3468:12:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},{\"id\":275,\"name\":\"tokens\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":249,\"src\":\"3482:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":271,\"name\":\"safeAdd\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":23,\"src\":\"3460:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$\",\"typeString\":\"function (uint256,uint256) pure returns (uint256)\"}},\"id\":276,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"3460:29:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"3445:44:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":278,\"nodeType\":\"ExpressionStatement\",\"src\":\"3445:44:0\"},{\"eventCall\":{\"arguments\":[{\"expression\":{\"id\":280,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":4294967281,\"src\":\"3514:3:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":281,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"3514:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},{\"id\":282,\"name\":\"to\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":247,\"src\":\"3526:2:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},{\"id\":283,\"name\":\"tokens\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":249,\"src\":\"3530:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":279,\"name\":\"Transfer\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":104,\"src\":\"3505:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$\",\"typeString\":\"function (address,address,uint256)\"}},\"id\":284,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"3505:32:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":285,\"nodeType\":\"EmitStatement\",\"src\":\"3500:37:0\"},{\"expression\":{\"hexValue\":\"74727565\",\"id\":286,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"3555:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"functionReturnParameters\":254,\"id\":287,\"nodeType\":\"Return\",\"src\":\"3548:11:0\"}]},\"functionSelector\":\"a9059cbb\",\"id\":289,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"transfer\",\"nameLocation\":\"3290:8:0\",\"nodeType\":\"FunctionDefinition\",\"overrides\":{\"id\":251,\"nodeType\":\"OverrideSpecifier\",\"overrides\":[],\"src\":\"3331:8:0\"},\"parameters\":{\"id\":250,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":247,\"mutability\":\"mutable\",\"name\":\"to\",\"nameLocation\":\"3307:2:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":289,\"src\":\"3299:10:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":246,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3299:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":249,\"mutability\":\"mutable\",\"name\":\"tokens\",\"nameLocation\":\"3316:6:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":289,\"src\":\"3311:11:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":248,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3311:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"3298:25:0\"},\"returnParameters\":{\"id\":254,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":253,\"mutability\":\"mutable\",\"name\":\"success\",\"nameLocation\":\"3354:7:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":289,\"src\":\"3349:12:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":252,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"3349:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"3348:14:0\"},\"scope\":441,\"src\":\"3281:286:0\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"baseFunctions\":[151],\"body\":{\"id\":317,\"nodeType\":\"Block\",\"src\":\"4083:131:0\",\"statements\":[{\"expression\":{\"id\":306,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"baseExpression\":{\"id\":299,\"name\":\"allowed\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":186,\"src\":\"4094:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$\",\"typeString\":\"mapping(address => mapping(address => uint256))\"}},\"id\":303,\"indexExpression\":{\"expression\":{\"id\":300,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":4294967281,\"src\":\"4102:3:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":301,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"4102:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4094:19:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":304,\"indexExpression\":{\"id\":302,\"name\":\"spender\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":291,\"src\":\"4114:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"4094:28:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":305,\"name\":\"tokens\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":293,\"src\":\"4125:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"4094:37:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":307,\"nodeType\":\"ExpressionStatement\",\"src\":\"4094:37:0\"},{\"eventCall\":{\"arguments\":[{\"expression\":{\"id\":309,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":4294967281,\"src\":\"4156:3:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":310,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"4156:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},{\"id\":311,\"name\":\"spender\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":291,\"src\":\"4168:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},{\"id\":312,\"name\":\"tokens\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":293,\"src\":\"4177:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":308,\"name\":\"Approval\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":112,\"src\":\"4147:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$\",\"typeString\":\"function (address,address,uint256)\"}},\"id\":313,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"4147:37:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":314,\"nodeType\":\"EmitStatement\",\"src\":\"4142:42:0\"},{\"expression\":{\"hexValue\":\"74727565\",\"id\":315,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"4202:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"functionReturnParameters\":298,\"id\":316,\"nodeType\":\"Return\",\"src\":\"4195:11:0\"}]},\"functionSelector\":\"095ea7b3\",\"id\":318,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"approve\",\"nameLocation\":\"4006:7:0\",\"nodeType\":\"FunctionDefinition\",\"overrides\":{\"id\":295,\"nodeType\":\"OverrideSpecifier\",\"overrides\":[],\"src\":\"4051:8:0\"},\"parameters\":{\"id\":294,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":291,\"mutability\":\"mutable\",\"name\":\"spender\",\"nameLocation\":\"4022:7:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":318,\"src\":\"4014:15:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":290,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4014:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":293,\"mutability\":\"mutable\",\"name\":\"tokens\",\"nameLocation\":\"4036:6:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":318,\"src\":\"4031:11:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":292,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4031:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"4013:30:0\"},\"returnParameters\":{\"id\":298,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":297,\"mutability\":\"mutable\",\"name\":\"success\",\"nameLocation\":\"4074:7:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":318,\"src\":\"4069:12:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":296,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4069:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"4068:14:0\"},\"scope\":441,\"src\":\"3997:217:0\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"baseFunctions\":[162],\"body\":{\"id\":377,\"nodeType\":\"Block\",\"src\":\"4850:267:0\",\"statements\":[{\"expression\":{\"id\":339,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"id\":330,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":180,\"src\":\"4861:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":332,\"indexExpression\":{\"id\":331,\"name\":\"from\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":320,\"src\":\"4870:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"4861:14:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"arguments\":[{\"baseExpression\":{\"id\":334,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":180,\"src\":\"4886:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":336,\"indexExpression\":{\"id\":335,\"name\":\"from\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":320,\"src\":\"4895:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4886:14:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},{\"id\":337,\"name\":\"tokens\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":324,\"src\":\"4902:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":333,\"name\":\"safeSub\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":45,\"src\":\"4878:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$\",\"typeString\":\"function (uint256,uint256) pure returns (uint256)\"}},\"id\":338,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"4878:31:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"4861:48:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":340,\"nodeType\":\"ExpressionStatement\",\"src\":\"4861:48:0\"},{\"expression\":{\"id\":356,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"baseExpression\":{\"id\":341,\"name\":\"allowed\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":186,\"src\":\"4920:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$\",\"typeString\":\"mapping(address => mapping(address => uint256))\"}},\"id\":345,\"indexExpression\":{\"id\":342,\"name\":\"from\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":320,\"src\":\"4928:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4920:13:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":346,\"indexExpression\":{\"expression\":{\"id\":343,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":4294967281,\"src\":\"4934:3:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":344,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"4934:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"4920:25:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"arguments\":[{\"baseExpression\":{\"baseExpression\":{\"id\":348,\"name\":\"allowed\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":186,\"src\":\"4956:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$\",\"typeString\":\"mapping(address => mapping(address => uint256))\"}},\"id\":350,\"indexExpression\":{\"id\":349,\"name\":\"from\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":320,\"src\":\"4964:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4956:13:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":353,\"indexExpression\":{\"expression\":{\"id\":351,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":4294967281,\"src\":\"4970:3:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":352,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"4970:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"4956:25:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},{\"id\":354,\"name\":\"tokens\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":324,\"src\":\"4983:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":347,\"name\":\"safeSub\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":45,\"src\":\"4948:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$\",\"typeString\":\"function (uint256,uint256) pure returns (uint256)\"}},\"id\":355,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"4948:42:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"4920:70:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":357,\"nodeType\":\"ExpressionStatement\",\"src\":\"4920:70:0\"},{\"expression\":{\"id\":367,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"id\":358,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":180,\"src\":\"5001:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":360,\"indexExpression\":{\"id\":359,\"name\":\"to\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":322,\"src\":\"5010:2:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"5001:12:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"arguments\":[{\"baseExpression\":{\"id\":362,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":180,\"src\":\"5024:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":364,\"indexExpression\":{\"id\":363,\"name\":\"to\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":322,\"src\":\"5033:2:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"5024:12:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},{\"id\":365,\"name\":\"tokens\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":324,\"src\":\"5038:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":361,\"name\":\"safeAdd\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":23,\"src\":\"5016:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$\",\"typeString\":\"function (uint256,uint256) pure returns (uint256)\"}},\"id\":366,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5016:29:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"5001:44:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":368,\"nodeType\":\"ExpressionStatement\",\"src\":\"5001:44:0\"},{\"eventCall\":{\"arguments\":[{\"id\":370,\"name\":\"from\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":320,\"src\":\"5070:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},{\"id\":371,\"name\":\"to\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":322,\"src\":\"5076:2:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},{\"id\":372,\"name\":\"tokens\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":324,\"src\":\"5080:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}],\"id\":369,\"name\":\"Transfer\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":104,\"src\":\"5061:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$\",\"typeString\":\"function (address,address,uint256)\"}},\"id\":373,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5061:26:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":374,\"nodeType\":\"EmitStatement\",\"src\":\"5056:31:0\"},{\"expression\":{\"hexValue\":\"74727565\",\"id\":375,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"5105:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"functionReturnParameters\":329,\"id\":376,\"nodeType\":\"Return\",\"src\":\"5098:11:0\"}]},\"functionSelector\":\"23b872dd\",\"id\":378,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"transferFrom\",\"nameLocation\":\"4759:12:0\",\"nodeType\":\"FunctionDefinition\",\"overrides\":{\"id\":326,\"nodeType\":\"OverrideSpecifier\",\"overrides\":[],\"src\":\"4818:8:0\"},\"parameters\":{\"id\":325,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":320,\"mutability\":\"mutable\",\"name\":\"from\",\"nameLocation\":\"4780:4:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":378,\"src\":\"4772:12:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":319,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4772:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":322,\"mutability\":\"mutable\",\"name\":\"to\",\"nameLocation\":\"4794:2:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":378,\"src\":\"4786:10:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":321,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4786:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":324,\"mutability\":\"mutable\",\"name\":\"tokens\",\"nameLocation\":\"4803:6:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":378,\"src\":\"4798:11:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":323,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4798:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"4771:39:0\"},\"returnParameters\":{\"id\":329,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":328,\"mutability\":\"mutable\",\"name\":\"success\",\"nameLocation\":\"4841:7:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":378,\"src\":\"4836:12:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":327,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"4836:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"4835:14:0\"},\"scope\":441,\"src\":\"4750:367:0\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"baseFunctions\":[142],\"body\":{\"id\":394,\"nodeType\":\"Block\",\"src\":\"5507:54:0\",\"statements\":[{\"expression\":{\"baseExpression\":{\"baseExpression\":{\"id\":388,\"name\":\"allowed\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":186,\"src\":\"5525:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$\",\"typeString\":\"mapping(address => mapping(address => uint256))\"}},\"id\":390,\"indexExpression\":{\"id\":389,\"name\":\"tokenOwner\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":380,\"src\":\"5533:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"5525:19:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":392,\"indexExpression\":{\"id\":391,\"name\":\"spender\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":382,\"src\":\"5545:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"5525:28:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"functionReturnParameters\":387,\"id\":393,\"nodeType\":\"Return\",\"src\":\"5518:35:0\"}]},\"functionSelector\":\"dd62ed3e\",\"id\":395,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"allowance\",\"nameLocation\":\"5414:9:0\",\"nodeType\":\"FunctionDefinition\",\"overrides\":{\"id\":384,\"nodeType\":\"OverrideSpecifier\",\"overrides\":[],\"src\":\"5473:8:0\"},\"parameters\":{\"id\":383,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":380,\"mutability\":\"mutable\",\"name\":\"tokenOwner\",\"nameLocation\":\"5432:10:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":395,\"src\":\"5424:18:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":379,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5424:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":382,\"mutability\":\"mutable\",\"name\":\"spender\",\"nameLocation\":\"5452:7:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":395,\"src\":\"5444:15:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":381,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5444:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"visibility\":\"internal\"}],\"src\":\"5423:37:0\"},\"returnParameters\":{\"id\":387,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":386,\"mutability\":\"mutable\",\"name\":\"remaining\",\"nameLocation\":\"5496:9:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":395,\"src\":\"5491:14:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":385,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5491:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"visibility\":\"internal\"}],\"src\":\"5490:16:0\"},\"scope\":441,\"src\":\"5405:156:0\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":405,\"nodeType\":\"Block\",\"src\":\"5588:62:0\",\"statements\":[{\"expression\":{\"arguments\":[{\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":401,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"expression\":{\"id\":398,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":4294967281,\"src\":\"5607:3:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":399,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"value\",\"nodeType\":\"MemberAccess\",\"src\":\"5607:9:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"hexValue\":\"302e303031\",\"id\":400,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"5618:11:0\",\"subdenomination\":\"ether\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1000000000000000_by_1\",\"typeString\":\"int_const 1000000000000000\"},\"value\":\"0.001\"},\"src\":\"5607:22:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":397,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[4294967278,4294967278],\"referencedDeclaration\":4294967278,\"src\":\"5599:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":402,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5599:31:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":403,\"nodeType\":\"ExpressionStatement\",\"src\":\"5599:31:0\"},{\"id\":404,\"nodeType\":\"PlaceholderStatement\",\"src\":\"5641:1:0\"}]},\"id\":406,\"name\":\"perValue\",\"nameLocation\":\"5578:8:0\",\"nodeType\":\"ModifierDefinition\",\"parameters\":{\"id\":396,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"5586:2:0\"},\"src\":\"5569:81:0\",\"virtual\":false,\"visibility\":\"internal\"},{\"body\":{\"id\":439,\"nodeType\":\"Block\",\"src\":\"5716:226:0\",\"statements\":[{\"expression\":{\"id\":422,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"id\":413,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":180,\"src\":\"5727:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":415,\"indexExpression\":{\"hexValue\":\"307835423130333064634430614638623737423833653162353265303138363441373962656433324544\",\"id\":414,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"5736:42:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"value\":\"0x5B1030dcD0aF8b77B83e1b52e01864A79bed32ED\"},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"5727:52:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"arguments\":[{\"baseExpression\":{\"id\":417,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":180,\"src\":\"5790:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":419,\"indexExpression\":{\"hexValue\":\"307835423130333064634430614638623737423833653162353265303138363441373962656433324544\",\"id\":418,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"5799:42:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"value\":\"0x5B1030dcD0aF8b77B83e1b52e01864A79bed32ED\"},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"5790:52:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},{\"hexValue\":\"3130\",\"id\":420,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"5844:2:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_10_by_1\",\"typeString\":\"int_const 10\"},\"value\":\"10\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},{\"typeIdentifier\":\"t_rational_10_by_1\",\"typeString\":\"int_const 10\"}],\"id\":416,\"name\":\"safeSub\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":45,\"src\":\"5782:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$\",\"typeString\":\"function (uint256,uint256) pure returns (uint256)\"}},\"id\":421,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5782:65:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"5727:120:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":423,\"nodeType\":\"ExpressionStatement\",\"src\":\"5727:120:0\"},{\"expression\":{\"id\":435,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"baseExpression\":{\"id\":424,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":180,\"src\":\"5858:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":427,\"indexExpression\":{\"expression\":{\"id\":425,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":4294967281,\"src\":\"5867:3:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":426,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"5867:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"5858:20:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"arguments\":[{\"baseExpression\":{\"id\":429,\"name\":\"balances\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":180,\"src\":\"5887:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":432,\"indexExpression\":{\"expression\":{\"id\":430,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":4294967281,\"src\":\"5896:3:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":431,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"src\":\"5896:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"5887:20:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},{\"hexValue\":\"3130\",\"id\":433,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"5908:2:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_10_by_1\",\"typeString\":\"int_const 10\"},\"value\":\"10\"}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},{\"typeIdentifier\":\"t_rational_10_by_1\",\"typeString\":\"int_const 10\"}],\"id\":428,\"name\":\"safeAdd\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":23,\"src\":\"5879:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$\",\"typeString\":\"function (uint256,uint256) pure returns (uint256)\"}},\"id\":434,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"5879:32:0\",\"tryCall\":false,\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"src\":\"5858:53:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":436,\"nodeType\":\"ExpressionStatement\",\"src\":\"5858:53:0\"},{\"expression\":{\"hexValue\":\"74727565\",\"id\":437,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"5929:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"functionReturnParameters\":412,\"id\":438,\"nodeType\":\"Return\",\"src\":\"5922:11:0\"}]},\"functionSelector\":\"21df0da7\",\"id\":440,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"id\":409,\"kind\":\"modifierInvocation\",\"modifierName\":{\"id\":408,\"name\":\"perValue\",\"nodeType\":\"IdentifierPath\",\"referencedDeclaration\":406,\"src\":\"5693:8:0\"},\"nodeType\":\"ModifierInvocation\",\"src\":\"5693:8:0\"}],\"name\":\"getToken\",\"nameLocation\":\"5667:8:0\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":407,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"5675:2:0\"},\"returnParameters\":{\"id\":412,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":411,\"mutability\":\"mutable\",\"name\":\"\",\"nameLocation\":\"-1:-1:-1\",\"nodeType\":\"VariableDeclaration\",\"scope\":440,\"src\":\"5711:4:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":410,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"5711:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"5710:6:0\"},\"scope\":441,\"src\":\"5658:284:0\",\"stateMutability\":\"payable\",\"virtual\":false,\"visibility\":\"public\"}],\"scope\":442,\"src\":\"1443:4860:0\",\"usedErrors\":[]}],\"src\":\"33:6270:0\"},\"compiler\":{\"name\":\"solc\",\"version\":\"0.8.10+commit.fc410830.Emscripten.clang\"},\"networks\":{\"4\":{\"events\":{\"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925\":{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},\"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef\":{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"}},\"links\":{},\"address\":\"0x9638A12E578966ba64aAcE99D989688aeA217272\",\"transactionHash\":\"0xb51841442b07bac1ac0e6adcd74436b2ed37645671a63458f11de37cda8dd2b7\"},\"5777\":{\"events\":{},\"links\":{},\"address\":\"0x138A6942aDAA8424f58f69A05eF35B46d02f24EA\",\"transactionHash\":\"0xe077cf4a78ae1fad2bf0291be47dc4094504cc853073aa0d9ae0351070df7d53\"}},\"schemaVersion\":\"3.4.1\",\"updatedAt\":\"2022-06-30T04:15:51.039Z\",\"networkType\":\"ethereum\",\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"ERC20 Token, with the addition of symbol, name and decimals and assisted token transfers\",\"version\":1}}");

/***/ }),

/***/ "./components/JuroBanner.js":
/*!**********************************!*\
  !*** ./components/JuroBanner.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_juroimg_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/juroimg.jpg */ "./components/img/juroimg.jpg");
/* harmony import */ var _img_juroimg_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_juroimg_jpg__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\turtl\\TokenApp\\components\\JuroBanner.js";



const JuroBanner = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
      src: _img_juroimg_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
      width: "300px",
      height: "75px"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (JuroBanner);

/***/ }),

/***/ "./components/img/juroimg.jpg":
/*!************************************!*\
  !*** ./components/img/juroimg.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/juroimg-62bc1c6b815300cd9d635be55f2d9bd8.jpg";

/***/ }),

/***/ "./components/layout/Layout.js":
/*!*************************************!*\
  !*** ./components/layout/Layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainNavigation */ "./components/layout/MainNavigation.js");
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout.module.css */ "./components/layout/Layout.module.css");
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\turtl\\TokenApp\\components\\layout\\Layout.js";



function Layout(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MainNavigation__WEBPACK_IMPORTED_MODULE_1__["default"], {
      account: props.account,
      login: props.login,
      logout: props.logout
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/layout/Layout.module.css":
/*!*********************************************!*\
  !*** ./components/layout/Layout.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main": "Layout_main__2Mwq5"
};


/***/ }),

/***/ "./components/layout/MainNavigation.js":
/*!*********************************************!*\
  !*** ./components/layout/MainNavigation.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainNavigation.module.css */ "./components/layout/MainNavigation.module.css");
/* harmony import */ var _MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _JuroBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../JuroBanner */ "./components/JuroBanner.js");

var _jsxFileName = "C:\\Users\\turtl\\TokenApp\\components\\layout\\MainNavigation.js";






function MainNavigation(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"], {
    className: _MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nav,
    expand: "lg",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      fluid: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"].Brand, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "/",
              children: "Juro Instruments"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 45
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"].Toggle, {
        "aria-controls": "basic-navbar-nav"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"].Collapse, {
        id: "basic-navbar-nav",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
          className: "me-auto my-2 my-lg-0",
          style: {
            maxHeight: "100px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,
                children: "Home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/about",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,
                children: "About"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/service",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,
                children: "Service"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this), props.account && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          variant: "warning",
          className: _MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navButton,
          onClick: props.logout,
          children: "Change Account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 27
        }, this), !props.account && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          variant: "warning",
          className: _MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navButton,
          onClick: props.login,
          children: "Connect"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 28
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MainNavigation);

/***/ }),

/***/ "./components/layout/MainNavigation.module.css":
/*!*****************************************************!*\
  !*** ./components/layout/MainNavigation.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"nav": "MainNavigation_nav__2qGXM",
	"header": "MainNavigation_header__t8YPG",
	"content": "MainNavigation_content__Hd9s6",
	"divider": "MainNavigation_divider__3F6J1",
	"logo": "MainNavigation_logo__Qwpy5",
	"navButton": "MainNavigation_navButton__151j8",
	"active": "MainNavigation_active__sxu85"
};


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout) {
  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout);
  const last = widths.length - 1;
  return {
    src: loader({
      src,
      quality,
      width: widths[last]
    }),
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', ')
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: isVisible ? 'inherit' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://err.sh/next.js/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const localeDomain = (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://err.sh/next.js/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _build_contracts_JuroToken_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../build/contracts/JuroToken.json */ "./build/contracts/JuroToken.json");
var _build_contracts_JuroToken_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../build/contracts/JuroToken.json */ "./build/contracts/JuroToken.json", 1);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\turtl\\TokenApp\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  const {
    0: web3,
    1: setWeb3
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const {
    0: account,
    1: setAccount
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const {
    0: amount,
    1: setAmount
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  const {
    0: JuroTokenContract,
    1: setJuroTokenContract
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const tokenOwner = '0x5b1030dcd0af8b77b83e1b52e01864a79bed32ed';

  const loadBlockChainData = async () => {
    if (typeof window.ethereum !== 'undefined') {
      // window.ethereum.request({method:'eth_requestAccounts'})
      const web3 = new web3__WEBPACK_IMPORTED_MODULE_3___default.a(window.ethereum);
      setWeb3(web3);
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);

      if (accounts.length > 0) {
        setAccount(accounts[0]);
      }

      const networkId = await web3.eth.net.getId();
      console.log(networkId);
      const juroToken = new web3.eth.Contract(_build_contracts_JuroToken_json__WEBPACK_IMPORTED_MODULE_4__.abi, _build_contracts_JuroToken_json__WEBPACK_IMPORTED_MODULE_4__.networks[networkId].address);
      setJuroTokenContract(juroToken);
      console.log(JuroTokenContract);
      window.ethereum.on('accountsChanged', function (accounts) {
        setAccount(accounts[0]);
        console.log(account);
      });
      window.ethereum.on('chainChanged', chainId => {
        window.location.reload();
      });
    }
  };

  const loadTokenAmountData = async () => {
    if (account && JuroTokenContract) {
      const tokenAmount = await JuroTokenContract.methods.balanceOf(account).call();
      setAmount(tokenAmount);
      console.log(amount);
    }
  }; // useEffect(()=>{
  //   loadBlockChainData()
  // },[])


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    loadBlockChainData();
  }, [account]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    loadBlockChainData();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    loadTokenAmountData();
  }, [account, amount]);

  const connectHandler = async () => {
    if (web3) {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });
      console.log(accounts);
      setAccount(accounts[0]);
    }
  };

  const disconnectHandler = async () => {
    if (web3) {
      const accounts = await window.ethereum.request({
        method: "wallet_requestPermissions",
        params: [{
          eth_accounts: {}
        }]
      }).then(() => ethereum.request({
        method: 'eth_requestAccounts'
      }));
      setAccount(accounts[0]);
    }
  };

  const buyHandler = async () => {
    try {
      console.log(account);
      const getToken = await JuroTokenContract.methods.getToken().send({
        from: account,
        value: '1000000000000000'
      });
      const tokenAmount = await JuroTokenContract.methods.balanceOf(account).call();
      setAmount(tokenAmount);
      console.log(getToken);
    } catch (error) {
      window.alert('Error occurred when buying');
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    account: account,
    login: connectHandler,
    logout: disconnectHandler,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
      account: account,
      amount: amount,
      click: connectHandler,
      buyclick: buyHandler,
      contract: JuroTokenContract,
      logout: disconnectHandler
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSnVyb0Jhbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ltZy9qdXJvaW1nLmpwZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvTWFpbk5hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvTWFpbk5hdmlnYXRpb24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvaW1hZ2UudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLW5vb3AudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYjNcIiJdLCJuYW1lcyI6WyJKdXJvQmFubmVyIiwianVyb0ltYWdlIiwiTGF5b3V0IiwicHJvcHMiLCJhY2NvdW50IiwibG9naW4iLCJsb2dvdXQiLCJjbGFzc2VzIiwibWFpbiIsImNoaWxkcmVuIiwiTWFpbk5hdmlnYXRpb24iLCJuYXYiLCJoZWFkZXIiLCJtYXhIZWlnaHQiLCJjb250ZW50IiwibmF2QnV0dG9uIiwiZ2xvYmFsIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJsb2FkZXJzIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImRldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImxvYWRlciIsInBhdGgiLCJkb21haW5zIiwicHJvY2VzcyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJhIiwibGF5b3V0Iiwid2lkdGhzIiwia2luZCIsIndpZHRoIiwidyIsInAiLCJzcmNTZXQiLCJzaXplcyIsImdldFdpZHRocyIsImxhc3QiLCJzcmMiLCJpIiwicGFyc2VJbnQiLCJsb2FkIiwicm9vdCIsIlZBTElEX0xPQURFUlMiLCJjb25maWdMb2FkZXIiLCJ1bm9wdGltaXplZCIsInByaW9yaXR5IiwiYWxsIiwicmVzdCIsInVuc2l6ZWQiLCJCb29sZWFuIiwiSlNPTiIsImxvYWRpbmciLCJpc0xhenkiLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3aWR0aEludCIsImdldEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpbWdTdHlsZSIsInZpc2liaWxpdHkiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW4iLCJkaXNwbGF5IiwiaGVpZ2h0IiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImlzTmFOIiwid3JhcHBlclN0eWxlIiwib3ZlcmZsb3ciLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdBdHRyaWJ1dGVzIiwiZ2VuZXJhdGVJbWdBdHRycyIsInF1YWxpdHkiLCJwYXJhbXMiLCJwYXJhbXNTdHJpbmciLCJub3JtYWxpemVTcmMiLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiY29uc29sZSIsImNvbmZpZ0RvbWFpbnMiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInByZWZldGNoZWQiLCJyb3V0ZXIiLCJlcnIiLCJjdXJMb2NhbGUiLCJvcHRpb25zIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsImxvY2FsZURvbWFpbiIsIkxpbmsiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJEYXRlIiwic2V0VGltZW91dCIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwiTVNfTUFYX0lETEVfREVMQVkiLCJlbnRyeSIsIm1hcCIsIlByb21pc2UiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwidmFsdWUiLCJsaW5rIiwid2luZG93IiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsInJlcyIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsIm9uQnVpbGRNYW5pZmVzdCIsImlkbGVUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiY3NzIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0Iiwicm91dGUiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsImZldGNoIiwidGV4dCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsImNuIiwibmF2aWdhdG9yIiwib3V0cHV0IiwicHJlZmV0Y2hWaWFEb20iLCJjcmVhdGVSb3V0ZUxvYWRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJpZCIsImVudHJpZXMiLCJjYWxsYmFjayIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJkZXRlY3RlZExvY2FsZSIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwic2VnbWVudCIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImlzTG9jYWxVUkwiLCJyZXNvbHZlQXMiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJvcmlnaW4iLCJyZXNvbHZlSHJlZiIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInN0cmlwT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJhZGRCYXNlUGF0aCIsInByZXBhcmVkQXMiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiZGF0YSIsIm5vdEZvdW5kIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImRlZmF1bHRMb2NhbGUiLCJkb21haW5Mb2NhbGVzIiwiaXNSZWFkeSIsIl9pZHgiLCJzdGF0ZSIsImluaXRpYWwiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsImF1dG9FeHBvcnREeW5hbWljIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJwcmVwYXJlVXJsQXMiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsImFkZExvY2FsZSIsImRlbEJhc2VQYXRoIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwicGFyc2VkIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwibWV0aG9kIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5vdEZvdW5kUm91dGUiLCJhcHBDb21wIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsImZvcmNlZFNjcm9sbCIsIngiLCJ5IiwiY2hhbmdlU3RhdGUiLCJfX04iLCJpZHgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJNeUFwcCIsIndlYjMiLCJzZXRXZWIzIiwidXNlU3RhdGUiLCJzZXRBY2NvdW50IiwiYW1vdW50Iiwic2V0QW1vdW50IiwiSnVyb1Rva2VuQ29udHJhY3QiLCJzZXRKdXJvVG9rZW5Db250cmFjdCIsInRva2VuT3duZXIiLCJsb2FkQmxvY2tDaGFpbkRhdGEiLCJldGhlcmV1bSIsIldlYjMiLCJhY2NvdW50cyIsImV0aCIsImdldEFjY291bnRzIiwibG9nIiwibGVuZ3RoIiwibmV0d29ya0lkIiwibmV0IiwiZ2V0SWQiLCJqdXJvVG9rZW4iLCJDb250cmFjdCIsIkp1cm9Ub2tlbiIsImFiaSIsIm5ldHdvcmtzIiwiYWRkcmVzcyIsImNoYWluSWQiLCJsb2NhdGlvbiIsImxvYWRUb2tlbkFtb3VudERhdGEiLCJ0b2tlbkFtb3VudCIsIm1ldGhvZHMiLCJiYWxhbmNlT2YiLCJjYWxsIiwidXNlRWZmZWN0IiwiY29ubmVjdEhhbmRsZXIiLCJyZXF1ZXN0IiwiZGlzY29ubmVjdEhhbmRsZXIiLCJldGhfYWNjb3VudHMiLCJ0aGVuIiwiYnV5SGFuZGxlciIsImdldFRva2VuIiwic2VuZCIsImZyb20iLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLDhEOzs7Ozs7Ozs7OztBQ0FBLHdFOzs7Ozs7Ozs7OztBQ0FBLGdHOzs7Ozs7Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7O0FBRUEsTUFBTUEsVUFBVSxH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QSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBqdXJvSW1hZ2UgZnJvbSAnLi9pbWcvanVyb2ltZy5qcGcnXHJcblxyXG5jb25zdCBKdXJvQmFubmVyID0oKT0+e1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgPEltYWdlIHNyYz17anVyb0ltYWdlfSB3aWR0aD1cIjMwMHB4XCIgaGVpZ2h0PVwiNzVweFwiPjwvSW1hZ2U+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSnVyb0Jhbm5lciIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9qdXJvaW1nLTYyYmMxYzZiODE1MzAwY2Q5ZDYzNWJlNTVmMmQ5YmQ4LmpwZ1wiOyIsImltcG9ydCBNYWluTmF2aWdhdGlvbiBmcm9tICcuL01haW5OYXZpZ2F0aW9uJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vTGF5b3V0Lm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBMYXlvdXQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPE1haW5OYXZpZ2F0aW9uIGFjY291bnQ9e3Byb3BzLmFjY291bnR9IGxvZ2luPXtwcm9wcy5sb2dpbn0gbG9nb3V0PXtwcm9wcy5sb2dvdXR9IC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+e3Byb3BzLmNoaWxkcmVufTwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpblwiOiBcIkxheW91dF9tYWluX18yTXdxNVwiXG59O1xuIiwiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vTWFpbk5hdmlnYXRpb24ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XG5pbXBvcnQge1xuICBOYXZiYXIsXG4gIEJ1dHRvbixcbiAgQ29udGFpbmVyLFxuICBOYXYsXG4gIE5hdkRyb3Bkb3duLFxuICBGb3JtLFxuICBGb3JtQ29udHJvbCxcbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IEp1cm9CYW5uZXIgZnJvbSBcIi4uL0p1cm9CYW5uZXJcIjtcbmZ1bmN0aW9uIE1haW5OYXZpZ2F0aW9uKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPE5hdmJhciBjbGFzc05hbWU9e2NsYXNzZXMubmF2fSBleHBhbmQ9XCJsZ1wiPlxuICAgICAgPENvbnRhaW5lciBmbHVpZD5cbiAgICAgICAgPE5hdmJhci5CcmFuZD5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT48YSBocmVmPVwiL1wiPkp1cm8gSW5zdHJ1bWVudHM8L2E+PC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L05hdmJhci5CcmFuZD5cbiAgICAgICAgPE5hdmJhci5Ub2dnbGUgYXJpYS1jb250cm9scz1cImJhc2ljLW5hdmJhci1uYXZcIiAvPlxuICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiPlxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWUtYXV0byBteS0yIG15LWxnLTBcIiBzdHlsZT17eyBtYXhIZWlnaHQ6IFwiMTAwcHhcIiB9fT5cbiAgICAgICAgICAgIDxOYXYuTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5Ib21lPC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvTmF2Lkxpbms+XG4gICAgICAgICAgICA8TmF2Lkxpbms+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5BYm91dDwvZGl2PlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L05hdi5MaW5rPlxuICAgICAgICAgICAgPE5hdi5MaW5rPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NlcnZpY2VcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5TZXJ2aWNlPC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvTmF2Lkxpbms+XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgey8qIDxGb3JtIGNsYXNzTmFtZT1cImQtZmxleFwiPlxuICAgICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lLTJcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2VhcmNoXCJcbiAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgIDxOYXY+XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgICAge3Byb3BzLmFjY291bnQmJjxCdXR0b24gdmFyaWFudD1cIndhcm5pbmdcIiBjbGFzc05hbWU9e2NsYXNzZXMubmF2QnV0dG9ufSBvbkNsaWNrPXtwcm9wcy5sb2dvdXR9PkNoYW5nZSBBY2NvdW50PC9CdXR0b24+fVxuICAgICAgICAgIHshcHJvcHMuYWNjb3VudCYmPEJ1dHRvbiB2YXJpYW50PVwid2FybmluZ1wiICBjbGFzc05hbWU9e2NsYXNzZXMubmF2QnV0dG9ufSBvbkNsaWNrPXtwcm9wcy5sb2dpbn0+Q29ubmVjdDwvQnV0dG9uPn1cbiAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L05hdmJhcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbk5hdmlnYXRpb247XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYXZcIjogXCJNYWluTmF2aWdhdGlvbl9uYXZfXzJxR1hNXCIsXG5cdFwiaGVhZGVyXCI6IFwiTWFpbk5hdmlnYXRpb25faGVhZGVyX190OFlQR1wiLFxuXHRcImNvbnRlbnRcIjogXCJNYWluTmF2aWdhdGlvbl9jb250ZW50X19IZDlzNlwiLFxuXHRcImRpdmlkZXJcIjogXCJNYWluTmF2aWdhdGlvbl9kaXZpZGVyX18zRjZKMVwiLFxuXHRcImxvZ29cIjogXCJNYWluTmF2aWdhdGlvbl9sb2dvX19Rd3B5NVwiLFxuXHRcIm5hdkJ1dHRvblwiOiBcIk1haW5OYXZpZ2F0aW9uX25hdkJ1dHRvbl9fMTUxajhcIixcblx0XCJhY3RpdmVcIjogXCJNYWluTmF2aWdhdGlvbl9hY3RpdmVfX3N4dTg1XCJcbn07XG4iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQnXG5pbXBvcnQgeyB0b0Jhc2U2NCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0J1xuaW1wb3J0IHtcbiAgSW1hZ2VDb25maWcsXG4gIGltYWdlQ29uZmlnRGVmYXVsdCxcbiAgTG9hZGVyVmFsdWUsXG4gIFZBTElEX0xPQURFUlMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcnXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICA7KGdsb2JhbCBhcyBhbnkpLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWVcbn1cblxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbJ2xhenknLCAnZWFnZXInLCB1bmRlZmluZWRdIGFzIGNvbnN0XG50eXBlIExvYWRpbmdWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MT0FESU5HX1ZBTFVFU1tudW1iZXJdXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyID0gKHJlc29sdmVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlclByb3BzID0ge1xuICBzcmM6IHN0cmluZ1xuICB3aWR0aDogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbn1cblxudHlwZSBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyA9IEltYWdlTG9hZGVyUHJvcHMgJiB7IHJvb3Q6IHN0cmluZyB9XG5cbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwPFxuICBMb2FkZXJWYWx1ZSxcbiAgKHByb3BzOiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG4+KFtcbiAgWydpbWdpeCcsIGltZ2l4TG9hZGVyXSxcbiAgWydjbG91ZGluYXJ5JywgY2xvdWRpbmFyeUxvYWRlcl0sXG4gIFsnYWthbWFpJywgYWthbWFpTG9hZGVyXSxcbiAgWydkZWZhdWx0JywgZGVmYXVsdExvYWRlcl0sXG5dKVxuXG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAnZmlsbCcsXG4gICdmaXhlZCcsXG4gICdpbnRyaW5zaWMnLFxuICAncmVzcG9uc2l2ZScsXG4gIHVuZGVmaW5lZCxcbl0gYXMgY29uc3RcbnR5cGUgTGF5b3V0VmFsdWUgPSB0eXBlb2YgVkFMSURfTEFZT1VUX1ZBTFVFU1tudW1iZXJdXG5cbnR5cGUgSW1nRWxlbWVudFN0eWxlID0gTm9uTnVsbGFibGU8SlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXVsnc3R5bGUnXT5cblxuZXhwb3J0IHR5cGUgSW1hZ2VQcm9wcyA9IE9taXQ8XG4gIEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ10sXG4gICdzcmMnIHwgJ3NyY1NldCcgfCAncmVmJyB8ICd3aWR0aCcgfCAnaGVpZ2h0JyB8ICdsb2FkaW5nJyB8ICdzdHlsZSdcbj4gJiB7XG4gIHNyYzogc3RyaW5nXG4gIGxvYWRlcj86IEltYWdlTG9hZGVyXG4gIHF1YWxpdHk/OiBudW1iZXIgfCBzdHJpbmdcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvYWRpbmc/OiBMb2FkaW5nVmFsdWVcbiAgdW5vcHRpbWl6ZWQ/OiBib29sZWFuXG4gIG9iamVjdEZpdD86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0Rml0J11cbiAgb2JqZWN0UG9zaXRpb24/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdFBvc2l0aW9uJ11cbn0gJiAoXG4gICAgfCB7XG4gICAgICAgIHdpZHRoPzogbmV2ZXJcbiAgICAgICAgaGVpZ2h0PzogbmV2ZXJcbiAgICAgICAgLyoqIEBkZXByZWNhdGVkIFVzZSBgbGF5b3V0PVwiZmlsbFwiYCBpbnN0ZWFkICovXG4gICAgICAgIHVuc2l6ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB8IHsgd2lkdGg/OiBuZXZlcjsgaGVpZ2h0PzogbmV2ZXI7IGxheW91dDogJ2ZpbGwnIH1cbiAgICB8IHtcbiAgICAgICAgd2lkdGg6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBoZWlnaHQ6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBsYXlvdXQ/OiBFeGNsdWRlPExheW91dFZhbHVlLCAnZmlsbCc+XG4gICAgICB9XG4gIClcblxuY29uc3Qge1xuICBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMsXG4gIGxvYWRlcjogY29uZmlnTG9hZGVyLFxuICBwYXRoOiBjb25maWdQYXRoLFxuICBkb21haW5zOiBjb25maWdEb21haW5zLFxufSA9XG4gICgocHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgYXMgYW55KSBhcyBJbWFnZUNvbmZpZykgfHwgaW1hZ2VDb25maWdEZWZhdWx0XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gWy4uLmNvbmZpZ0RldmljZVNpemVzLCAuLi5jb25maWdJbWFnZVNpemVzXVxuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5hbGxTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcblxuZnVuY3Rpb24gZ2V0V2lkdGhzKFxuICB3aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkLFxuICBsYXlvdXQ6IExheW91dFZhbHVlXG4pOiB7IHdpZHRoczogbnVtYmVyW107IGtpbmQ6ICd3JyB8ICd4JyB9IHtcbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHxcbiAgICBsYXlvdXQgPT09ICdmaWxsJyB8fFxuICAgIGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnXG4gICkge1xuICAgIHJldHVybiB7IHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cblxuICBjb25zdCB3aWR0aHMgPSBbXG4gICAgLi4ubmV3IFNldChcbiAgICAgIC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgIFt3aWR0aCwgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqL10ubWFwKFxuICAgICAgICAodykgPT4gYWxsU2l6ZXMuZmluZCgocCkgPT4gcCA+PSB3KSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgKVxuICAgICksXG4gIF1cbiAgcmV0dXJuIHsgd2lkdGhzLCBraW5kOiAneCcgfVxufVxuXG50eXBlIEdlbkltZ0F0dHJzRGF0YSA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgdW5vcHRpbWl6ZWQ6IGJvb2xlYW5cbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZVxuICBsb2FkZXI6IEltYWdlTG9hZGVyXG4gIHdpZHRoPzogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbiAgc2l6ZXM/OiBzdHJpbmdcbn1cblxudHlwZSBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgc3JjU2V0OiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgc3JjLFxuICB1bm9wdGltaXplZCxcbiAgbGF5b3V0LFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbiAgc2l6ZXMsXG4gIGxvYWRlcixcbn06IEdlbkltZ0F0dHJzRGF0YSk6IEdlbkltZ0F0dHJzUmVzdWx0IHtcbiAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgcmV0dXJuIHsgc3JjLCBzcmNTZXQ6IHVuZGVmaW5lZCwgc2l6ZXM6IHVuZGVmaW5lZCB9XG4gIH1cblxuICBjb25zdCB7IHdpZHRocywga2luZCB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQpXG4gIGNvbnN0IGxhc3QgPSB3aWR0aHMubGVuZ3RoIC0gMVxuXG4gIHJldHVybiB7XG4gICAgc3JjOiBsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3aWR0aHNbbGFzdF0gfSksXG4gICAgc2l6ZXM6ICFzaXplcyAmJiBraW5kID09PSAndycgPyAnMTAwdncnIDogc2l6ZXMsXG4gICAgc3JjU2V0OiB3aWR0aHNcbiAgICAgIC5tYXAoXG4gICAgICAgICh3LCBpKSA9PlxuICAgICAgICAgIGAke2xvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHcgfSl9ICR7XG4gICAgICAgICAgICBraW5kID09PSAndycgPyB3IDogaSArIDFcbiAgICAgICAgICB9JHtraW5kfWBcbiAgICAgIClcbiAgICAgIC5qb2luKCcsICcpLFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEludCh4OiB1bmtub3duKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB4XG4gIH1cbiAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZUludCh4LCAxMClcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykge1xuICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKVxuICBpZiAobG9hZCkge1xuICAgIHJldHVybiBsb2FkKHsgcm9vdDogY29uZmlnUGF0aCwgLi4ubG9hZGVyUHJvcHMgfSlcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke1ZBTElEX0xPQURFUlMuam9pbihcbiAgICAgICcsICdcbiAgICApfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7XG4gIHNyYyxcbiAgc2l6ZXMsXG4gIHVub3B0aW1pemVkID0gZmFsc2UsXG4gIHByaW9yaXR5ID0gZmFsc2UsXG4gIGxvYWRpbmcsXG4gIGNsYXNzTmFtZSxcbiAgcXVhbGl0eSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgb2JqZWN0Rml0LFxuICBvYmplY3RQb3NpdGlvbixcbiAgbG9hZGVyID0gZGVmYXVsdEltYWdlTG9hZGVyLFxuICAuLi5hbGxcbn06IEltYWdlUHJvcHMpIHtcbiAgbGV0IHJlc3Q6IFBhcnRpYWw8SW1hZ2VQcm9wcz4gPSBhbGxcbiAgbGV0IGxheW91dDogTm9uTnVsbGFibGU8TGF5b3V0VmFsdWU+ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJ1xuICBsZXQgdW5zaXplZCA9IGZhbHNlXG4gIGlmICgndW5zaXplZCcgaW4gcmVzdCkge1xuICAgIHVuc2l6ZWQgPSBCb29sZWFuKHJlc3QudW5zaXplZClcbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ3Vuc2l6ZWQnXVxuICB9IGVsc2UgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXRcblxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsnbGF5b3V0J11cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAodW5zaXplZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgZGVwcmVjYXRlZCBcInVuc2l6ZWRcIiBwcm9wZXJ0eSwgd2hpY2ggd2FzIHJlbW92ZWQgaW4gZmF2b3Igb2YgdGhlIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5YFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpc0xhenkgPVxuICAgICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJylcbiAgaWYgKHNyYyAmJiBzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgdW5vcHRpbWl6ZWQgPSB0cnVlXG4gICAgaXNMYXp5ID0gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gdXNlSW50ZXJzZWN0aW9uPEhUTUxJbWFnZUVsZW1lbnQ+KHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICAgIGRpc2FibGVkOiAhaXNMYXp5LFxuICB9KVxuICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWRcblxuICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aClcbiAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodClcbiAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KVxuXG4gIGxldCB3cmFwcGVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3ZnOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgbGV0IGltZ1N0eWxlOiBJbWdFbGVtZW50U3R5bGUgfCB1bmRlZmluZWQgPSB7XG4gICAgdmlzaWJpbGl0eTogaXNWaXNpYmxlID8gJ2luaGVyaXQnIDogJ2hpZGRlbicsXG5cbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBib3R0b206IDAsXG4gICAgcmlnaHQ6IDAsXG5cbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIG1heEhlaWdodDogJzEwMCUnLFxuXG4gICAgb2JqZWN0Rml0LFxuICAgIG9iamVjdFBvc2l0aW9uLFxuICB9XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgIT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgY29uc3QgcXVvdGllbnQgPSBoZWlnaHRJbnQgLyB3aWR0aEludFxuICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYFxuICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHsgZGlzcGxheTogJ2Jsb2NrJywgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIHBhZGRpbmdUb3AgfVxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW50cmluc2ljJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YFxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0SW50LFxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgPT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICByaWdodDogMCxcblxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBtYXJnaW46IDAsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpbWdBdHRyaWJ1dGVzOiBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgICBzcmM6XG4gICAgICAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICBzaXplczogdW5kZWZpbmVkLFxuICB9XG5cbiAgaWYgKGlzVmlzaWJsZSkge1xuICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgIHNyYyxcbiAgICAgIHVub3B0aW1pemVkLFxuICAgICAgbGF5b3V0LFxuICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgIHNpemVzLFxuICAgICAgbG9hZGVyLFxuICAgIH0pXG4gIH1cblxuICBpZiAodW5zaXplZCkge1xuICAgIHdyYXBwZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIHNpemVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBpbWdTdHlsZSA9IHVuZGVmaW5lZFxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17d3JhcHBlclN0eWxlfT5cbiAgICAgIHtzaXplclN0eWxlID8gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzaXplclN0eWxlfT5cbiAgICAgICAgICB7c2l6ZXJTdmcgPyAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17dHJ1ZX1cbiAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgIHNyYz17YGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHt0b0Jhc2U2NChzaXplclN2Zyl9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8aW1nXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICB7Li4uaW1nQXR0cmlidXRlc31cbiAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICByZWY9e3NldFJlZn1cbiAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgLz5cbiAgICAgIHtwcmlvcml0eSA/IChcbiAgICAgICAgLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgICAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAgICAgLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuICAgICAgICAvL1xuICAgICAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGtleT17XG4gICAgICAgICAgICAgICdfX25pbWctJyArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc3JjICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmNTZXQgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNpemVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgIGFzPVwiaW1hZ2VcIlxuICAgICAgICAgICAgaHJlZj17aW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyY31cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgICAgICBpbWFnZXNyY3NldD17aW1nQXR0cmlidXRlcy5zcmNTZXR9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgICAgICBpbWFnZXNpemVzPXtpbWdBdHRyaWJ1dGVzLnNpemVzfVxuICAgICAgICAgID48L2xpbms+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vQlVJTFQgSU4gTE9BREVSU1xuXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmNcbn1cblxuZnVuY3Rpb24gaW1naXhMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbiAgY29uc3QgcGFyYW1zID0gWydhdXRvPWZvcm1hdCcsICdmaXQ9bWF4JywgJ3c9JyArIHdpZHRoXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gJydcbiAgaWYgKHF1YWxpdHkpIHtcbiAgICBwYXJhbXMucHVzaCgncT0nICsgcXVhbGl0eSlcbiAgfVxuXG4gIGlmIChwYXJhbXMubGVuZ3RoKSB7XG4gICAgcGFyYW1zU3RyaW5nID0gJz8nICsgcGFyYW1zLmpvaW4oJyYnKVxuICB9XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9JHtwYXJhbXNTdHJpbmd9YFxufVxuXG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290LCBzcmMsIHdpZHRoIH06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWBcbn1cblxuZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gIGNvbnN0IHBhcmFtcyA9IFsnZl9hdXRvJywgJ2NfbGltaXQnLCAnd18nICsgd2lkdGgsICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJ1xuICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWBcbn1cblxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdXG5cbiAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKVxuICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKVxuXG4gICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oXG4gICAgICAgICAgJywgJ1xuICAgICAgICApfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHNyYywgd2lkdGgsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgbGV0IHBhcnNlZFNyYzogVVJMXG4gICAgICB0cnkge1xuICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmICghY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArXG4gICAgICAgICAgICBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgLy8gRklYTUU6IHByb3BlciByb3V0ZSBhbm5vdW5jaW5nIGF0IFJvdXRlciBsZXZlbCwgbm90IExpbms6XG4gICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgY29uc3QgbG9jYWxlRG9tYWluID0gZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgYXMsXG4gICAgICBjdXJMb2NhbGUsXG4gICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICApXG5cbiAgICBjaGlsZFByb3BzLmhyZWYgPVxuICAgICAgbG9jYWxlRG9tYWluIHx8XG4gICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSlcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICB9XG59XG5cbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0SWRsZUNhbGxiYWNrXG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGlkbGVUaW1lb3V0PFQ+KG1zOiBudW1iZXIsIGVycjogRXJyb3IpOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChfcmVzb2x2ZSwgcmVqZWN0KSA9PlxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VGltZW91dCgoKSA9PiByZWplY3QoZXJyKSwgbXMpKVxuICApXG59XG5cbi8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID0gbmV3IFByb21pc2U8XG4gICAgQ2xpZW50QnVpbGRNYW5pZmVzdFxuICA+KChyZXNvbHZlKSA9PiB7XG4gICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCXG4gICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuICByZXR1cm4gUHJvbWlzZS5yYWNlKFtcbiAgICBvbkJ1aWxkTWFuaWZlc3QsXG4gICAgaWRsZVRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gICAgKSxcbiAgXSlcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHsgc2NyaXB0cywgY3NzIH0gPSBhd2FpdCBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICBjb25zdCBbLCBzdHlsZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgIF0gYXMgY29uc3QpXG5cbiAgICAgICAgICBjb25zdCBlbnRyeXBvaW50OiBSb3V0ZUVudHJ5cG9pbnQgPSBhd2FpdCBQcm9taXNlLnJhY2UoW1xuICAgICAgICAgICAgdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSksXG4gICAgICAgICAgICBpZGxlVGltZW91dDxSb3V0ZUxvYWRlckVudHJ5PihcbiAgICAgICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgICAgIG1hcmtBc3NldEVycm9yKFxuICAgICAgICAgICAgICAgIG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSlcbiAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICA+KHsgc3R5bGVzIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUpKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCByZXF1ZXN0SWRsZUNhbGxiYWNrIGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpICYmXG4gICAgICBwYXRoICE9PSAnLycgKyBsb2NhbGVcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpIHx8IHBhdGggPT09ICcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgICB8ICdpc1JlYWR5J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzUmVhZHk6IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2gpXG4gICAgKVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoZGVsQmFzZVBhdGgoYXMpLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSEsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuXG4gICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgcm91dGUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vZXJyLnNoL25leHQuanMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzLCBmYWxzZSlcblxuICAgICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGVcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0JylcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCdcbiAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgeyBzaGFsbG93OiBmYWxzZSB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZVxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8XG4gICAgICAgICAgKGlzVmFsaWRTaGFsbG93Um91dGUgfHwgIW9wdGlvbnMuc2Nyb2xsID8gbnVsbCA6IHsgeDogMCwgeTogMCB9KVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbClcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGFyc2VkSHJlZi5wYXRobmFtZSEpXG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcywgZmFsc2UpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHVybCkudGhlbigoaXNTc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzU3NnXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzUGF0aCxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGRlZmVyPzogc3RyaW5nW107IGVhZ2VyPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcbmltcG9ydCBKdXJvVG9rZW4gZnJvbSAnLi4vYnVpbGQvY29udHJhY3RzL0p1cm9Ub2tlbi5qc29uJztcblxuXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFt3ZWIzLCBzZXRXZWIzXSA9IHVzZVN0YXRlKG51bGwpXG5cdGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKG51bGwpXG5cdGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbSnVyb1Rva2VuQ29udHJhY3QsIHNldEp1cm9Ub2tlbkNvbnRyYWN0XSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IHRva2VuT3duZXI9JzB4NWIxMDMwZGNkMGFmOGI3N2I4M2UxYjUyZTAxODY0YTc5YmVkMzJlZCdcblxuXG4gIGNvbnN0IGxvYWRCbG9ja0NoYWluRGF0YT1hc3luYygpPT57XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuZXRoZXJldW0hPT0ndW5kZWZpbmVkJykge1xuICAgICAgLy8gd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe21ldGhvZDonZXRoX3JlcXVlc3RBY2NvdW50cyd9KVxuXHRcdFx0Y29uc3Qgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSlcblx0XHRcdHNldFdlYjMod2ViMylcblxuXHRcdFx0Y29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpXG4gICAgICBjb25zb2xlLmxvZyhhY2NvdW50cylcblxuXHRcdFx0aWYgKGFjY291bnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0c2V0QWNjb3VudChhY2NvdW50c1swXSlcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgbmV0d29ya0lkID0gYXdhaXQgd2ViMy5ldGgubmV0LmdldElkKClcbiAgICAgIGNvbnNvbGUubG9nKG5ldHdvcmtJZClcblxuXHRcdFx0Y29uc3QganVyb1Rva2VuID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEp1cm9Ub2tlbi5hYmksIEp1cm9Ub2tlbi5uZXR3b3Jrc1tuZXR3b3JrSWRdLmFkZHJlc3MpXG5cdFx0XHRzZXRKdXJvVG9rZW5Db250cmFjdChqdXJvVG9rZW4pXG4gICAgICBjb25zb2xlLmxvZyhKdXJvVG9rZW5Db250cmFjdClcblxuICAgICAgd2luZG93LmV0aGVyZXVtLm9uKCdhY2NvdW50c0NoYW5nZWQnLCBmdW5jdGlvbiAoYWNjb3VudHMpIHtcblx0XHRcdFx0c2V0QWNjb3VudChhY2NvdW50c1swXSlcbiAgICAgICAgY29uc29sZS5sb2coYWNjb3VudClcblx0XHRcdH0pXG4gICAgICB3aW5kb3cuZXRoZXJldW0ub24oJ2NoYWluQ2hhbmdlZCcsIChjaGFpbklkKSA9PiB7XG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdH0pXG4gICAgfVxuICB9XG5cbiAgY29uc3QgbG9hZFRva2VuQW1vdW50RGF0YT1hc3luYygpPT57XG4gICAgaWYgKGFjY291bnQgJiYgSnVyb1Rva2VuQ29udHJhY3Qpe1xuICAgICAgY29uc3QgdG9rZW5BbW91bnQ9YXdhaXQgSnVyb1Rva2VuQ29udHJhY3QubWV0aG9kcy5iYWxhbmNlT2YoYWNjb3VudCkuY2FsbCgpXG4gICAgICBzZXRBbW91bnQodG9rZW5BbW91bnQpXG4gICAgICBjb25zb2xlLmxvZyhhbW91bnQpXG5cbiAgICB9XG4gIH1cblxuICAvLyB1c2VFZmZlY3QoKCk9PntcbiAgLy8gICBsb2FkQmxvY2tDaGFpbkRhdGEoKVxuICAvLyB9LFtdKVxuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGxvYWRCbG9ja0NoYWluRGF0YSgpXG4gIH0sW2FjY291bnQsXSlcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBsb2FkQmxvY2tDaGFpbkRhdGEoKVxuICB9LFtdKVxuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGxvYWRUb2tlbkFtb3VudERhdGEoKVxuICB9LFthY2NvdW50LGFtb3VudF0pXG4gIFxuICBjb25zdCBjb25uZWN0SGFuZGxlcj1hc3luYygpPT57XG4gICAgaWYgKHdlYjMpe2NvbnN0IGFjY291bnRzPWF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHttZXRob2Q6J2V0aF9yZXF1ZXN0QWNjb3VudHMnfSlcbiAgICBjb25zb2xlLmxvZyhhY2NvdW50cylcbiAgICBzZXRBY2NvdW50KGFjY291bnRzWzBdKX1cbiAgfVxuXG4gIGNvbnN0IGRpc2Nvbm5lY3RIYW5kbGVyPWFzeW5jKCk9PntcbiAgICBpZiAod2ViMyl7Y29uc3QgYWNjb3VudHM9YXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgbWV0aG9kOiBcIndhbGxldF9yZXF1ZXN0UGVybWlzc2lvbnNcIixcbiAgICAgIHBhcmFtczogW3tldGhfYWNjb3VudHM6IHt9fV1cbiAgICAgIFxuICB9KS50aGVuKCgpPT5ldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICBtZXRob2Q6J2V0aF9yZXF1ZXN0QWNjb3VudHMnXG4gIH0pKVxuXG4gICAgc2V0QWNjb3VudChhY2NvdW50c1swXSl9XG4gIH1cblxuXG4gIGNvbnN0IGJ1eUhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnNvbGUubG9nKGFjY291bnQpXG4gICAgICBjb25zdCBnZXRUb2tlbj1hd2FpdCBKdXJvVG9rZW5Db250cmFjdC5tZXRob2RzLmdldFRva2VuKCkuc2VuZCh7IGZyb206YWNjb3VudCwgdmFsdWU6JzEwMDAwMDAwMDAwMDAwMDAnfSlcbiAgICAgIGNvbnN0IHRva2VuQW1vdW50PWF3YWl0IEp1cm9Ub2tlbkNvbnRyYWN0Lm1ldGhvZHMuYmFsYW5jZU9mKGFjY291bnQpLmNhbGwoKVxuICAgICAgc2V0QW1vdW50KHRva2VuQW1vdW50KVxuXG4gICAgICBjb25zb2xlLmxvZyhnZXRUb2tlbilcbiAgXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgd2luZG93LmFsZXJ0KCdFcnJvciBvY2N1cnJlZCB3aGVuIGJ1eWluZycpXG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgYWNjb3VudD17YWNjb3VudH0gbG9naW49e2Nvbm5lY3RIYW5kbGVyfSBsb2dvdXQ9e2Rpc2Nvbm5lY3RIYW5kbGVyfT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gYWNjb3VudD17YWNjb3VudH0gYW1vdW50PXthbW91bnR9IGNsaWNrPXtjb25uZWN0SGFuZGxlcn0gYnV5Y2xpY2s9e2J1eUhhbmRsZXJ9IGNvbnRyYWN0PXtKdXJvVG9rZW5Db250cmFjdH0gbG9nb3V0PXtkaXNjb25uZWN0SGFuZGxlcn0vPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViM1wiKTsiXSwic291cmNlUm9vdCI6IiJ9