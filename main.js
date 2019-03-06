const binaryArrayToNumber = arr => {
    let dec = 0
  
    for(let i = 0; i < arr.length; i++) {
          let lastDigit = arr.pop()
          dec += lastDigit * (2 ** i)
    }
      
    return dec
};

console.log(binaryArrayToNumber([0,0,0,1]))