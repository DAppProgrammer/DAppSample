let Inbox = artifacts.require("Inbox");

contract("Inbox",  (accounts) => {

  it("deploys contract successfully", () => {
    assert.ok(accounts[0]);
  });
  
  let inbox;
  beforeEach( async () => {
    inbox = await Inbox.deployed();
  });

  describe('Testing inbox contract', () => {
    it("initialized with correct initial message", async () => {
      const message = await inbox.message();
      assert.equal(message,'Initial message','Initial message not set correctly');
    });
  
    it("sets message correctly", async () => {
      const txHash = await inbox.setMessage('New message');
      const message = await inbox.message();
      assert.equal(message,'New message','setMessage not setting messge correctly');
      console.log(txHash);
    });
  });
});
