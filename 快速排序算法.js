function qSort(arr){

if(arr.length<=1) {return arr ;}  //递归的出口
else{
    let p=arr[Math.floor(arr.length/2)];
    let left=[];
    let right=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<=p) { left.push(arr[i]) }
        else{ right.push(arr[i])}
        }
    return qSort(left).concat(qSort(right))
   }
}