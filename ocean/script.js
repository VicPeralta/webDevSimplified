

const moneyElem=document.querySelector('.money');
const currencyFormatter= new Intl.NumberFormat('en-us',{
    style:"currency",
    currency:'USD',
    maximumFractionDigits:0,
});

getAmountRaised();


async function getAmountRaised(){
    const amountRaised= 
        await fetch('https://tscache.com/donation_total.json').then(res=> res.json()).then(data=>data.count);
        moneyElem.innerText=currencyFormatter.format(amountRaised);
}