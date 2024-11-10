let count = 0
let countNo = document.getElementById("increament-number")
let numCounted = document.getElementById("number-counted")

function increament(){
  count += 1
  countNo.textContent = count
}

function save(){
    numCounted.textContent += count + ' - '
    count = 0
    countNo.textContent = 0
}


let cartNumber = 0
let cart = document.getElementById("cart-number")
let cartDiv = document.getElementById("cart-no-number")

function addCart(){
    cartNumber += 1
    cart.textContent = cartNumber
    console.log(cartNumber)
}

function minusCart(){
    cartNumber -= 1
    cart.textContent = cartNumber
}

function saveCart(){
    cartDiv.textContent += cartNumber + ' - '
    cartNumber = 0
    cart.textContent = 0

}
