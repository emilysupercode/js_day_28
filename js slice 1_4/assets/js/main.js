const A = `Susi is going to codingschool`;

const Susi = (A.slice(0, 4));
console.log(Susi);

const is = (A.slice(5, 7));
console.log(is);

const isGoing = (A.slice(5, 16) + " " + A.slice(23));
console.log(isGoing);

const school = (A.slice(23));
console.log(school);

const susiSchool = (Susi + " " + is + " " + school);
console.log(susiSchool);

document.write(Susi + "<br>" + is + "<br>" + isGoing + "<br>" + school + "<br>" + susiSchool);