let arr=[1,2,3,4,5,6,7];
let even_avg = 0;

for(let i=0; i<arr.length; i++) {
  if(arr[i]%2==0){
    even_avg++
  }
}
console.log("even average:", even_avg)