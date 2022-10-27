const text = `Susi is back from codingschool`;

let susi = text.substring(0, 4);
console.log(susi);

let is = text.substring(5, 7);
console.log(is);

let school = text.substring(24);
console.log(school);

let sIs = susi + " " + is + " " + school;
console.log(sIs);

document.write(susi + "<br>" + is + "<br>" + school + "<br>" + sIs);
