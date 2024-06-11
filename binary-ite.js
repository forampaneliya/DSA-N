// iterative approch====================================================================================

let arr = [10, 25, 36, 50, 56, 75, 87, 89, 93];
let ele=36;
function Binaryserch(arr, ele) {
    let first = 0;
     let last=arr.length - 1;
    while (first <= last)  {
        let mid = Math.floor((first + last) / 2);
        if (arr[mid] === ele) {
            return true;
            // console.log("true");

        }
        
        if(ele<arr[mid]) 
            {
            last = mid - 1;
            // return true
            
        }
        if (ele > arr[mid]) {
            first = mid + 1;
            // return true
            }
}
    return false
    // console.log("false");

}
let result=Binaryserch(arr,ele)
console.log(result);
// Binaryserch(arr,ele);
