console.log('Sample JavaScript #3 HW #17');

// Задание №1

var counter = (function () {
  var count = 0;

  return function (num) {
    count = num === undefined ? count : num;

    return count++;
  };
}());

console.log(counter());
console.log(counter());
console.log(counter(100));
console.log(counter());
console.log(counter(500));
console.log(counter());
console.log(counter(0));
console.log(counter());

// Задание №2

var counting = (function (){
  var count = 0;

  return {
    value(num) {
    if (num !== undefined) count = num;

    return count;},

    decrement() {
      count--;
    },
    increment() {
      count++;
    },
  };
}());

console.log(counting.value());
counting.increment();
counting.increment();
counting.increment();
console.log(counting.value());
counting.decrement();
counting.decrement();
console.log(counting.value());
console.log(counting.value(100));
counting.decrement();
console.log(counting.value());
console.log(counting.value(200));
counting.increment();
console.log(counting.value()); 

// Задание №3

var myPrint = (a, b, res) => `${a}^${b}=${res}`;
var myPow = (a, b, callback) => {
  var pow = (c, d) => {
    if (d !== 1) return c *= pow(c, d - 1);

    return c;
  };
  
  return callback (a, b, pow(a, b));
};

console.log(myPow(3, 4, myPrint));
console.log(myPow(2, 3, myPrint));


// Задание №4, №5, №6

function fullCarInfo() {
  return `${this.name} ${this.model}, year ${this.year}, ${this.engine}cc, ${this.used}`;
}

var yearNow = new Date().getFullYear();
var car = {
  model: 'FX50 AWD',
  name: 'Infinite',
  year: 2019,
  engine: 5000,
  info: fullInfo,
  get used() {
    return yearNow - this.year ? 'used' : 'new';
  },
  set used(value) {
    if (value === 'new' && this.year < yearNow) this.year = yearNow;
  }
};
var car2 = {
  model: 'Lacetti',
  name: 'Chevrolet',
  year: 2010,
  engine: 2000,
  info: fullInfo,
  get used() {
    return this.year !== yearNow ? 'used' : 'new';
  },
  set used(value) {
    if (value === 'new' && this.year < yearNow) this.year = yearNow;
  }
};


console.log(car2.info());
car.used = 'new';
console.log(car2.info());
car.used = 'used';
console.log(car2.info());
console.log(car.info());
car.used = 'used';
console.log(car.info()); 

// Задание №7

/*
 * #7
 * Создайте функцию myMax(arr), которая в качестве параметра принимает
 * произвольный числовой массив и возвращает максимальное число из переданного ей массива.
 * В реализации функции должен быть применен метод Math.max() и apply().
 */

// let list = [12, 23, 100, 34, 56, 9, 233];

// console.log(myMax(list)); // 233

/*
 * #8
 *
 * Создайте функцию myMul(a, b), которая будет умножать числа а и b, возвращая результат.
 */

/*
 * создайте функции myDouble(n), которая принимает один параметр и  удваивает его.
 * Использовать умножение или другие математические операции внутри функции – запрещено, только bind() и myMul().
 * Функция возвращает результат вычисления.
 */

// console.log(myDouble(3)); // = myMul(2, 3) = 6

// console.log(myDouble(4)); // = myMul(2, 4) = 8

// console.log(myDouble(5)); // = myMul(2, 5) = 10

// аналогичным образом создайте функцию myTriple(n), которая утраивает принимающий параметр, возвращая результат.

// console.log(myTriple(3)); // = myMul(3, 3) = 9

// console.log(myTriple(4)); // = myMul(3, 4) = 12

// console.log(myTriple(5)); // = myMul(3, 5) = 15

/*
 * #9
 *
 * Постройте функцию myUniq(arr), которая будет принимать произвольный массив
 * повторяющихся примитивных значений (например, имена пользователей или числа ).
 * Функция должна вернуть коллекцию уникальных значений.
 * В реализации разрешено использование set.
 * Любые условные операторы – запрещены и объекты.
 */

// let notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];

// let notUniqStrings = ['Bob', 'Kate', 'Jhon', 'Tom', 'Jhon', 'Kate', 'Tom', 'Bob', 'Jhon', 'Tom'];

// console.log(myUniq(notUniqNums));

// console.log(myUniq(notUniqStrings));