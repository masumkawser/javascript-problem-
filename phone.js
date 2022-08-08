const phones=[
    {name:'samsung',camera:12, storage:'32gb',price: 36000, color:'silver' },
    {name:'walton',camera:12, storage:'32gb',price: 16000, color:'silver' },
    {name:'oppo',camera:12, storage:'32gb',price: 46000, color:'silver' },
    {name:'xiomi',camera:12, storage:'32gb',price: 66000, color:'silver' },
    {name:'nokia',camera:12, storage:'32gb',price: 46000, color:'silver' },
    {name:'htc',camera:12, storage:'32gb',price: 46000, color:'silver' },
];
function cheapestphone(phones){
    let cheapest =phones[0];
for(let i=0;i<phones.length;i++)
{
    const phone=phones[i];
    if(phone.price <cheapest.price){
cheapest=phone;
    }
}
return cheapest;
}
const mySelection=cheapestphone(phones);
console.log(mySelection);