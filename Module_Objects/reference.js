/**
 * Object Reference& shallow copy:when I copy of an object older object also changes
 * deep copy:when I copy of an object older object won't change
 */
const person1 = {
    name:"sudheer",
    age:24,
    address:{
        city:"Valaprala",
        state:"A.p"
    }
}
// console.log(person1);
// const person2=person1;

// console.log(person2);
// person2.name="Venkata";
// console.log(person1);
// console.log(person2);
const person2=Object.assign({},person1);
console.log(person2);

person2.name="venkata";
person1.age="25";
person2.address.city="Martur"
console.log(person2);
console.log(person1);

