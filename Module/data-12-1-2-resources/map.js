// Map Method

var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

var doubled = numbers.map(function(integer) {
    return integer * 2;
    });
console.log(doubled);

var doubled = numbers.map(function(carPrice) {
    return carPrice * 2;
    });
console.log(doubled);


// Map Method - Skill Drill

var numbers = [0,2,4,6,8];
var addFive = numbers.map(function(num) {
    return num + 5;
});
console.log(addFive);

// Map Method

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

var cityPopulation = cities.map(function(population){
    return population.population;
});
console.log(cityPopulation);

// Filter Method

var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);

// Skill Dill - Filter Method

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var startsWithS = words.filter((word) => word.startsWith("s"));

console.log(startsWithS);

// Filter Method

var numbers = [1,2,3,4,5];
var doubled = numbers.map(num => num * 2);
console.log(doubled);

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

// Slice Method

var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );