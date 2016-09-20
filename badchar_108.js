function badChar(str,str1){
  var temp = str.split('')
  for(var i =0; i < str1.length; i++){
    for(var j=0; j < temp.length; j++){
      if(str1[i] == temp[j]){
        temp.splice(j, 1)
        console.log(temp);
      }
    }
  }

  console.log(temp.join())
  return
}

badChar('test', 'tst')
