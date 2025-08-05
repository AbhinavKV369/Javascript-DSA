function towerOfHanoi(n,From,Destination,help) {
  if(n === 1){
    console.log(`Move disk ${n} from ${From} to to ${Destination}`)
  }
  towerOfHanoi()

}

towerOfHanoi(1,"A","C","B");