const Token = artifacts.require("Token");
const dBank = artifacts.require("dBank");

module.exports = async function(deployer) {

	await deployer.deploy(Token);
	//deploy Token
	await deployer.deploy(Token);
	//assign token into variable to get it's address
	const tkn = await Token.deployed();

	//pass token address for dBank contract(for future minting)
	await deployer.deploy(tkn.address);

	//assign dBank contract into variable to get it's address
	const dBank = await dBank.deployed();

	//change token's owner/minter from deployer to dBank
	await tkn.passMinterRole(dBank.address);

};