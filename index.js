const cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat (){
    cats.push('Ralph')

}
function destructivelyPrependCat(){
    cats.unshift('Bob')
}
 function destructivelyRemoveLastCat(){
    cats.pop('')
}
function destructivelyRemoveFirstCat(){
    cats.shift ('')
}
function appendCat(Ralph){
    var newArray = cats.slice();
    newArray.push (Ralph)
    return newArray

}

function prependCat(Bob){
    var newArray= cats.slice ();
    newArray.unshift(Bob);
    return newArray
}
// function removeLastCat(){
//     var newArray = cats.slice();
//     new
// }

function removeLastCat() {
    let newArray=[]
    return newArray=cats.slice(0,-1)
}
function removeFirstCat() {
    let newArray=[]
    return newArray=cats.slice(1)
}




// console.log (cats)
