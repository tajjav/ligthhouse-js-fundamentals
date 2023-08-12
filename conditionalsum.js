const conditionalSum = function(values, condition) {
  // Your code here
  if(condition.toLowerCase()==="even"){
    let sum=0;
    for(let value of values){
      if(value%2===0){
        sum+=value;
      }
    }
    return sum;
  }
  else if(condition.toLowerCase()==="odd"){
    let sum=0;
    for(let value of values){
      if(value%2!==0){
        sum+=value;
      }
    }
    return sum;
  }
  else
  return 0;

};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));