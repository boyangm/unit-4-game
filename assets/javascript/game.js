window.onload= function (){


function newGame () {
    for (i=1 ; i<5  ; i++){
        var randomNum = Math.floor(Math.random()*10)+1;
        $('.crystalWrapper').append($('<div>',{class: 'crystal',value: randomNum})).append('<img src="https://smhttp-ssl-64693.nexcesscdn.net/media/catalog/product/cache/1/thumbnail/300x375/9df78eab33525d08d6e5fb8d27136e95/a/m/amethystpoint-energymuse.jpg">');
        
            console.log(randomNum);
    }

}
newGame();

}