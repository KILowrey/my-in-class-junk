function MiniBank(balance) {
  this.balance = balance;
  this.getBalance = () => {
    return this.balance;
  },
  this.printBalance = () => {
    console.log(`Balance: ${this.getBalance()}`);
  };
  let statement = [`${this.getBalance}`];
  this.setBalance = () => {
    
  }
}
