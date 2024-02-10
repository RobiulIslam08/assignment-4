
function deleteInvalids(arry){
    if(!Array.isArray(arry)){
        return 'Invalid Array'
    }
    let newArray = []
    for(let item of arry){
        if (typeof item === 'number' && !isNaN(item)){
            newArray.push(item)         
        } 
    }
    return newArray
}

