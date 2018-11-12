function deleteItem(e){
  e.removeChild;
}

function getPriceByProduct(itemNode){ //itemNode es el elemento que le pasamos a la función, se lo pasamos de la función getTotalPrice
  var priceValue = itemNode.querySelector('.price').textContent; // cogemos valor precio del item
  var quantyValue = itemNode.querySelector('.quanty').value; // cogemos valor de la cantidad de cada item
  var price = Number(priceValue); // pasamos a número el precio
  var quanty = Number(quantyValue); // pasamos a número la cantidad
  return price * quanty; // devolvemos el valor del precio del producto * la camtidad
}

function updatePriceByProduct(productPrice, index){ // productPrice es el valor que pasamos de getToTalPrice
  var productElement = document.querySelectorAll('.item')[index]; // devolvemos el array de cada item
  var totalElement = productElement.querySelector('.total'); // cogemos el total de cada elemento
  totalElement.innerText = productPrice; // devolvemos al html el resultado
}

function getTotalPrice() {
  var totalPrice = 0; // El total parte de 0 para luego refrescar el total
  var products = document.querySelectorAll('.item'); // Buscamos cada item. Nos crea un array que recorreremos luego
  var totalSum = document.getElementById('totalSum'); // recogemos el id totalSum para luego añadir al html la suma total
  for(var index = 0; index < products.length; index++) { // recorremos cada producto
    var productElement = products[index]; // sacamos el array de cada índice
    var productPrice = getPriceByProduct(productElement); // le pasamos a la función getPriceByProduct cada producto para que calcule el precio
    updatePriceByProduct(productPrice, index); // mandamos el precio de cada producto a updatePriceByProduct
    totalPrice += productPrice; // aumentamos la suma a totalPrice
  }
  
  totalSum.innerText = totalPrice; // devolvemos al html el resultado
  return totalPrice; // retornamos la suma de todo
}

function createQuantityInput(){

}

function createDeleteButton(){
  var itemParent = document.querySelector('.item').parentNode;
  deleteItem(itemParent)


}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');


  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
