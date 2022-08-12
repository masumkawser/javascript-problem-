// function feettoInch(number)
// {
//   var inch=number*12;
//   return inch;
// }
// console.log(  feettoInch(5));



function  radianToDegree(radian)
{
  let degree= radian*(180 / Math.PI);
  return degree.toFixed(2);
}
console.log( radianToDegree(199));


function isJavaScriptFile(fileName)
{

  const file ='index.js';
  return fileName.endsWith( '.js');
}
console.log(isJavaScriptFile("masum.pdf.js"));

function  publicBusFare(number)
{
  let busCapacity = 50;
  let microCapacity = 11;
  let publicbusPrice = 250;

  let busFillup  = number % busCapacity  ;
  let microFillup = busFillup % microCapacity;
  let busvara = publicbusPrice*microFillup;
  
  return busvara ;

}

console.log(publicBusFare(112));


function isBestFriend(object1,object2 ){

    if(object1.name==object2.friend && object2.name ==object1.friend)
    {
        return true;
    }
   else{
    return false;
   }
}

let object1={
    name:"tom", friend:"jahid"
}
let object2 = {
    name:"Raz",friend:"tom"
}

console.log(isBestFriend(object1,object2));