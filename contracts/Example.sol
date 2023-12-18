import "./ERC721L.sol";

contract Example is ERC721L {
    constructor() ERC721L("EXAMPLE", "EXAMPLE") {
        for (uint256 i = 1; i < 11; i++) {
            super._mint(msg.sender, i);
        }
    }
}