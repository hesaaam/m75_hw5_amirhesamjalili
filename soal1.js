
let information  = {};
	




class Student {
	constructor(name, family, fatherName, fatherJob, age, grade, city, bolvared, street, alley, block, No, floor) {
		this.name = name;
		this.family = family;
		this.fatherName = fatherName;
		this.fatherJob = fatherJob;
		this.age = age;
		this.grade = grade;
		this.address = new Address(city, bolvared, street, alley, block, No, floor)
		
	}
	
	
}
class Address {
	constructor(city, bolvared, street, alley, block, No, floor) {
		this.city = city;
		this.bolvared = bolvared;
		this.street = street;
		this.alley = alley;
		this.block = block;
		this.No = No;
		this.floor = floor;

	}
}

let addStudent = (name, family, fatherName, fatherJob, age, grade, city, bolvared, street, alley, block, No, floor) => {
	let key = ""
	let student = new Student(name, family, fatherName, fatherJob, age, grade, city, bolvared, street, alley, block, No, floor)
	let keys = Object.keys(information);
	
	
	if (keys.length === 0) {
		key = "01"
	}else {
		let x = keys[keys.length-1]
		x = parseInt(x) + 1;
		if (x > 9) {
			key = `${x}`
		} else {
			key = `0${x}`
		}
	}
	information[key] = student

}


let loop = true;

while (true) {
	let userInput = prompt("please Enter a command")
	if (userInput === "Add") {
		userInput = prompt("please Enter the Information")
		
		let [name, family, fatherName, fatherJob, age, grade, city, bolvared, street, alley, block, No, floor] = userInput.split(",")
		addStudent(name, family, fatherName, fatherJob, age, grade, city, bolvared, street, alley, block, No, floor)

	} else if (userInput === "End") {
		loop = false
		break;
	} else {
		loop = false
		break;
	}
	
}

console.log(JSON.stringify(information));



















