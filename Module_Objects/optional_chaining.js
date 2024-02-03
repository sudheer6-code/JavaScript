/**
 * optional chaining
 */
const user={
    name1:"venkata",
    age:25,
    address:{
         street:"main",
        //city:"Martur"
    },
    likes:"eat coding sleep repeat",
    getDisplayName:function() {
    console.log("welcome sudheer")
   }
}
//sol 1

// if(user.address!==undefined){
//     console.log(user.address.city);
// }else{
//     console.log("address is not found");
// }
//console.log(user.address.city);// if the propertie is not find it will give you undefinded
//sol 2
// console.log(user.address?.city);
user.getDisplayName();
console.log(user.getDisplaycity?.());// before calling function need to check get display city is function or not

console.log(user.hobbies);
