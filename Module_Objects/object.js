/**
 * objects-->(Key:value)
 */
const Obj={}//Object Literal
console.log(typeof Obj);
//object literal
const Obj1={
    name:"Venkata",//proprty
    age:25,
    job:"Developer",
    skills:["Application Development","unit testing","Guidewire Developer"],
    "is Developer":"true"

};
console.log(Obj1["age"]);
console.log(Obj1.skills);
console.log(Obj1["is Developer"]);//if you have a property key has multiple words we need to use square brackets