// Exercise #5: Concatenate the Alphabets
let companyName = "TechUp";

for (let i in companyName) {
  console.log(Number(i) + 1);
  companyName =
    " Number" +
    " " +
    (Number(i) + 1) +
    " " +
    "character is" +
    " " +
    companyName[i];
  console.log(companyName);
}
