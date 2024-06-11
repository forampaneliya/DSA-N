let arr = [10, 20, 0, 40, 50, 60, 15, 8, 9];

let search = 50;
let flag = true;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == search) {
        console.log("true");
        return "true";
    }

    else {
        console.log("false");
    }

}