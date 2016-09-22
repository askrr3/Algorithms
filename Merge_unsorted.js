function merge(arr){
  if(arr.length == 1){
    return arr
  }
  console.log(arr);
  while(arr.length > 1){
    console.log(arr);
    return combine(merge((arr.slice(0,arr.length/2))), merge((arr.slice(arr.length/2))) )

  }
}

arr = [3,5,3,2]
merge(arr)
