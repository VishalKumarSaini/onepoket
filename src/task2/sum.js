function sum() {
    inputArrayOfIntegers(sumOfIntegers);
}
sum();

function inputArrayOfIntegers(sumCallBack) {
    process.stdin.setEncoding('utf8');
    console.log('Enter Integers separated by a space: ');

    process.stdin.on('data', (data) => {
        const arr = data.trim().split(' ').map(Number);
        sumCallBack(arr);
        process.exit()
    });
}

function sumOfIntegers(inputArray) {
    const sumOfIntegers = inputArray.reduce((sum, current) => {
        return sum + current
    }, 0);

    if (sumOfIntegers) {
        console.log('Sum Of Integers : ', (sumOfIntegers));
    } else {
        console.log('Invalid input, all entires must be integer ')
    }
}
