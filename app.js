// -----------------------------------------------------------------------------
// Implementa una función llamada hasId que admita 
//como parámetro un objeto y compruebe si dicho objeto tiene una
//propiedad llamada id (debe devolver booleano true / false ).
// -----------------------------------------------------------------------------

// const shoppingCart = [
//     { id: "44Y", price: 32, product: "chocolate" },
//     { id: "33B", price: 32, product: "cerveza" },
//     { price: 32,  product: "desodorante"},
//     ];
    
// const hasId = product => product.every(product => product.id)
// console.log(hasId(shoppingCart))



// -----------------------------------------------------------------------------
// Implementa una función llamada head tal que, dado un 
// array como entrada, devuelva el primer elemento.
// -----------------------------------------------------------------------------

 const Products = ["manzana", "chocolate", "melocoton"]

 const head= ([first]) => first

 console.log(head(Products))


// -----------------------------------------------------------------------------
// Implementa una función llamada tail tal que, dado un array 
// como entrada, devuelva un nuevo array con todos los
// elementos menos el primero.
// -----------------------------------------------------------------------------


 const Fruits = ["manzana", "chocolate", "melocoton"]
 const [firstItem, ...restItems] = Fruits;

 function tails() {
     return console.log(restItems)
 } 

 tails()



// -----------------------------------------------------------------------------
// Implementa una función llamada swapFirstToLast 
// tal que, dado un array como entrada, devuelva 
// un nuevo array donde el
// primer elemento ha sido colocado en la última posición.
// -----------------------------------------------------------------------------

 const autos = ["mercedes", "audi", "renault"]

 const [ auto1, auto2, auto3] = autos

 function swapFirstToLast() {
 return console.log([auto2,auto3, auto1])
    
 }

 swapFirstToLast()

// -----------------------------------------------------------------------------
// Implementa una función llamada excludeId
// tal que, dado un objeto como entrada, 
// devuelva dicho objeto clonado excepto
// la propiedad id si la hubiera
// -----------------------------------------------------------------------------



 const user = {
     id: 4451234,
     name: "Javi",
     surname: "Calzado",
     age: 36,
 };

const { name , age } = user
const copyUser = {...user}
console.log(copyUser)


  function excludeId () {
   const { name, age } = user;
     return console.log(user)
 }

 excludeId()


// -----------------------------------------------------------------------------
//Implementa una función llamada 
//wordsStartingWithA tal que, dado un array de palabras como entrada, 
//devuelva otro array filtrado con 
//aquellas palabras que empiecen por a.
//
// -----------------------------------------------------------------------------


const students = ["alvaro" , "pepe" , "ana" , "pedro"]



const wordsStartingWithA = students => 
    students.filter(student => student[0] === "a" );

console.log(wordsStartingWithA (students))                                 


// -----------------------------------------------------------------------------
// Implementa una función llamada 
// concat tal que admita múltiples 
// argumentos de tipo string y devuelva 
// otro string con la
// concatenación de todos, separados por | .
//-----------------------------------------------------------------------------



function concat(...myArguments) {
    console.log(myArguments.join("|"))
}

concat("uno" , "dos", 3,4)


// -----------------------------------------------------------------------------
// Implementa una función llamada multArray que
// admita un array de números (arr) y otro parámetro
// que sea un número (x) y devuelva un nuevo array 
// donde cada elemento ha sido multiplicado por x.
// -----------------------------------------------------------------------------


function multArray(x , [...arr]) {
   return arr.map((arr)=> (arr * x))
}


console.log(multArray(9, [2,3]))

