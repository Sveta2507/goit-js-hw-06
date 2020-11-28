"use strict";

import users from "./users.js";

const getNamesSortedByFriendsCount = (users) => {
  const sortByNumOfFriends = (userOne, userTwo) =>
    userOne["friends"].length - userTwo["friends"].length;
  return users.sort(sortByNumOfFriends);
};

console.log(getNamesSortedByFriendsCount(users));
[ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]