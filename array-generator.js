function range(start,end,step){
  const answer = [];
  let runningvalue = start;
  if(typeof(start) == undefined || typeof(end) == undefined || typeof(step) == undefined || start > end || step <= 0)
    return answer;
  else if(step > 0){
    for(runningvalue;runningvalue <= end;runningvalue += step){
      answer.push(runningvalue);
    }
  }
  return answer;
}
console.log(range(0,10,2));
console.log(range(10,30,5));
console.log(range(-5,2,3));