/********************
 * YOUR CODE BELOW! *
 ********************/

function moreThan5(val1) {
  return val1 > 5;
}

function isNewTopScore(val1, val2) {
  return val1 > val2;
}

function isInDanger(val1) {
  return 71 >= val1 && val1 >= 60;
}

function isCoasting(val1) {
  return 83 >= val1 && val1 >= 72;
}

function isSucceeding(val1) {
  return 92 >= val1 && val1 >= 84;
}

function isFailing(val1) {
  return val1 < 60;
}

function isAcing(val1) {
  return val1 > 92;
}

function isStudent(val1) {
  return val1 === "student";  
}

function isTeacher(val1) {
  return val1 === "teacher";  
}

function isAdmin(val1) {
  return val1 === "admin";  
}

function isElementary(val1) {
  return val1 === "elementary";
}

function areDifferentPeople(val1, val2) {
  return val1 !== val2;
}

function isMiddleSchoolTeacher(val1, val2) {
  return val1 === "teacher" && val2 <= 8 && val2 >= 6;
}

function notAnElementarySchoolAdministrator(val1, val2) {
  return val1 !== "elementary" || val2 !== "admin";
}

/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof isNewTopScore === 'undefined') {
  isNewTopScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof areDifferentPeople === 'undefined') {
  areDifferentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  isNewTopScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}
