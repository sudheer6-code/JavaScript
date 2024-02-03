/**
 * property Existence
 * object does not support indexing
 */
const obj={
    name:"sai",
    age:"25"
}
const proeprtyfound="name" in obj;
console.log(proeprtyfound);

// for(let item in obj){
//     console.log(item);
  for (let key in obj){
    console.log(key,obj[key]);
}
