
// function woodCalculator(chaiQuantity,tableQuantity,bedQuantity){
//  const  perChairwood =3;
//  const  perTablewood =10;
//  const  perBedwood =50 ;
// const chairwood=chaiQuantity*perChairwood ;
// const tablewood=tableQuantity* perTablewood;
// const bedwood=bedQuantity* perBedwood ;

//  console.log(chaiQuantity,tableQuantity,bedQuantity);
//  const totalWood = chairwood + tablewood + bedwood;
//  return totalWood ;

// }

// const totalWood=woodCalculator(2,2,5);
// console.log(totalWood );




function oilPrice( disealQuntity,petrolQuantity,octenQuantity){
    const diseal =114;
    const petrol=130;
    const octen=135;

    const disealReq=disealQuntity*diseal;
    const petrolReq=petrolQuantity*petrol;
    const octenReq=octenQuantity*octen;
    console.log(disealQuntity,petrolQuantity,octenQuantity);
    const totalReqOil = (disealReq+petrolReq+octenReq);

    return totalReqOil;
}
const totalReqOil= oilPrice(1 ,1,1);
console.log(totalReqOil);