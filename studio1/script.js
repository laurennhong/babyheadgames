(function(){
    'use strict';
    console.log('reading js');

    const form = document.querySelector('#letterform');
    const letter = document.querySelector('#letter');

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const name = document.querySelector('#name').value;
        const time = document.querySelector('#time').value;
        const adjP = document.querySelector('#adjP').value;
        const object = document.querySelector('#object').value;
        const urName = document.querySelector('#urName').value;

        let myText;

        if (name == false || time == false || adjP == false || object == false || urName == false) {
            letter.innerHTML = 'please fill in all inputs!'
        } else {
            const myText = `Dear ${name}, <br><br>
            These past few ${time} have been fun. Really… just so much fun. And don't get me wrong! I think you're a real ${adjP} person and everything. Like so sweet~ Any girl would be lucky to have you. But unfortunately for you, I'm not that girl. I'll mail back your ${object}. I know how much you love it. Don't feel too sad <3 Well anyways, the best of luck babes.
            <br><br>
            Sincerely,<br>
            ${urName}`;
            letter.innerHTML = myText;
            document.querySelector('#overlay').className = 'showing';
        }
    });

    document.querySelector('.close').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlay').className = 'hidden';
    });

    document.addEventListener('keydown', function(event){
        if(event.key === 'escape'){
            document.querySelector('#overlay').className = 'hidden';
        }
    });
})();