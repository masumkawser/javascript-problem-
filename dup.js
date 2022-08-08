
const names=['abul','babul','cabul','babul','cabul'];

function removeDup(names){

    const unique = [];
    for(let i=0;i<names.length;i++)
    {
        const name=names[i];
       if (unique.includes(name)===false)
       {
        unique.push(name);
       }
       
    }
   return unique;
}

const uniqueNames=removeDup(names);
console.log(uniqueNames);