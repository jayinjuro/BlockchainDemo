const JuroTokenContract = artifacts.require("JuroToken");

module.exports = function(deployer) {
  deployer.deploy(JuroTokenContract);
};
