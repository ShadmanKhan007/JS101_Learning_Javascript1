let str = "john Doe";
let space = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] == " ") {
    space++
  }
}
console.log("words:", space+1)