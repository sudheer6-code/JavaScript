/**
 * short hand
 */
function getObjects(name,city){
    return{
        name:name,
        city:city
    }
}
const Obj=getObjects("Venkata", "AndhraPradesh");
console.log(Obj);
const student2=getObjects("venkata","Sai");
console.log(student2)
const age=25;
const job="Software Developer";
console.log({age,job})