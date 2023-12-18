# ERC721LimitedApproval

The vulnerability in the NFTTrader.io contract (https://twitter.com/0xCygaar/status/1736056050816876626) was because of improper reentrancy guards.

However, as NFTs are often programmed to be interacted with by `operators` using the `safeTransferFrom` method, it is possible that such a vulnerability appears again in the future.

If you use Metamask for ERC20 tokens you will notice that you can approve how many ERC20 tokens you want to allow a contract (like Uniswap) to move.

ERC721LimitedApproval is a new proposed standard that allows users to set how many transfers they want to allow a contract/operator to perform on their NFT assets. Instead of unlimited transfers, and revoking access later, users can now choose to only allow a specific number of transfers of their tokens/NFTs and after the transfer is completed, the approval will be depleted (similar to ERC20).
