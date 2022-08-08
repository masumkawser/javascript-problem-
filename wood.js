
function woodCalculator(chaiQuantity,tableQuantity,bedQuantity){
 const  perChairwood =3;
 const  perTablewood =10;
 const  perBedwood =50 ;
const chairwood=chaiQuantity*perChairwood ;
const tablewood=tableQuantity* perTablewood;
const bedwood=bedQuantity* perBedwood ;

 console.log(chaiQuantity,tableQuantity,bedQuantity);
 const totalWood = chairwood + tablewood + bedwood;
 return totalWood ;

}

const totalWood=woodCalculator(2,2,5);
console.log(totalWood );