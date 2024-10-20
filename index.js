const correctAnswers = {
    q1: 'c',
    q2: 'a',
    q3: 'b',
    q4: 'c',
    q5: 'a'
};

const button = document.querySelector('button');
const result = document.getElementById('result');
const resultScore = document.getElementById('resultScore');
const formQuiz = document.getElementById('quizForm');

formQuiz.addEventListener('submit', (e) => {
    e.preventDefault()
    let score = 0;

    Object.keys(correctAnswers).forEach((question) => {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if(userAnswer) {

            const label = userAnswer.nextElementSibling;

            if (userAnswer.value === correctAnswers[question]) {
                score++
                label.classList.add('correct')
            } else {
                label.classList.add('incorrect')
            }
        }

     
    })
    // const selectedOption1 = document.querySelector('input[name="q1"]:checked')
    // const selectedOption2 = document.querySelector('input[name="q2"]:checked')
    // const selectedOption3 = document.querySelector('input[name="q3"]:checked')
    // const selectedOption4 = document.querySelector('input[name="q4"]:checked')


    // let resultMessage = '';
    // let total = 4;
    
    // if (selectedOption1 && selectedOption1.value === correctAnswers.q1) {
    //     resultMessage += `Question 1: Correct!<br>`
    //     score++;

    // } else {
    //     resultMessage += `Question 1: Try again.<br>`

    // }
    // if (selectedOption2 && selectedOption2.value === correctAnswers.q2) {
    //     resultMessage += `Question 2: Correct!<br>`
    //     score++;
        
    // } else {
    //     resultMessage += `Question 2: Try again.<br>`
        
    // }
    // if (selectedOption3 && selectedOption3.value === correctAnswers.q3) {
    //     resultMessage += `Question 3: Correct!<br>`
    //     score++;
        
    // } else {
    //     resultMessage += `Question 3: Try again.<br>`

    // }
    // if (selectedOption4 && selectedOption4.value === correctAnswers.q4) {
    //     resultMessage += `Question 4: Correct!<br>`
    //     score++;
    
    // } else {
        //     resultMessage += `Question 4: Try again.<br>`
        
        // }
        
        
        // resultScore.textContent = `${getScore}%`
        const getScore = (score / Object.keys(correctAnswers).length) * 100;
        result.textContent = `You scored ${score} out of ${Object.keys(correctAnswers).length} ${getScore}%`;
        resultScore.textContent = `You scored ${score} out of ${Object.keys(correctAnswers).length} ${getScore}%`;
        animateScore(0, getScore, 2000);
    });

    function animateScore(start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            resultScore.innerHTML = `Score: ${Math.floor(progress * (end - start) + start)}%`;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }