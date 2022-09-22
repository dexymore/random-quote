let quote =document.querySelector('.quote')
let author =document.querySelector('.author')
let butt=document.querySelector('.ranButton')




let QuotesArr=[
 {
    Rquote:" Be yourself; everyone else is already taken.",
    Rauthor:" Oscar Wilde "
},

{
    Rquote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    Rauthor:" Albert Einstein"
},
{
    Rquote:"You only live once, but if you do it right, once is enough.",
    Rauthor:" Mae West"
},


{
    Rquote:"Without music, life would be a mistake.",
    Rauthor:" Friedrich Nietzsche,"
},

{
    Rquote:"Life is what happens to us while we are making other plans.",
    Rauthor:" Allen Saunders"
},


{
    Rquote:"It is not a lack of love, but a lack of friendship that makes unhappy marriages." ,
    Rauthor:" Friedrich Nietzsche"
},

{
    Rquote:"That which does not kill us makes us stronger.",
    Rauthor:" Friedrich Nietzsche"
},

{
    Rquote:"It is never too late to be what you might have been.",
    Rauthor:" George Eliot"
},

{
    Rquote:" Everything you can imagine is real.",
    Rauthor:" Pablo Picasso"
},

]
console.log(QuotesArr.length)

butt.addEventListener('click',function(){
let random=  Math.trunc(Math.random() *9)

quote.textContent=`▶️▶️ ${QuotesArr[random].Rquote}`
author.textContent=`⚪${QuotesArr[random].Rauthor}`

})