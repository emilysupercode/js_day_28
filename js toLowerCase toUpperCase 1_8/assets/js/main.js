console.log("test")

const text = "Sam is going to codingschool";

const betterText = text.replace("codingschool", "school");
console.log(betterText);

const caps = betterText.toUpperCase();
console.log(caps);

const small = betterText.toLowerCase();
console.log(small);

const outerWords = caps.replace("IS GOING TO", "is going to");
console.log(outerWords);

const innerWords = small.replace("is going to", "IS GOING TO");
console.log(innerWords);

const finalText = betterText.slice(0, 4).concat(betterText.slice(4, 5).toUpperCase()).concat(betterText.slice(5, 7)).concat(betterText.slice(7, 8).toUpperCase()).concat(betterText.slice(8, 13)).concat(betterText.slice(13, 14).toUpperCase()).concat(betterText.slice(14, 16)).concat(betterText.slice(16, 17).toUpperCase()).concat(betterText.slice(17));
console.log(finalText);

document.write(caps + "<br>" + small + "<br>" + outerWords + "<br>" + innerWords + "<br>" + finalText)