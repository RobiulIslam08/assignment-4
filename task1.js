
function calculateMoney(ticket){
  
  if(typeof ticket !== 'number' || ticket < 0){
    return 'Invalid Number'
  }

  let ticketPrice = 120;
  let daroanFee = 500;
  let staffNumber = 8;
  let launchCost = staffNumber * 50;
  let ticketSell = ticketPrice * ticket
  let totalCost = daroanFee + launchCost;
  let income = ticketSell - totalCost;
  return income;
}


