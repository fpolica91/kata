function highAndLow(numbers){
    let n = numbers.split(" ")
     n.sort((a,b) => b - a)
     let result = [n[0], n[n.length-1]]
     return result.join(' ') 
   }