


function minmax(arr){
  
  if(arr.length === 0){
    return []
  }

  if(arr.length === 1){
    return {min: arr[0], max: arr[0]}
  }

  let mins = arr[0];
  let maxs = arr[0];
  for(let i=0; i < arr.length; i++){
    if (arr[i] < mins){
      mins = arr[i]
    }
    if(arr[i] > maxs){
      maxs = arr[i]
    }
  }
  return {min: mins, max: maxs}
}

const arr = [98,33,22,44,11,9,99]
console.log(minmax(arr))


function countWords(arr){
  let res = {};
  for(let i=0; i<arr.length;i++){
    if(!(arr[i] in res)){
      res[arr[i]] = 1;
    }
    else {
      res[arr[i]] =  res[arr[i]] += 1;
    }
  }
  return res;
}

const words = ['apple', 'mango', 'apple', 'banana', 'apple']
console.log(countWords(words))