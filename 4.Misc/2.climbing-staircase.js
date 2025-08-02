function climbingStaircase(steps){
let ways = [1,2];
for(let i = 2;i<steps;i++){
    ways[i] = ways[i-1]+ways[i-2]
}

return ways[steps-1];
}
const steps = 10;
console.log(climbingStaircase(steps))