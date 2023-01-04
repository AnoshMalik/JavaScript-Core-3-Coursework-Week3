let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

// function getGryffindor(arrayValue) {

//   return arrayValue;

// }

// GRYFFINDOR NAMES --> TASK 1
let gryffindorValues = hogwarts.filter((hogwart) => hogwart.house == "Gryffindor");
console.log(gryffindorValues);

for (let x of gryffindorValues) {
  let { firstName, lastName } = x;
  console.log(`Gryffindor names: ${firstName} ${lastName}`);

 }


//  TEACHERS w/ PETS --> TASK 2
let teachersPets = hogwarts.filter((hogwart) => hogwart.occupation == "Teacher").filter(teacher => teacher.pet != null);
console.log(teachersPets);


for (let x of teachersPets) {
  let { firstName, lastName } = x;
  console.log(`Teachers w/ pets: ${firstName} ${lastName}`);
}