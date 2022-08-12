// Problem:1  radianToDegree

// ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। 
// তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে।
//  রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে  হবে।


function  radianToDegree(radian)
{
  if(typeof radian !=="number"){
    return "please enter a number";
  }
  let degree= radian*(180 / Math.PI);
  return degree.toFixed(2);
}
console.log( radianToDegree(199));


// Problem:2  isJavaScriptFile 

// // ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম 
// (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে 
// // । 

function isJavaScriptFile(fileName){
if (typeof fileName !='string'){
  return "please enter a string";
}
{

  const file ='index.js';
  return fileName.endsWith( '.js');
}
}
console.log(isJavaScriptFile("app.js"));



// Problem 3: oilPrice

// ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে। 


function oilPrice( disealQuntity,petrolQuantity,octenQuantity){
if(typeof disealQuntity !="number" || typeof petrolQuantity !="number" || typeof octenQuantity !="number" )
{
  return "please enter a number";
}

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

// Problem-4:
//  যদি ২৩৫ জন মানুষ পিকনিকে যায় তাহলে আমাদের বাস লাগবে ৪ টি 
//  ও মাইক্রোবাস লাগবে ৩ টি এবং বাকি মানুষ পাবলিক বাসে যাবে। 
//  এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।


function  publicBusFare(number){
if(typeof number !=="number"){
  return "please enter a number";
}

  let busCapacity = 50;
  let microCapacity = 11;
  let publicbusPrice = 250;

  let busFillup  = number % busCapacity  ;
  let microFillup = busFillup % microCapacity;
  let busvara = publicbusPrice*microFillup;
  
  return busvara ;

}

 console.log(publicBusFare(112));



// Problem 5: isBestFriend
// তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । 

function isBestFriend(friends1,friends2 )
{
  if(typeof friends1.name ==! "string" || typeof friends2.name !=="string")
  {
    return "please enter the String";
  }

    if(friends1.name==friends2.friend && friends2.name ==friends1.friend)
    {
        return true;
    }
   else{
    return false;
   }

}
let friends1={
    name:"tom", friend:"Raz"}
let friends2 = {
    name:"Raz",friend:"tom"}

console.log(isBestFriend(friends1,friends2));


