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

const finalText = betterText.replace("Sam is going to school", "Sam Is Going To School");
console.log(finalText);

document.write(caps + "<br>" + small + "<br>" + outerWords + "<br>" + innerWords + "<br>" + finalText)