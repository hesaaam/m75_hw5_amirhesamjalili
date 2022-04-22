

const copyObject = object => {
    let copiobj = {};

    for (let key in object) {
        if (typeof object[key] === 'object') copiobj[key] = { ...copyObject(object[key]) }
        else copiobj[key] = object[key]
    }
    return copiobj
};

const mainObj = {
    id: {
        name: "Hesam",
        grades: {
            Mathmatics: 19,
            physics: 18,
            english: {
                grade: 18
            }

        }
    }


}

let c = copyObject(mainObj)
mainObj.id.grades.english.grade = 25

console.log(c.id.grades.english)










