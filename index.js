// Code your solution here
function findMatching(array, check){
    return array.filter((match) => {
        return match.toUpperCase() === check.toUpperCase();
    })
}
function fuzzyMatch(array, check){
    
   let returnArray = array.filter(function(el) {
    return check[0] === el[0] && check[1] === el[1];
   })
   return returnArray;
    

}
function matchName(arrayOffObjects, driverName){
    return arrayOffObjects.filter(function(item){
        return item.name === driverName;
    })
}