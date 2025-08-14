for(let i = 1;i<=3;i++){
    console.log("I am in the outer loop",i);
    for(let j = 1;j<=2;j++){
        console.log("I am in the inner loop",j);
    }
}  

// make a square using nested loops of n numbers
let n = 10;
for(let row = 1; row<=n ;row++){
let line = "";
    for(let col = 1; col<=n;col++){
       line += "  *"
    }
    console.log(line);
}

// make a square of 4 * 4

for(let row = 1; row<=4;row++){
    let line = "";
    for(let col = 1; col<=4;col++){
       line += "  *"
    }
    console.log(line);
}

// right angled triangle
const number  = 8;

for(let i = 1;i<number;i++){
    let line = "";
    for(j=1;j<i;j++){
        line += " *";
    }   
    console.log(line);
}

// reverse right angled triangle
const number2 = 5;
for(let i = number2;i>=1;i--){
    let line = "";
    for(let j = 1;j<=i;j++){
        line += " *";
    }
    console.log(line);
}

// number right angled triangle
const number3 = 10;
for(let i = 1;i<=number3;i++){
    let line = "1";
    for(let j = 2;j<=i;j++){
        line += ` ${j}`;
}
console.log(line);
}

// reverse number right angled triangle
const number4 = 10;
for(let i = number4;i>=1;i--){
    let line = "1";
    for(j = 2; j<=i;j++){
         line += ` ${j}`;
}
console.log(line);
}
//another version
const num = 5;
for (let i = num; i >= 1; i--) {
  let line = "" ;
  for (let j = i; j >= 1; j--) {
    line += j + " ";
  }
  console.log(line);
}

//right angle triangle using a name
let name = "ABHINAV KV";
for (let i = 1; i <= name.length; i++) {
  let line = "";
  for (let j = 0; j < i; j++) {
    line += name[j] + " ";
  }
  console.log(line);
}

// right reverse triangle using a name
let name2 = "ABHINAV KV";
for(let i = name2.length;i>=1;i--){
    let line = "";
    for(let j = 0;j<i;j++){
        line += " " + name2[j];
    }
    console.log(line)
}

const name1 = ["A", "B", "H", "I", "N", "A","V", " ", "K", "V"];

for (let i = 0; i < name1.length; i++) {
    let line = "";
    for (let j = 0; j <= i; j++) {
        line += " " + name1[j];
    }
    console.log(line);
}

