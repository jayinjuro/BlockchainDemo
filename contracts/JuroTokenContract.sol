// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


contract SafeMath {

    function safeAdd(uint a, uint b) internal pure returns (uint c) {
        c = a + b;
        require(c >= a);
    }

    function safeSub(uint a, uint b) internal pure returns (uint c) {
        require(b <= a);
        c = a - b;
    }

    function safeMul(uint a, uint b) internal pure returns (uint c) {
        c = a * b;
        require(a == 0 || c / a == b);
    }

    function safeDiv(uint a, uint b) internal pure returns (uint c) {
        require(b > 0);
        c = a / b;
    }
}


interface IERC20 {

    event Transfer(address indexed from, address indexed to, uint256 value);


    event Approval(address indexed owner, address indexed spender, uint256 value);

 
    function totalSupply() external view returns (uint256);


    function balanceOf(address account) external view returns (uint256);


    function transfer(address to, uint256 amount) external returns (bool);


    function allowance(address owner, address spender) external view returns (uint256);


    function approve(address spender, uint256 amount) external returns (bool);


    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);
}


/**
ERC20 JuroToken
Total Supply goes to an account "0x5B1030dcD0aF8b77B83e1b52e01864A79bed32ED"
*/
contract JuroToken is IERC20, SafeMath {
    string public symbol;
    string public  name;
    uint8 public decimals;
    uint public _totalSupply;

    mapping(address => uint) balances;
    mapping(address => mapping(address => uint)) allowed;

    constructor() {
        symbol = "Juro";
        name = "Juro Token";
        decimals = 2;
        _totalSupply = 100000;
        balances[0x5B1030dcD0aF8b77B83e1b52e01864A79bed32ED] = _totalSupply;
        emit Transfer(0x0000000000000000000000000000000000000000, 0x5B1030dcD0aF8b77B83e1b52e01864A79bed32ED, _totalSupply);
    }


    function totalSupply() public view override returns (uint) {
        return safeSub(_totalSupply,balances[0x0000000000000000000000000000000000000000]);
    }


    function balanceOf(address tokenOwner) public view override  returns (uint balance) {
        return balances[tokenOwner];
    }


    function transfer(address to, uint tokens) public override returns (bool success) {
        balances[msg.sender] = safeSub(balances[msg.sender], tokens);
        balances[to] = safeAdd(balances[to], tokens);
        emit Transfer(msg.sender, to, tokens);
        return true;
    }



    function approve(address spender, uint tokens) public override returns (bool success) {
        allowed[msg.sender][spender] = tokens;
        emit Approval(msg.sender, spender, tokens);
        return true;
    }


    function transferFrom(address from, address to, uint tokens) public override returns (bool success) {
        balances[from] = safeSub(balances[from], tokens);
        allowed[from][msg.sender] = safeSub(allowed[from][msg.sender], tokens);
        balances[to] = safeAdd(balances[to], tokens);
        emit Transfer(from, to, tokens);
        return true;
    }


    function allowance(address tokenOwner, address spender) public view override returns (uint remaining) {
        return allowed[tokenOwner][spender];
    }

    modifier perValue(){
        require(msg.value==0.001 ether);
        _;
    }

    function getToken() public payable perValue returns (bool){
        balances[0x5B1030dcD0aF8b77B83e1b52e01864A79bed32ED] = safeSub(balances[0x5B1030dcD0aF8b77B83e1b52e01864A79bed32ED], 10);
        balances[msg.sender]=safeAdd(balances[msg.sender],10);
        return true; 
    }


}