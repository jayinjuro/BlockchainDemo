const riskWeatherTokenContract = artifacts.require("RiskWeatherToken");

module.exports = function(deployer) {
  deployer.deploy(riskWeatherTokenContract);
};
