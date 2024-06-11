let arr = [10, 20, 0, 40, 50, 60, 15, 8, 9];

let pos=3;
// console.log(arr);
for(let i=pos;i<arr.length;i++)
    {
        arr[i]=arr[i+1]
    }
    // delete(arr[pos]);
    arr.length=arr.length-1
    console.log(arr);