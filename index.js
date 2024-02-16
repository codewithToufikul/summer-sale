const card = document.querySelectorAll('.card')
let numberSerial = 1;
let totalPriceList = 0;
for (let index = 0; index < card.length; index++) {
    const element = card[index];
    element.addEventListener('click', function(){

        const titleContainer = document.getElementById('title-container');
        const p = document.createElement('p');
        
        const title = element.querySelector("h3").innerText;
        const productTitle = numberSerial + ' ' + title;
        const pText = p.innerText = productTitle;
        
        titleContainer.appendChild(p)
        numberSerial ++;

        const cardPrice = element.querySelector('span').innerText.split(" ")[1];
        const price = parseFloat(cardPrice);
        const displayPrice = totalPriceList + price;
        const totalPrice = document.getElementById('totalPrice');

        totalPriceList += price;
        totalPrice.innerText = totalPriceList;

    })
    
}

const inputFild = document.getElementById('input-field').value;
console.log(inputFild);




document.getElementById('apply-btn').addEventListener('click', function applyBtn(){
    const inputFild = document.getElementById('input-field').value;
    const totalPricee = document.getElementById('totalPrice').innerText;
    const totalPrice = parseInt(totalPricee);
    

    if ( inputFild === 'sell200'){
        if ( totalPrice >= 200){
            const discountPrice = totalPrice * 0.2
            const displayFDiscountPrice =document.getElementById('discountPrice');
            const applyDiscount = displayFDiscountPrice.innerText = discountPrice.toFixed(2);
            const totalDiscountPrice = totalPrice - applyDiscount;
            const total = document.getElementById('total');
            total.innerText = totalDiscountPrice.toFixed();
            document.getElementById('input-field').value = " ";

        }
        else{
            alert('Sorry you are not eligible to discount!')
            
        }
    }
    else{
        alert()
        document.getElementById('input-field').value = " ";
    }
})

if (totalPricee <= 0){
    
}
// function showModal(){
//     console.log('click');
// }