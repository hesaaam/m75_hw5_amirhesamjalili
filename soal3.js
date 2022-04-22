

let inputs = "Google,Yahoo,Maktab,Apple";
let domains = "com,net,org,ir";
let urls = {};
let outputs = {};
function createDomains(input, domain) {
  input =  input.split(",")
  domain = domain.split(",")
    input.forEach(item => {
        for (let i = 0; i < domain.length; i++) {
            urls[domain[i]] = `${item}.${domain[i]}`

        }
        outputs[item] = { ...urls }
    })


}

createDomains(inputs, domains)
console.log(outputs);

///////////////////////////////////////////////////////////
// let domains = {};

// class Domain {
//   constructor(domain, list) {
//     list.forEach((item) => {
//       this[item] = `${domain}.${item}`;
//     });
//   }
// };

// let createDomainList = (names, domain) => {
//   let namesArr = names.split(","); // ==> ["apple", "goole"]
//   let domainsArr = domain.split(","); // ==> ["com", "net"]
//   namesArr.forEach((name) => {
//     domains[name] = new Domain(name, domainsArr);
//   });
// };

// createDomainList("google,yahoo,maktab,apple", "com,net,org,ir");

// console.log(domains);
