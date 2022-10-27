const text = "Sam is good at codingschool";

const bad = text.replace("good", "bad");
console.log(bad);
const badSchool = bad.replace("codingschool", "school");
console.log(badSchool);
const goodSchool = text.replace("codingschool", "school");
console.log(goodSchool);
const goodTennis = goodSchool.replace("school", "tennis");
console.log(goodTennis);

document.write(bad + "<br>" + badSchool + "<br>" + goodSchool + "<br>" + goodTennis + "<br>")
