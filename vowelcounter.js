const numberOfVowels = function(data) {
  let vowels="aeiou";
  let count=0;
  for(let i=0;i<data.length;i++){
    for(let v=0;v<5;v++){
      if(data[i]==vowels[v]){
      count++;
      }
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));