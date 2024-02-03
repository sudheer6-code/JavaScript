/**
 * Function as Object Property
 */
const Obj={
    name:"Venkata Sai Sudheer",
    greetMessage:function(){
        console.log("hello venkata sai");
    },
     buy(){
        console.log("watch need to buy");
    }
}
console.log(Obj);
Obj.greetMessage();
Obj.buy();
/**
 * function borrowing is internally we are assigning a function property to that object but it is not stored in object memory
 */