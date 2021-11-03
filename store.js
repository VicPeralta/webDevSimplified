
window.addEventListener('load', registerListeners);

function registerListeners() {
    let removeButtons = document.getElementsByClassName('cart-button-remove');
    for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener('click', removeItem);
    }
    let inputElement=document.getElementsByClassName('cart-input-quantity')[0];
    inputElement.addEventListener('input',validateQty);
    let addItemButtons=document.getElementsByClassName('item-button');
    for (let i = 0; i < addItemButtons.length; i++) {
        addItemButtons[i].addEventListener('click', addItem);
    }
}
function addItem(item){
    let button=item.target;
    let parent=button.parentElement;
    let parentparent=parent.parentElement;
    let itemPrice=parent.getElementsByClassName('item-price')[0].innerText;
    let itemName=parentparent.getElementsByClassName('item-name')[0].innerText;
    let itemImage=parentparent.getElementsByClassName('item-image')[0].src;
    let itemNames=document.getElementsByClassName('item-cart-name');
    for(let i=0;i<itemNames.length;i++){
        if(itemName===itemNames[i].innerText){
            alert("This item has already been added to the cart");
            return;
        }
    }
    let itemList=document.getElementsByClassName('cart-item-list')[0];
    
    let elementToAdd=`
                <div class="cart-column cart-column-item">
                    <img class="image-cart " src="${itemImage}">
                    <span class="item-cart-name">${itemName}</span>
                </div>
                <span class="cart-column cart-column-price item-cart-price">${itemPrice}</span>
                <div class="cart-column cart-column-quantity">
                    <input class="cart-input-quantity" type="number" value="1">
                    <button class="primary-button cart-button-remove">REMOVE</button>
                </div>
    `;
    let cartRow=document.createElement('div');
    cartRow.classList.add('cart-row');
    cartRow.innerHTML=elementToAdd;
    
    itemList.append(cartRow);
    let newItem=cartRow.getElementsByClassName('cart-button-remove')[0];
    newItem.addEventListener('click', removeItem);
    let newItemInput=cartRow.getElementsByClassName('cart-input-quantity')[0];
    newItemInput.addEventListener('input', validateQty);
    updateCartTotal();
}
function validateQty(input){
    value=input.target.value;
    if(value<=0){
        input.target.value=1;
    }
    updateCartTotal();
}
function removeItem(item) {
    let button = item.target;
    let itemToDelete = button.parentElement.parentElement;
    itemToDelete.remove();
    updateCartTotal();
}
function updateCartTotal() {
    let cartItems=document.getElementsByClassName('cart-item-list')[0];
    let itemLists = cartItems.getElementsByClassName("cart-row");
    let totalPrice = 0;
    for (let i = 0; i < itemLists.length; i++) {
        let priceColumn = itemLists[i].getElementsByClassName("item-cart-price")[0];
        if (!priceColumn) continue;
        let qty = itemLists[i].getElementsByClassName("cart-input-quantity")[0].value;
        let price = priceColumn.innerText;
        let p = price.replace('$', '');
        totalPrice = totalPrice + (qty * p);
    }
    const options = { style: 'currency', currency: 'USD' };
    const numberFormat = new Intl.NumberFormat('en-US', options);
    document.getElementsByClassName('cart-total-price')[0].innerText=numberFormat.format(totalPrice);
}
