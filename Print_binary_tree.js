this.print = function(){
    function across(level, root1){
        var arr = [];
        for (var i=0; i<Math.pow(2, level); i++){
            var current = root1;
            var map = i.toString(2);
            var len = map.length;
            for (var j=0; j < level - len; j++){
                map = '0' + map;
            }
            for (var j=0; j<map.length; j++){
                if (map[j] == '0'){
                    current = current.left;
                }
                else {
                    current = current.right;
                }
                if (!current){
                    arr.push(' ');
                    break;
                }
            }
            if (current){
                arr.push(current.val);
            }
        }
        return arr;
    }
    if (!this.root){
        return;
    }
    console.log('*' + this.root.val);
    var h = this.height();
    for (var i=1; i<h; i++){
        var arr = across(i, this.root);
        var p = '*';
        for (var j=0; j<arr.length; j++){
            p += arr[j] + '*';
        }
        console.log(p);
    }
}
