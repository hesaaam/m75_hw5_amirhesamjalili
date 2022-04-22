let province = {
     
        tehran: [
            "shahriar",
            "eslamshahr",
            "damavand"
          
        ],
      
        kermanshah: [
            "sahne",
            "kangavar",
            "sumar"
    
        ]

}

function addState(state) {
   
    if (!province.hasOwnProperty(state)) province = {...province,[state]:[]}     //province[state] = []
    
} 

addState("mashad");
// console.log(province)

///////////////////////////////////////////////////////////////////////

function addCity(state,city) {
   if(province.hasOwnProperty(state)) {
       
       province[state] = [...province[state],...[city]]
    }  
}
addCity('tehran',"rey")
// console.log(province)

////////////////////////////////////////////////////////////////////////////

function addCities(state,cities) {

    if(province.hasOwnProperty(state)) {
       
        province[state] = [...province[state],...cities]
     } 
}

addCities("tehran",['parand','pardis']);
console.log(province)








  

   
  