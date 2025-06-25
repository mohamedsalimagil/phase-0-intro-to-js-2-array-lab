const cats =( [] );{
 console.log(cats.length)
 cats.push("Milo", "Otis","Garfield")
   console.log(cats)
  }
function destructivelyAppendCat(){
    cats.push("Ralph")
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}

 function appendCat(){
    return [...cats, "Broom"]
 }
 function prependCat(){
    return["Arnold",...cats]
 }
 function removeLastCat(){
    return cats.slice(0, -1)
  
 } 
 function removeFirstCat(){
 return cats.slice(1)
 }



   



