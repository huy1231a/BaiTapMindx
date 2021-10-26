let arr = [1,1,2,2,3,4,5]

let t = [];
for(var i = 0; i < arr.length; i++){
    if(t.indexOf(arr[i]) == -1){
        t.push(arr[i]);
    }
    console.log(t)
}