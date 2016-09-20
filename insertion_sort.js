function insertSort(arr){
    for(var i = 1; i < arr.length; i++){
        var current = arr[i];
        var index = i;
        while(arr[index-1] > current && index > 0){
            arr[index] = arr[index-1];
            index = index - 1;
        }
        arr[index] = current;
        }
    }

var array=[5,4,3,2,1]
console.log("unsorted => ", array)
insertSort(array)
console.log("sorted => ", array)
