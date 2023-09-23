// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }

const filterOutOdds = (...arguments) => arguments.filter(num = num % 2 ===0);

const findMin = (...arguments) => Math.min(...arguments);

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(nums => nums *2)];



const removeRandom = (items) => {
    const item = Math.floor(Math.random() * items.length);
    return [...items.slice(0, item), ...items.slice(item + 1)];
};

const extend  = (array1, array2) => {
    return [...array1, ...array2];
};

const addKeyVal = (obj, key, val) => {
    return {...obj, [key]: val};
};

const removeKey = (obj, key) => {
    
}

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
};

const update = (obj, key, val) => {
    return {...obj, [key]: val};
};