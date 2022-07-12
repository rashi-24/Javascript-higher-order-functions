const foods = ['pizza', ' burger', ' fingerChips', ' donuts', ' springRoll'];
document.write("Original array is: " + foods + "<br<br>");
document.write("Array after slice " + foods.slice(1, 4) + "<br><br>");
foods.splice(2, 0, ' noodles', ' icecream')
document.write("Array after splice: " + foods + "<br><br>");

const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
document.write("Original number array is: " + numberArray + "<br><br>");
let res = numberArray.filter(ele => ele % 2 === 0);
document.write("Even numbers: " + res + "<br><br>");

let isPrime = (numberArray) => {
    let res = numberArray.filter((num) => {
        if (num == 2 || num == 1) {
            return num;
        } else {
            let i = num - 1,
                flag = true;
            while (i > 1) {
                if (num % i === 0) {
                    flag = false;
                    break;
                } else {
                    i--;
                }
            }
            if (flag) {
                return num;
            }
        }
    });
    return res;
};
document.write("Prime numbers are: " + isPrime(numberArray) + "<br><br>");

//Reject

let reject = (numberArray) => {
    let res = numberArray.filter((num) => {
        let i = num - 1,
            flag = false;
        while (i > 1) {
            if (num % i == 0) {
                flag = true;
                break;
            } else {
                i--;
            }
        }
        if (flag) {
            return num;
        }
    });
    return res;
}
document.write("Reject function answer is: " + reject(numberArray) + "<br><br>");

let even = numberArray.filter((num) => num % 2 == 0);
document.write("Using Lambda: " + even + "<br><br>");


let myArray = [11, 34, 20, 5, 53, 16];
let findSquareOfNumbers = (myArray) => {
    let result = [];
    myArray.map((num) => {
        result.push(num * num);
    });
    return result;
};
document.write("Original number array is: " + myArray + "<br><br>");
console.log(findSquareOfNumbers(myArray));
document.write("Square number: " + findSquareOfNumbers(myArray) + "<br><br>");

let myArrays = [2, 3, 5, 10];
let multiply = (myArrays) => {

    return myArrays.reduce((a, b) => {
        return a * b;
    });

};
document.write("Original number array is: " + myArrays + "<br><br>");
document.write("Square number: " + multiply(myArrays) + "<br><br>");