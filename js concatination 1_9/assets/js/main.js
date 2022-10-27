const text1 = "Sam is going to codingschool";
const text2 = "Susi";
const text3 = "programming bike";
const text4 = "and";

// Sam is going to school and to the movie theater
// Sam is going to the movie theater
// Susi and Sam are going to school
// Susi and Sam are going to the gym and to the movie theater
// Susi is going to school and to the movie theater

const text1New = text1.replace("codingschool", "school");
console.log(text1New);

const mT = text1.replace("codingschool", "the movie theater")
console.log(mT);

const tMt = mT.slice(15);
console.log(tMt);

const sS = text1New.replace("Sam is", "Susi and Sam are");
console.log(sS);

const sS2 = sS.replace("to school", "to the gym");
console.log(sS2);

document.write(text1New.concat("", " and to the movie theater") + "<br>" + mT + "<br>" + sS + "<br>" + (sS2.concat("", " ", text4, " ", tMt)) + "<br>" + text2.concat("", text1New.slice(3), " ", text4, " to ", tMt));