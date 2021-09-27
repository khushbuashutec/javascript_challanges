//***********challange 1********** */

// const calcAverage=(score1,score2,score3)=>(score1+score2+score3)/3;

// const avgDolphin=calcAverage(44,23,71);
// const avgKoalal=calcAverage(165,154,149);
// console.log(avgKoalal,avgDolphin);

// const checkWinner=function(avgDolphins,avgKoalals){
   
//     if(avgDolphins>=(2*avgKoalals))
//     {
//         return `Dolphins wins (${avgDolphins} vs. ${avgKoalals}) `;
//     }
//     else if(avgKoalals>=(2*avgDolphins))
//     {
//         return `Koalalas wins (${avgKoalals} vs. ${avgDolphins}) `;
//     }
//     else{
//         return "no one is winner.!"
//     }
// }
// console.log(checkWinner(avgDolphin,avgKoalal));

// //***********challange 2********** */

// const bill=[125,555,44];
// const tip=[];
// const calcTip=function (billValue){
//     // const billvalue=bill[0];
//     if(billValue>=50 && billValue<=300){
//           return tip.push(billValue*0.15);
//     }
//     else{
//         return tip.push(billValue*0.2)
//     }

// }
// console.log(calcTip(bill[0]));
// console.log(`your bill is ${bill[0]} , your tipvalue is ${tip} and totalvalue is ${bill[0]+tip[0]}`);


// //***********extra challange ********** */

// const a=[1,2,3,7,6,4,9];
// const b=['2','3','4','6','8'];
// let i,j;
// const d=[];
// const c=[4,15,8,6];
// const check=function(data)
// {
//     if(c.includes(data)==true)
//     {
//         console.log(data);
//         d.push(data);
//         const x=c.indexOf(data);
//         console.log(x);
//         c.splice(x,1);
        
//     }
    
// }
// for(i=0;i<=a.length-1;i++)
// {
    
//     for(j=0;j<=b.length-1;j++)
//     {
//         if(a[i]==b[j])
//         {
//             console.log("test");
//            check(a[i]);
//         }
//     }

// }

// console.log("array c:",c);
// console.log("array d:" ,d);


//***********challange 3********** */


// const john={
//     fullName:'john smith',
//     mass: 78,
//     height:1.69,
//     calcBmi:function(){
//         return this.mass/this.height**2;
//     }
// }

// const mark={
//     fullName:'mark miller',
//     mass: 92,
//     height:1.95,
//     calcBmi:function(){
//         return this.mass/this.height**2;
//     }
// }
// if(john.calcBmi()>mark.calcBmi()){
//     console.log(`${john.fullName}'s BMI ${john.calcBmi()} is Higher than ${mark.fullName} ${mark.calcBmi()}!`);
// }
// else{
//     console.log(`${mark.fullName}'s BMI ${mark.calcBmi()} is Higher than ${john.fullName} ${john.calcBmi()}!`);
// }

//***********challange 3********** */

const bills=[22,295,176,440,37,105,10,1100,86,52];
const tips=[];
const total=[];
const calcTip=function (billValue){
    if(billValue>=50 && billValue<=300){
          return billValue*0.15;
    }
    else{
        return billValue*0.2;
    }  
}


for(let i=0; i<=bills.length-1 ; i++){
    
        tips.push(calcTip(bills[i]));
        total.push(bills[i]+tips[i]);
}
    

console.log(tips);
console.log(total);

const calcAverage=function(arr){
    let sum=0;
        for(let i=0 ;i<=arr.length-1;i++){

            sum+=arr[i];
        }
          return sum/arr.length;
        }


console.log(`average is: ${calcAverage(total)}`);


// //***********extra challange ********** */


