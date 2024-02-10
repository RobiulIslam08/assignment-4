function monthlySavings(array, number){
    let getLargeAmount = array[0];
    let totalIncome = 0;
   if(!Array.isArray(array) || typeof number !== 'number'){
    return 'invalid input'
   }
    for(let item of array){
       if (item > getLargeAmount){
        getLargeAmount = item
       }
    }
    for(let item of array){
        totalIncome += item
    }
    // payment > 3000 হলে এর 20%
    if(getLargeAmount >= 3000){
        let tax = getLargeAmount * 0.2
        let totalCost = tax + number;
        let savings = totalIncome - totalCost;
        if(savings < 0){
            return 'earn more'
        }
        else{
            return savings;
        }
    }
    else{
        let savings = totalIncome - number
        return savings
    }
}



