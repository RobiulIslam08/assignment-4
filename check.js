function calculateMoney(ticket) {
  if (typeof ticket !== "number" || ticket < 0) {
    return "Invalid Number";
  }

  let ticketPrice = 120;

  let daroanFee = 500;

  let staffNumber = 8;

  let launchCost = staffNumber * 50;

  let ticketSell = ticketPrice * ticket;

  let totalCost = daroanFee + launchCost;

  let income = ticketSell - totalCost;

  return income;
}


function checkName(str) {
  if (typeof str !== "string") {
    return "invalid";
  }

  const lastChar = str.toLowerCase().charAt(str.length - 1);

  if ("aeiouwy".includes(lastChar)) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}


function deleteInvalids(arry) {
  if (!Array.isArray(arry)) {
    return "Invalid Array";
  }

  let newArray = [];

  for (let item of arry) {
    if (typeof item === "number" && !isNaN(item)) {
      newArray.push(item);
    }
  }

  return newArray;
}



function password(obj) {
  let name = obj.name;

  let birthYear = obj.birthYear;

  let siteName = obj.siteName;

  if (birthYear.toString().length < 4) {
    return "invalid";
  }

  if (
    typeof name !== "string" ||
    typeof birthYear !== "number" ||
    typeof siteName !== "string"
  ) {
    return "invalid";
  }

  let result = `${
    siteName.charAt(0).toUpperCase() + obj.siteName.slice(1).toLowerCase()
  }#${name}@${birthYear}`;

  return result;
}



function monthlySavings(array, number) {
  let getLargeAmount = array[0];

  let totalIncome = 0;

  if (!Array.isArray(array) || typeof number !== "number") {
    return "invalid input";
  }

  for (let item of array) {
    if (item > getLargeAmount) {
      getLargeAmount = item;
    }
  }

  for (let item of array) {
    totalIncome += item;
  }

  // payment > 3000 হলে এর 20%

  if (getLargeAmount >= 3000) {
    let tax = getLargeAmount * 0.2;

    let totalCost = tax + number;

    let savings = totalIncome - totalCost;

    if (savings < 0) {
      return "earn more";
    } else {
      return savings;
    }
  } else {
    let savings = totalIncome - number;

    return savings;
  }
}
console.log(monthlySavings(100, [ 900 , 2700 , 3400]))
