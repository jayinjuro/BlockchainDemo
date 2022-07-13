const uroSysTokenContract = artifacts.require("UroSysToken");

module.exports = function(deployer) {
  deployer.deploy(uroSysTokenContract);
};
