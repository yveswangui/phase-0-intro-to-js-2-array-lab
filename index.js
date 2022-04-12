let cats = ["Milo", "Otis", "Garfield"]


//APPEND

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyAppendCat(name){
    return cats.push(name)
    
}
destructivelyAppendCat('Ralph')

//PREPEND

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyPrependCat(name){
      return cats.unshift(name)
  }
  destructivelyPrependCat('Bob')

  //pop
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyRemoveLastCat(){
      return cats.pop()
  }
  destructivelyRemoveLastCat()

  //shift
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyRemoveFirstCat(){
      return cats.shift()
  }
  destructivelyRemoveFirstCat()

  //UNDESTRUCTIVE
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });


  function appendCat(name){
      let appendedArray = [...cats,name]
      return appendedArray
  }
  appendCat("Broom")

//PREPEND

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  function prependCat(name){
      let prependArray = [name,...cats]
      return prependArray
  }
  prependCat()

  //REMOVE LAST CAT
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });


  function removeLastCat(){
      return cats.slice(0,2)
  }
  removeLastCat()

  //REMOVE FIRST CAT
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function removeFirstCat(){
      return cats.slice(-2)
  }
