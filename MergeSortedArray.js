function sortMerge(arr, arr2){
  var i = 0
  var j = 0
  var newarr = []
  while(arr[i] && arr2[j]){
    if(arr[i] < arr2[j]){
      newarr.push(arr[i])
      i++
    } else {
      newarr.push(arr2[j])
      j++
    }
  }
  while(arr[i]){
    newarr.push(arr[i])
    i++
  }
  while(arr2[j]){
    newarr.push(arr2[j])
    j++
  }
  console.log(newarr);
}

var a = [1,2]
var b = [0,3,6]
sortMerge(a,b)
