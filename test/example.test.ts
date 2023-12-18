import {ethers} from "hardhat";
import {expect} from "chai";

describe('ERC721L', () => {
	it('should only let operator transfer NFTs within the transfer limit', async () => {
		const [owner, operator] = await ethers.getSigners();
		const ExampleNFTContractFactory = await ethers.getContractFactory("Example");
		const exampleNftContract = await ExampleNFTContractFactory.deploy();
		// fool-safe check, 10 should be minted
		expect(await exampleNftContract.balanceOf(owner.address)).to.equal(10);

		await exampleNftContract.setApprovalForAll(operator.address, 1);
		expect(await exampleNftContract.isApprovedForAll(owner.address, operator.address)).to.equal(true);

		await exampleNftContract.connect(operator).transferFrom(owner.address, operator.address, 1);
		expect(await exampleNftContract.balanceOf(owner.address)).to.equal(9);
		expect(await exampleNftContract.balanceOf(operator.address)).to.equal(1);
		await expect (exampleNftContract.connect(operator).transferFrom(owner.address, operator.address, 2))
			.to.be.revertedWithCustomError(exampleNftContract, 'ERC721InsufficientApproval');
	});
});
