let educationEnum = {
    PhD: 0,
    MA: 1,
    Bachelor: 2,
    AssociateDegree: 3,
    Diploma: 4

}


class UserManager {
    constructor() {
        this.listOfUser = [];
        this.currentId = 0;

    }

    add = function (item) {
        item.id = this.currentId
        this.listOfUser.push(item)
        this.currentId++
    }


    remove = function (id) {
        let idx = this.listOfUser.findIndex(user => user.id === id)
        if (idx > -1) {
            this.listOfUser.splice(idx, 1)
        }

    }

    change = function (id, obj) {

        let idx = this.listOfUser.findIndex(user => user.id === id)
        if (idx !== -1) {
            for (let key in obj) {
                this.listOfUser[idx][key] = obj[key]
            }
        }

    }
    findById = function (id) {
        return this.listOfUser.find(user => user.id === id)

    }

    userFilter = function (options) {

        return this.listOfUser.filter(user => {
            for (const key in options) {
                if (key === 'age' && !(user[key] <= options[key].end && user[key] >= options[key].start)) {
                    return false
                }
                if ((key === "name" || key === "family")
                    && !(user[key][0] === options[key].start
                        && user[key][user[key].length - 1] === options[key].end)
                ) {
                    return false
                }
            }
            return true;

        });
    }

    userSort = function (base) {
        this.listOfUser.sort((a, b) => {
            let A = a[base];
            let B = b[base];
            if (base === 'age') {
                return A - B
            } else if (base === 'education') {
                
                 
                return    educationEnum[A] - educationEnum[B]
            }
            
            else {

                if (A < B) {
                    return -1;
                }
                if (A > B) {
                    return 1;
                }
                if (A === B) {
                    0
                }
            }
        });
    }
    userExport = function (id) {
        let user = this.listOfUser.find(user => user.id === id)
        return user ? { ...user } : {}
    }

}

let userManager = new UserManager();

userManager.add({ name: "Dariush", family: "Saremi", age: 27, education: "Bachelor", phoneNumber: 25 })
userManager.add({ name: "Reza", family: "Hadi", age: 25, education: "MA", phoneNumber: 42 })
userManager.add({ name: "Ali", family: "Ahmadi", age: 23, education: "AssociateDegree", phoneNumber: 15 })
userManager.add({ name: "Saman", family: "Zahed", age: 21, education: "Diploma", phoneNumber: 50 })
userManager.add({ name: "Bahram", family: "Asoudeh", age: 39, education: "PhD", phoneNumber: 11 })
console.log(userManager.userExport(0))
userManager.change(0, { name: "Soheil" })
userManager.remove(0)
userManager.userSort("age")
console.log(userManager.listOfUser)
// console.log(userManager.findById(2))
// console.log(userManager.userFilter({age:{start:18, end:40}, name:{start:"b",end:"m"}}))




