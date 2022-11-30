console.log('Задание №1');
for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    }
    else { i % 2 ? console.log(`${i} - нечетное число`) : console.log(`${i} - четное число`);; }

}


function NewArray(array) {
    const result = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] !== 4)
            if (array[index] !== 5) {
                result.push(array[index]);
            }
    }
    return result;
}

console.log('Задание №2');
array = [1, 2, 3, 4, 5, 6, 7];
console.log(array);
result = NewArray(array);
console.log(result);


function GenArr(elem) {
    const arr = [];
    for (let i = 0; i < elem; i++) {
        arr.push(Math.round(Math.random() * 10));
    }
    return arr;
}

function SumArray(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum;
}

function MinArray(array) {
    let min =array[0];
    for (let index = 0; index < array.length; index++) {
        if(min <= array[index]) min = array[index];
    }
    return min;
}

function ThreeArray(array) {
    let three = false;
    for (let index = 0; index < array.length; index++) {
        array[index] === 3 ? three = true : three = false;
    }
    return three;
}

console.log('Задание №3');
const arr = GenArr(5);
console.log(`Массив: ${arr}`);
console.log(`Сумма элементов массива: ${SumArray(arr)}`);
console.log(`Минимальный элемент массива: ${MinArray(arr)}`);
ThreeArray(arr) ? console.log(`В массиве есть число 3`) : console.log(`В массиве нет числа 3`) ;

console.log('Задание №4');

function DecisionFour(array) {
    for (let index = 0; index < array.length; index++) {
        //console.log(`${array[index]} - ${array[index]%2}`);
        //console.log(`${array[index]} - ${array[index]%3}`);
        if (array[index]%2 === 0) console.log(`${array[index]} Делиться на два: ${array[index]**2}`);
        if (array[index]%3 === 0) console.log(`${array[index]} Делиться на три: ${array[index]**3}`);
    }
}

const arrFour = GenArr(10);
console.log(arrFour);
DecisionFour(arrFour);

console.log('Задание №5');

function DecisionFive(array) {
    let count = 0;
    for (let index = 0; index < array.length; index++) {
        for (let index = 0; index < array.length; index++) {
            if(array[index] === 3)  count++;
        }
        return count;
    }
}

const arrThree = [1,2,3,2,4,3,5,6,3,2,3];
console.log(arrThree);
console.log(`В массиве ${DecisionFive(arrThree)} цифр 3`);

console.log('Задание №6');


function SixArray(array) {
    const result = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] !== 2)
            if (array[index] !== 3) {
                result.push(array[index]);
            }
    }
    return result;
}

const arrFive = [1,2,3,4,5];
console.log(arrFive);
result = SixArray(arrFive);
console.log(result);

console.log('Необязательное задание.');

function Slide(elem = 20) {
    for (let i = 1; i <= elem; i++) {
        let temp ='';
        for (let j = 1; j <= i; j++) {
            
            temp += 'x'
        }
        console.log(temp);        
    }
}

Slide();