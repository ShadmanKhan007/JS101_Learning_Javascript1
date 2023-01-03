for(let i=1; i<=10; i++) {
  
  let number= i;
  let count = 0;
  
  for(j=1; j<=number; j++) {
    if(number%j==0) {
    count++;
  }
}
if(count==2) {
  console.log(i,"Prime number")
}
else{
  console.log(i,"Not a prime number")
}
}