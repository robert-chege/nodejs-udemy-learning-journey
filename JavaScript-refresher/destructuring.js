const person = {
    name: "Robert",
    age: 21,
    greet() {
        console.log(`Hi I am ${this.name}`);
    }
};

// const printName = (personData) => {
//     console.log(personData.name);
// }
const printName = ({name}) => {
    console.log(name);
};

printName(person);

// pulledby property name
const {name, age} = person;
console.log(name, age);

// arrays: pullby position
const hobbies = ["Sports", "Programming"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);