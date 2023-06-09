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





let isUnique = (str) => {
    const hash = {};
    for (const i in str) {
      if (hash[str[i]]) return false;
      hash[str[i]] = true;
    }
    return true;
  };
  
  console.log(isUnique('Louisiana'));//prints false
  console.log(isUnique('Dad'));//prints true

//isUnique has a Constant runtime, O(1) because it's just looking up something. It's space complexity is constant O(1).






  function isPangram (string) {
      let strArr = string.toLowerCase();
      let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

      for (let i = 0; i < alphabet.length; i++) {
          if(strArr.indexOf(alphabet[i]) < 0) {
              return false;
          }
      }

      return true;
  }

  console.log(isPangram("The quick brown fox jumps over the lazy dog!"));//prints true

  console.log(isPangram("Butters is tan."))//prints false

  //isPangram function has a linear runtime, O(n), and it's space complexity is O(n).




  let randomArray = ["Bunnies", "are", "better", "thank", "goodness"]

  findLongestWord = randomArray.sort(function(a, b) {return b.length - a.length})[0].length;
  console.log(findLongestWord)//prints 8

  //findLongestWord function has a Logarithmic runtime, O(n log n) and a logarithmic space complexity. Because I used the sort method. 