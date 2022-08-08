function paperRequirements(book1Q,book2Q,book3Q)
{
    const book1 =100;
    const book2 =200;
    const book3 =300;

    const book1Paper = book1Q* book1;
    const book2Paper = book2Q* book2;
    const book3Paper = book3Q* book3;

    console.log(book1Q , book2Q ,book3Q );
    const Totalpaper=(book1Paper + book2Paper + book3Paper);
    return Totalpaper;
}

const Totalpaper=paperRequirements(10,12,20);
console.log(Totalpaper);