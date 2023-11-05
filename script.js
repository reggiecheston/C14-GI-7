"use strict";

// EASY
const exercise = (exercise) => {
  return `Today's exercise: ${exercise}`;
};

console.log(exercise("Running"));
console.log(exercise("Swimming"));
console.log(exercise("Dancing"));
console.log(exercise("Fencing"));

// MEDIUM
const sharePizza = (people, slices) => {
  const share = people / slices;
  return `Each person gets ${
    Math.round(share * 100) / 100
  } slices of pizza; from our ${slices} slice pizza`;
};

console.log(sharePizza(8, 2));
console.log(sharePizza(8, 3));
console.log(sharePizza(21, 20));
console.log(sharePizza(10, 3));

// HARD
let patient2 = (function () {
  let ssn = "123 - 45 - 6789";
  let names = "John";
  const PII = {
    getName: function () {
      return names;
    },
    getSSN: function () {
      return ssn;
    },
  };

  return PII;
})();

console.log(patient2.names);
console.log(patient2.ssn);
console.log(patient2.getName());
console.log(patient2.getSSN());

// VERY HARD
function Person(name, job, age) {
  (this.name = name),
    (this.job = job),
    (this.age = age),
    (this.exercise = function (exercise) {
      console.log(`${exercise} is fun!`);
    }),
    (this.fetchJob = function () {
      console.log(`${this.name} is a ${this.job}.`);
    });
}

function Programmer(name, job, age, arr) {
  (this.name = name),
    (this.job = job),
    (this.age = age),
    (this.languages = arr),
    (this.busy = true),
    (this.completeTask = function () {
      this.busy = false;
    }),
    (this.acceptNewTask = function () {
      this.busy = true;
    }),
    (this.offerNewTask = function () {
      if (this.busy === true) {
        console.log(`${this.name} can't accept any new tasks right now.`);
      } else {
        console.log(`${this.name} would love to take on a new responsibility.`);
      }
    }),
    (this.learnLanguage = function (language) {
      this.languages.push(language);
    }),
    (this.listLanguages = function () {
      return this.languages;
    });
}

const person1 = new Person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS”, ”Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31, ["HTML", "CSS", "JS", "R"]);
c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");
console.log(c1.listLanguages());
console.log(c2.listLanguages());
console.log(c3.listLanguages());
c1.acceptNewTask();
c2.completeTask();
c2.acceptNewTask();
console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);
person1.exercise("Running");
person1.fetchJob();
