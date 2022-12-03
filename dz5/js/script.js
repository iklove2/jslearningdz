// const arr1 = ['пн', 'вт','ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1,2,3,4,5,6,7];

// const getObject = (array1, array2) => {
//     if(array1.length === array2.length) {
//         const dayOfWeeks = {};
//         for(let i=0; i < array1.length; i++)
//         {
//             dayOfWeeks[array1[i]] = array2[i];
//         }
//         return dayOfWeeks;
//     } else return 'Массивы не равны';
// }

// console.log(getObject(arr2, arr1));


// const obj = {
//     x: 1,
//     y: 2,
//     z: 3
// }

//console.log(obj);

// for(const key in obj) {
//     console.log(obj[key] = obj[key] ** 2 ); 
// }

//obj.values.map(item => item **2);

// console.log(Object.values(obj).map(item => item **2));

// console.log(obj);


// const obj = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     },
// }

//console.log(Object.values(Object.values(obj)).reduce((accumulator, currentValue) => accumulator + currentValue)); 

// let sum = 0;

// for (const key in obj) {
//     for (const keyIn in obj[key]) {
//       sum += obj[key][keyIn];
//     }
// }

// // console.log(sum);
// console.log(Object.values(obj).map(item => Object.values(item))); 
console.log('Задание №1');

const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
}

for (const key in numbers) {
    numbers[key] >= 3 ? console.log(numbers[key]) : console.log();
}

console.log('Задание №2');

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};



console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

console.log('Задание №3');

const products3 = [
    {
      id: 3,
      price: 200,
    },
    {
      id: 4,
      price: 900,
    },
    {
      id: 1,
      price: 1000,
    },
  ];


products3.forEach(element => { console.log(element.price *= 0.75);   
    
      });

  console.log(products3); 

  console.log('Задание №4 1');

  const products4 = [
    {
      id: 3,
      price: 127,
      photos: [
        "1.jpg",
        "2.jpg",
      ],
    },
    {
      id: 5,
      price: 499,
      photos: [],
    },
    {
      id: 10,
      price: 26,
      photos: [
        "3.jpg",
      ],
    },
    {
      id: 8,
      price: 78,
    },
  ];



//   products4.forEach(element => {console.log(element.filter(photos => photos.length > 0));
// });

// products4.forEach(element => {console.log(element.filter(photos => photos.length > 0));
// });

console.log('я так и не сообразил, как сделать с помощью filter, и узнать длину вложенного массива, сделал по другому');
//я так и не сообразил, как сделать с помощью filter, и узнать длину вложенного массива, сделал по другому
products4.forEach(element => {
    element.photos && element.photos.length >0 ? console.log(element.photos) : console.log();
        
    }
);  
    

console.log('Задание №4 2');

console.log('я тиснул в интернете');
//я тиснул в интернете
console.log(products4.sort((prev, next) => prev.price - next.price));

console.log('Задание №5');


const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const resultObject = {};

for (let index = 0; index < en.length; index++) {
    resultObject[en[index]] = ru[index]; 
}

console.log(resultObject);