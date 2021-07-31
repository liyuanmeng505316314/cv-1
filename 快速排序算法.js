function qSort(arr){

if(arr.length<=1) {return arr ;}  //递归的出口
else{
    let p=arr[Math.floor(arr.length/2)];
    let left=[];
    let right=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<=p) { left.push(arr[i]) }
        //这里使用<=号，是将那个p归并到left中，这样就不用操作三个数组的组合
        else{ right.push(arr[i])}
        }
    return qSort(left).concat(qSort(right))
   }
}
