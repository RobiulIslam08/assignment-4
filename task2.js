function checkName(str){
    if(typeof str !== 'string'){
        return 'invalid'
    }
   const lastChar = str.toLowerCase().charAt(str.length - 1)
   if('aeiouwy'.includes(lastChar)){
    return 'Good Name'
   }
   else{
    return 'Bad Name'
   }
}
console.log(checkName(199))
