let fileContent = "12,Hesam\n" + "22,Hossein\n" + "36,Reza\n" + "45,ali"
console.log(fileContent)


let convertedTo = fileContent.split("\n").join(",").split(","), //[ '12', 'fatemeh', '22','zahra', '36','ali', '45','reza']
    theobj = {};
for (let i=0; i<convertedTo.length; i+=2) {
  theobj[convertedTo[i]] = convertedTo[(i+1)];
}

console.log(theobj);



////////////////////////////////////////////////////////////////////////////////

let fileContenT = "12,fatemeh\n" + "22,zahra\n" + "36,ali\n" + "45,reza";
const myArray = fileContent.split("\n");   //[ '12,fatemeh', '22,zahra', '36,ali', '45,reza']
let y = {};
myArray.forEach(myFunction);
function myFunction(item) {
  let a = item.split(",");  // a=['12,fateme']
  let key = a[0];
  let value = a[1];
  y[key] = value;  //y={12:fatemeh}
}
// console.log(y)
// let y = {
//   12: "fatemeh",
//   22: "zahra",
//   36: "ali",
//   45: "reza",
// };