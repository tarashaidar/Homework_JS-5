function convert(amount) { 
    let usd = 8;
    return amount*usd;
}
let result = convert(10);
console.log("Enter sum:" , result);
//////////////////////////////////

////done with classes////////////
class Converter {
	constructor (amount) {
    this.usdExchange = 8;
    this.amount = amount;
  }
 
  convertToUah() {
      let uahAmount = this.amount * this.usdExchange;
      return uahAmount;  
  }
}

let exchangeOperation = new Converter(20);
console.log("Enter sum:", exchangeOperation.convertToUah());
////done with classes/////////////
