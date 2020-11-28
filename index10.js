"use strict";

import users from "./users.js";

const getSortedUniqueSkills = (users) => {
  let skillsNotUnique = users.reduce(
    (acc, { skills }) => [...acc, ...skills],
    []
  );

  skillsNotUnique = skillsNotUnique.sort();

  return [...new Set(skillsNotUnique)];
};

console.log(getSortedUniqueSkills(users));
[ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// task 10
// another option - другой вариант того же таска

const getSortedUniqueSkills = (users) => {
  return users.reduce(
    (acc, user) => { user.skills.array.forEach(element => {
      acc.includes(element)?"":acc;

    }); return acc},
    []
  ).sort();

};

console.log(getSortedUniqueSkills(users));
