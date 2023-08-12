const sumLargestNumbers = function(data) {
  // Put your solution here
  let firstLargest=Number.MIN_VALUE;
  let secondLargest=Number.MIN_VALUE;

  if(data.length<2){
    return "minimum two numbers are required for sum"
  }
  for(let dat of data){
    if(dat>firstLargest){
      secondLargest=firstLargest;
      firstLargest=dat;
    }
    else if(dat>secondLargest){
      secondLargest=dat;
    }
  }
  return firstLargest+secondLargest;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));