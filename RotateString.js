function rotateString(str, int){
    var count = 0;
    var arr = str.split('');
    console.log("initial arr: ",arr);
    while(count < int){
        console.log("here");
        count++;
        rotateArray(arr);
    }
    str = arr.join('');
    return str;
}
function rotateArray(arr){
    for(var i = arr.length-1; i >= 0; i--){
        arr[i+1] = arr[i];
        console.log("for loop arr", arr);
    }
    arr[0] = arr[arr.length-1];
    arr.pop();
    console.log("arr:", arr);
    return arr;
}
console.log("solution: ", rotateString("hello", 3));
