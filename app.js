document.getElementById('pizza-1').addEventListener('click', function(){
    // pizza price 
    const pizza1Price = document.getElementById('pizza-1-price');
    const pizza1Number = pizza1Price.innerText;
    const pizza1Int = parseInt(pizza1Number);

    // shopping shoppingTotalPrice  
    const shoppingTotalPrice = document.getElementById('shoppingTotalPrice');
    const shoppingTotalPriceNumber = shoppingTotalPrice.innerHTML;
    let shoppingTotalPriceInt = parseInt(shoppingTotalPriceNumber);

    // shopping count Number  
   const shoppingNumber = document.getElementById('shoppingNumber');
   const shoppingNumbertext = shoppingNumber.innerText;
   const shoppingNumberInt = parseInt(shoppingNumbertext);

   shoppingNumber.innerText = shoppingNumberInt + 1;


    // shopping Items Number  
   const items = document.getElementById('Items');
   const itemsNumber = items.innerHTML;
   const itemsInt = parseInt(itemsNumber) ;

   items.innerText = itemsInt + 1;
   



    shoppingTotalPrice.innerText = pizza1Int + shoppingTotalPriceInt;

});

document.getElementById('pizza-2').addEventListener('click', function(){
    const pizza2Price = document.getElementById('pizza-2-price');
    const pizza2Number = pizza2Price.innerText;
    const pizza2Int = parseInt(pizza2Number);

    const shoppingTotalPrice = document.getElementById('shoppingTotalPrice');
    const shoppingTotalPriceNumber = shoppingTotalPrice.innerHTML;
    let shoppingTotalPriceInt = parseInt(shoppingTotalPriceNumber);

    const items = document.getElementById('Items');
    const itemsNumber = items.innerHTML;
    const itemsInt = parseInt(itemsNumber) ;
 
    items.innerText = itemsInt + 1;

    const shoppingNumber = document.getElementById('shoppingNumber');
    const shoppingNumbertext = shoppingNumber.innerText;
    const shoppingNumberInt = parseInt(shoppingNumbertext);
 
    shoppingNumber.innerText = shoppingNumberInt + 1;

    shoppingTotalPrice.innerText = pizza2Int + shoppingTotalPriceInt;

})

document.getElementById('pizza-3').addEventListener('click', function(){
    const pizza2Price = document.getElementById('pizza-3-price');
    const pizza2Number = pizza2Price.innerText;
    const pizza2Int = parseInt(pizza2Number);

    const shoppingTotalPrice = document.getElementById('shoppingTotalPrice');
    const shoppingTotalPriceNumber = shoppingTotalPrice.innerHTML;
    let shoppingTotalPriceInt = parseInt(shoppingTotalPriceNumber);

    const items = document.getElementById('Items');
    const itemsNumber = items.innerHTML;
    const itemsInt = parseInt(itemsNumber) ;
 
    items.innerText = itemsInt + 1;

    const shoppingNumber = document.getElementById('shoppingNumber');
    const shoppingNumbertext = shoppingNumber.innerText;
    const shoppingNumberInt = parseInt(shoppingNumbertext);
 
    shoppingNumber.innerText = shoppingNumberInt + 1;

    shoppingTotalPrice.innerText = pizza2Int + shoppingTotalPriceInt;

})