const hobbies = ["Sports", "Cooking"];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }


// console.log(hobbies.map(hobby => `Hobby: ${hobby}`));
// console.log(hobbies);

// const copiedArray = hobbies.slice();
const copiedArray = [...hobbies];
console.log(copiedArray);

const person = {
    name: "Robert",
    age: 21,
    greet() {
        console.log(`Hi I am ${this.name}`);
    }
};

const copiedPerson = {...person};
console.log(copiedPerson);

const toArray = (...args) => {
    return args;
};

console.log(toArray(1, 2, 3, 4));