

// Destructuring arrays

let ages = [30, 26, 27];
/*let john = ages[0];
let mary = ages[1];
let joe = ages[2];*/
//console.log(john, mary, joe);

let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "devoloper",
    alicia: "accountant"
};

let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);


// Destructuring Subsets
let languages = ['english', 'french', "Spanish", " German", "Japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, maryNative, , marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "French",
    thirdLanguage: "German",
    fourthLanguage: "Japanese"
};

let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax.

let fruits = ["Apple", "Orange", "Banana", "Peach", "Cherry"];
let [favorite, secondFavorite, ...others] = fruits;

console.log(favorite);
console.log(secondFavorite);
console.log(others);
console.log(fruits);