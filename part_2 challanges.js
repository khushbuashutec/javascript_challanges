//***********challange 1********** */

const calcAverage=(score1,score2,score3)=>(score1+score2+score3)/3;

const avgDolphin=calcAverage(44,23,71);
const avgKoalal=calcAverage(165,154,149);
console.log(avgKoalal,avgDolphin);

const checkWinner=function(avgDolphins,avgKoalals){
   
    if(avgDolphins>=(2*avgKoalals))
    {
        return `Dolphins wins (${avgDolphins} vs. ${avgKoalals}) `;
    }
    else if(avgKoalals>=(2*avgDolphins))
    {
        return `Koalalas wins (${avgKoalals} vs. ${avgDolphins}) `;
    }
    else{
        return "no one is winner.!"
    }
}
console.log(checkWinner(avgDolphin,avgKoalal));