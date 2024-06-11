let arr = [10, 8, 15, 9, 56];
let flag = true;

for (let i = 0; i < arr.length; i++) {
    // let flag = false;
    for (let j = 0; j < arr.length; j++) {
        console.log(arr);
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            // let flag = true;

            // if (flag = true) {

            // }
            // if (!falg) {
            // break;
            // }
        }
        //   return "true"
        // console.log(arr);
    }

    // console.log(arr);
}

// console.log(arr);