const heading1="To my Dear Inspiration";
const head=document.getElementById("heading");
let start=0;
function headingtext(){
    head.innerText=heading1.slice(0,start);
    start++;
}
setInterval(headingtext,100);





const heading2="Dear Mom :☻";
const head2=document.getElementById("texthead");
let start2=0;
function headingtext2(){
    head2.innerText=heading2.slice(0,start2);
    start2++;
}
setInterval(headingtext2,400);



const heading3=`Show your mom how much you value her love and strength with one of these beautiful quotes. She cares for you and the family day-in and day-out so make sure she knows everyone cares for her too. Pair your favorite quote with a bouquet of flowers or a sweet letter and remind her how much you care. These quotes will also look great on a personalized picture frame with a photo of the entire family – she’ll be touched and enjoy displaying the photo inside the house!Sometimes all a mom needs is a little inspiration. Tell her she means the world to you with an encouraging saying. These inspirational Mother’s Day quotes will look great on home accents she can use around the house to always remind her what’s important in life. These Mother’s Day quotes are about what she means to the family in teaching, helping, and encouraging everyone from day to day`;
const head3=document.getElementById("ful-letter");
let start3=0;
function headingtext3(){
    head3.innerText=heading3.slice(0,start3);
    start3++;
}
setInterval(headingtext3,80);
