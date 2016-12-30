// function add(a , b){
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9,5];
//
// //add(toadd[0],toadd[1]);
// console.log(add(...toAdd));

// var groupA = ['Jen' , 'Cory'];
// var groupB = ['Vikram'];
// var final = [3,...groudA];
//
// console.log(final);

var person = ['chen' ,25];
var personTwo = ['bing' , 24];
//Hi ... you are...
var greet = (name,age)=>{
  console.log('Hi'+name+', you are'+age);
}

greet(...person);
greet(...personTwo);

var name = ['Mike','Ben'];
var final = ['Andrew',...name];
 final.forEach((name)=>{
   console.log('Hi '+name);
 });
