const Joined = (first, second) => {
    for(let i=0; i<second.length; i++) {
      first.push(second[i]);
    }
    return first;
  }
//////////////////////////////////////////////////////////////////////////

  function combineArray(array1, array2, array3, array4) {
    return [...array1, ...array2, ...array3, ...array4];
  }

///////////////////////////////////////////////////////////////////////////
  function combineArray(array1, array2, array3, array4) {
    return [].concat(array1, array2, array3, array4);
  }
  

 
console.log(combineArray([1,2,3,4],[5,6,7],[8,9],['hesam']))