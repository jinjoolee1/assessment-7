let arr = [3, 0, -3];
let arr2 = [2, 4, 6];
function addToZero (arr) {
    let sum = arr.reduce((a,b) => a+b,0)
    for(let i = 0; i <arr.length; i++){
        if (sum ==0){
         return true   
        }
        
    } 
        return false
    }
    
console.log(addToZero(arr))//prints true
console.log(addToZero(arr2))//prints false
//addToZero function has a linear runtime, O(n) and it's space complexity is linear O(n).