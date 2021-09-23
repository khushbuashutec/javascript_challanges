// let js = "amazing";
// if (js === "amazing") alert("javascript is fun");
// 40 + 8 + 23 - 10;
// console.log(40 + 8 + 23 - 10);
// console.log("khushbu");
// console.log(23);
// let firstName="any name";
// console.log(firstName);

//**************coading challange 1************* */

//test data 1
const markMass=78;
const markHeight=1.69;
const johnMass=92;
const johnHeight=1.95;
const markBmi=(markMass/markHeight**2);
const johnBmi=(johnMass/johnHeight**2);
console.log(markBmi,johnBmi);
markHigherBmi=(markBmi>johnBmi);
console.log(markHigherBmi);


// //test data 2
// const markMass=95;
// const markHeight=1.88;
// const johnMass=85;
// const johnHeight=1.76;
// const markBmi=(markMass/markHeight**2);
// const johnNmi=(johnMass/johnHeight**2);
// markHigherBmi=(markBmi>johnNmi);
// console.log(markHigherBmi);

//**************coading challange 2************* */

if(markBmi>johnBmi)
{
    console.log("Mark's BMI is higher than John's!");

}
else{
    console.log("John's BMI is Higher than MaRK'S!");
}

if(markBmi>johnBmi)
{
    console.log(`Mark's BMI (${markBmi}) is higher than John's! (${johnBmi})`);

}
else{
    console.log(`John's BMI(${johnBmi}) is Higher than Mark's! (${markBmi})`);
}


//**************coading challange 3************* */


// const dolphinScore = 96+108+89/3;
// const koalasScore= 88+91+110/3;

const dolphinScore = (67+79+50)/3;
const koalasScore= (110+97+90)/3;

console.log(dolphinScore,koalasScore);
if(dolphinScore>koalasScore && dolphinScore>=100)
{
    console.log("yah! Dolphin is winner..!");
}else if(dolphinScore===koalasScore && dolphinScore>=100 && koalasScore>=100)
{ console.log("its an drow!")}
else if(koalasScore>=100 && koalasScore>=100){
    console.log("yah! koalals is winner..!");
}else{
    console.log("no one can be a winner they need atlist 100 score");
}


//**************coading challange 3************* */



const bill=275;
const tip=bill>=50 && bill<=300 ? bill*0.15 : bill*0.2;
console.log(`your bill value is ${bill} , your tip value is ${tip} and the total value is ${bill+tip}.`);
