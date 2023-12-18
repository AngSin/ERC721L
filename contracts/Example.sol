import "./ERC721LimitedApproval.sol";

contract Example is ERC721LimitedApproval {
    constructor() ERC721LimitedApproval("EXAMPLE", "EXAMPLE") {
        for (uint256 i = 1; i < 11; i++) {
            super._mint(msg.sender, i);
        }
    }
}