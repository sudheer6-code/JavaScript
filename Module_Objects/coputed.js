/**
 * add any property to an existence object
 * computed property: 
 */

const readlineSync=require("readline-sync");
const key=readlineSync.question("Do you want to know about the person(name/city/experience/state)-");
const course= readlineSync.question("which course Do you want learn(AI, ML, DataScience)-")
const obj={
    name1:"Sudheer",
    age:25,
    [course]:"course not available"
}
obj.city="Ongole";
obj.state="A.p";
obj.experience="2.2";
console.log(obj["name1"]);
console.log(obj[course]);
