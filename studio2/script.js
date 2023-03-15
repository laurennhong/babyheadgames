(function(){
    "use strict";
    console.log('js is running');

    const overlay = document.querySelector('#overlay');
    const imgBook = document.querySelector('#imageBook');
    const imgPaint = document.querySelector('#imagePaint');
    const imgShoes = document.querySelector('#imageShoes');
    const imgFlower = document.querySelector('#imageFlower');
    const imgPot = document.querySelector('#imagePot');
    const imgBass = document.querySelector('#imageBass');

    // 1. book
    document.querySelector('#book').addEventListener('click', function(event){
        document.querySelector('#overlay').className = 'showing';
        document.querySelector('#imageBook').className = 'showing';
    });

    // 2. paint
    document.querySelector('#paint').addEventListener('click', function(event){
        document.querySelector('#overlay').className = 'showing';
        document.querySelector('#imagePaint').className = 'showing';
    });

    // 3. shoes
    document.querySelector('#shoes').addEventListener('click', function(event){
        document.querySelector('#overlay').className = 'showing';
        document.querySelector('#imageShoes').className = 'showing';
    });

    // 4. flower
    document.querySelector('#flower').addEventListener('click', function(event){
        document.querySelector('#overlay').className = 'showing';
        document.querySelector('#imageFlower').className = 'showing';
    });

    // 5. pot
    document.querySelector('#pot').addEventListener('click', function(event){
        document.querySelector('#overlay').className = 'showing';
        document.querySelector('#imagePot').className = 'showing';
    });

    // 6. bass
    document.querySelector('#bass').addEventListener('click', function(event){
        document.querySelector('#overlay').className = 'showing';
        document.querySelector('#imageBass').className = 'showing';
    });

    // close overlay
    document.querySelector('.close').addEventListener('click', function(event){
      const  articlesAll = document.querySelectorAll('#overlay article');
        document.querySelector('#overlay').className = 'hidden';
        console.log("closing");
        articlesAll.forEach(element => 
            {
               element.className = 'hidden';
               console.log(element.className)
            } );
    });
})();