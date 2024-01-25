// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract PixelTribeGuild is ERC1155 {
    constructor() ERC1155("TOKEN_URI_PLACEHOLDER") {
        // Initial minting, adjust as necessary
        _mint(msg.sender, 1, 1000, "");
    }
}
