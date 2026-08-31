 let score = JSON.parse(localStorage.getItem('score')) || {
            wins:0,
            losses:0,
            ties:0
        };

        updateScoreElement();
/*
        if(!score)
    {
        score ={
            wins:0,
            losses:0,
            ties:0
        };
    }*/
         

        function playGame(playerMove) {

            const computermove = pickComputermove();
            let result = '';

            if (playerMove === 'rock') {

                if (computermove === 'rock') {
                    result = 'tie';
                }
                else if (computermove === 'paper') {
                    result = 'you lose';
                }
                else if (computermove === 'scissors') {
                    result = 'you win';
                }

            }

            else if (playerMove === 'paper') {

                if (computermove === 'paper') {
                    result = 'tie';
                }
                else if (computermove === 'scissors') {
                    result = 'you lose';
                }
                else if (computermove === 'rock') {
                    result = 'you win';
                }

            }

            else if (playerMove === 'scissors') {

                if (computermove === 'scissors') {
                    result = 'tie';
                }
                else if (computermove === 'rock') {
                    result = 'you lose';
                }
                else if (computermove === 'paper') {
                    result = 'you win';
                }

            }
            if(result === 'you win')
            {
                score.wins +=1;
            }
            else if (result ==='you lose')
            {
                score.losses +=1;
            }
            else if (result === 'tie'  )
            {
                score.ties +=1;
            }

            localStorage.setItem('score' , JSON.stringify(score));

            document.querySelector('.js-score')
        .innerHTML=`wins:${score.wins} losses:${score.losses} tie:${score.ties}`;
            updateScoreElement();

            document.querySelector('.js-result').innerHTML= 'result';

            document.querySelector('.js-moves').innerHTML = `You ${playerMove} -${computermove} Computer `;
 
        

        }

        function updateScoreElement()
        {
            document.querySelector('.js-score')
        .innerHTML=`wins:${score.wins} losses:${score.losses} tie:${score.ties}`;
        }


        function pickComputermove() {

            const randomnumber = Math.random();
            let computermove = '';

            if (randomnumber < 1 / 3) {
                computermove = 'rock';
            }
            else if (randomnumber < 2 / 3) {
                computermove = 'paper';
            }
            else {
                computermove = 'scissors';
            }

            return computermove;
        }