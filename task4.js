function password(obj){
    let name = obj.name 
    let siteName = obj.siteName;
    if(birthYear.toString().length < 4 ){
        return 'invalid'
    }
    if(typeof name !== 'string' || typeof birthYear !== 'number' ||typeof siteName !== 'string'){
        return 'invalid'
    }
    let result = `${siteName.charAt(0).toUpperCase() + obj.siteName.slice(1).toLowerCase()}#${name}@${birthYear}`;
    return result
}

