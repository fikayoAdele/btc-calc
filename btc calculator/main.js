
let exchangeRate = 23360872;
let btcField = document.querySelector('#btcForm')
let ngnField = document.querySelector('#ngnForm')

const button = document.querySelector('#con2n');
button.addEventListener('click',function(e){
    e.preventDefault()
    let nairaValue = exchangeRate * btcField.value
    ngnField.value = nairaValue;
})

const btcbutton = document.querySelector('#con2btc');
btcbutton.addEventListener('click',function(e){
    e.preventDefault()
    let btcValue = ngnField.value / exchangeRate    
    btcField.value = btcValue;
})

// clear fields
const cbutton = document.querySelector('#clearF');  
  cbutton.addEventListener('click',function(e){
      e.preventDefault();
    btcField.value = "";
    ngnField.value = "";
})

const backgroundImages = [
'images/btc1.jpg',
'images/btc2.jpg',
'images/btc3.jpg',
'images/btc4.jpg',
'images/btc5.jpg',
'images/btc6.jpg',
'images/btc7.jpg',
'images/btc8.jpg',
'images/btc9.jpg',
'images/btc10.jpg',
'images/btc11.jpg',
'images/btc12.jpg',
'images/btc13.jpg',
'images/btc14.jpg',
'images/btc15.jpg'
]

function randomImg(){
    return backgroundImages[Math.floor(Math.random() * backgroundImages.length) ];
}


function changeBackground() {   
        const pBody = document.querySelector('body')
        let rimages = randomImg();
        pBody.style.background ="url(" + rimages + ")"
        pBody.style.backgroundAttachment = "fixed";
        pBody.style.backgroundRepeat = "no-repeat";
        pBody.style.backgroundSize = "100%100%";
 }

 function startBackgroundChange(){
     setInterval("changeBackground()",10000);
 }

 window.onload = startBackgroundChange()