function SelectionSort(arr){
  for(var i = 0; i < arr.length - 1 ; i ++){
    var min = arr[i]
    var index = i
    for(var j= i+1; j < arr.length ; j ++){
      if(min > arr[j]){
        min = arr[j]
        index = j
      }
    }
    arr[index] = arr[i]
    arr[i] = min
  }

}
var arr = [4,3,2,1]
SelectionSort(arr)
console.log(arr);
