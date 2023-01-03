let str = ["a", "b", "c", "d"]
let new_str = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] == "a") {
    new_str = new_str + "A";
  }
  else if (str[i] == "b") {
    new_str = new_str + "B"
  }
  else if (str[i] == "c") {
    new_str = new_str + "C"
  }
  else if (str[i] == "d") {
    new_str = new_str + "D"
  }
  else {
    new_str = new_str + str[i]
  }
}
console.log(new_str);