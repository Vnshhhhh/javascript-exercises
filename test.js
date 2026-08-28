let rows = 5;
let cols = 4;

let arr = [];

for (let i = 0; i < rows; i++) {
    arr[i] = [];

    for (let j = 0; j < cols; j++) {
        arr[i][j] = "*";
        console.log(`Row: ${i + 1}, Column: ${j + 1}`);
    }
}