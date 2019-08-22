pragma solidity ^0.5.0;

contract Inbox {
  string public message;

  constructor(string memory _message) public {
    message = _message;
  }

  function setMessage(string memory _message) public {
    message = _message;
  }
}
