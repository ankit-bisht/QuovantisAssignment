const arr = ['red',
'green', 'yellow', 'green', 'red', 'red', 'green', 'red', 'green', 'blue', 'yellow',
'green', 'green', 'red', 'green', 'blue','orange'];

let colorCount = []
let currentColor = {};
let num = null;

for(i=0; i< arr.length; i++){
    num = arr[i];
    if(colorCount[num]) {
        colorCount[num] = colorCount[num] + 1
    } else {
        colorCount[num] = 1
    }
}

console.log(colorCount)