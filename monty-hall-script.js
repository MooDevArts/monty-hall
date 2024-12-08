let switchCount = 0;
let stayCount = 0;

for( let i = 0; i < 10000; i++ ){

const car = Math.floor(Math.random() * 3) + 1;
const choice = Math.floor(Math.random() * 3) + 1;
let remove = Math.floor(Math.random() * 3) + 1;
let suggestion = "";

while(car === remove){
    remove = Math.floor(Math.random() * 3) + 1;
}

//outputting each line
console.log("The car is in door number " + car)
console.log("The contestant chooses door number " + choice)
console.log("The host removes door number " + remove)

//the contestand should..
if(car === choice){
suggestion = "stay"
stayCount = stayCount + 1;
}else{
suggestion = "switch";
switchCount = switchCount + 1;
}

//outputting what the contestant should do
console.log("The contestant should "+suggestion);
}

console.log("Stay was correct " + stayCount/100 + " % of times" );
console.log("Switch was correct " + switchCount/100 + " % of times");