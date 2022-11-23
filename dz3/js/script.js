const sumAB = (numberA, numberB) => numberA + numberB;

const diffAB = (numberA, numberB) => numberA < numberB ? numberB - numberA : numberA - numberB

const mulAB = (numberA, numberB) => numberA * numberB;

const divAB = (numberA, numberB) => numberA / numberB;


const NumberInput = (message) => {
    let number = Number(prompt(message));
    if (Number.isNaN(number)) {
        console.log(`Значение задано не верно`);
    }
    return number;
}

function Ext04() {
    alert('Задача №4. Четыре функции');
    let numberA = NumberInput('Введите первое число: ')
    let numberB = NumberInput('Введите второе число: ')
    console.log('Выберите нужное действие: ');
    console.log('1. Сложение');
    console.log('2. Разность');
    console.log('3. Умножение');
    console.log('4. Деление');
    console.log('5. сделать все действия по порядку');
    console.log('Любое другое число Выход');
    let choice = 0;
    while (choice < 6) {
        choice = NumberInput('Ваш выбор: ')
        switch (choice) {
            case 1:
                console.log(`Сумма чисел ${numberA} и ${numberB} ${sumAB(numberA, numberB)}`);
                break;
            case 2:
                console.log(`Разность чисел ${numberA} и ${numberB} ${diffAB(numberA, numberB)}`);
                break;
            case 3:
                console.log(`Произведение чисел ${numberA} и ${numberB} ${mulAB(numberA, numberB)}`);
                break;
            case 4:
                console.log(`Частное от деления чисел ${numberA} и ${numberB} ${divAB(numberA, numberB)}`);
                break;
            case 5:
                console.log(`Сумма чисел ${numberA} и ${numberB} ${sumAB(numberA, numberB)}`);
                console.log(`Разность чисел ${numberA} и ${numberB} ${diffAB(numberA, numberB)}`);
                console.log(`Произведение чисел ${numberA} и ${numberB} ${mulAB(numberA, numberB)}`);
                console.log(`Частное от деления чисел ${numberA} и ${numberB} ${divAB(numberA, numberB)}`);
                break;
            default:
                alert("Вышли из программы");
        }
    }
}

function Ext03() {
    let array = [];
    let max = 0;
    alert('Задача №3. Три числа');
    for (let i = 0; i < 3; i++) {
        array[i] = NumberInput(`Введите ${i + 1} число: `);
    }
    max = array[0];
    for (let i = 0; i < 3; i++) {
        if (array[i] >= max) max = array[i];
    }
    console.log(array);
    console.log(`Максимальное число массива: ${max} `);
}

function Ext02() {
    let number = NumberInput('Задача№2. (13%) Введите число: ');
    if (!Number.isNaN(number)) console.log(`Размер заработной платы за вычетом налогов равен значение: ${0.87 * number}`);
    //    console.log(`${number}^3 = ${PowCub(number)}`);    
}


const PowCub = (number) => {
    return number ** 3;
}

function Ext01() {
    let number = NumberInput('Задача №1 (возведенье в куб). Введите число: ');
    if (!Number.isNaN(number)) console.log(`${number}^3 = ${PowCub(number)}`);
}

Ext01();
Ext02();
Ext03();
Ext04();
