const correctAnswers = {
    q1: "a",
    q2: "a",
    q3: "b",
    q4: "a",
    q5: "b",
    q6: "b",
    q7: "a",
    q8: "c",
    q9: "a",
    q10: "a",
    q11: "b",
    q12: "c",
    q13: "a",
    q14: "c",
    q15: "b"
};


const submitButton = document.getElementById("submit-quiz");
const resultElement = document.getElementById("quiz-result");


submitButton.addEventListener("click", function () {

    let score = 0;

    let unanswered = 0;


    for (let question in correctAnswers) {

        const selectedAnswer =
            document.querySelector(
                `input[name="${question}"]:checked`
            );


        if (!selectedAnswer) {

            unanswered++;

        } else if (
            selectedAnswer.value === correctAnswers[question]
        ) {

            score++;
        }
    }


    if (unanswered > 0) {

        resultElement.style.display = "block";

        resultElement.textContent =
            `⚠️ Please answer all 15 questions. You have ${unanswered} unanswered question(s).`;

        return;
    }


    let message;


    if (score === 15) {

        message =
            "🏆 Excellent! Perfect score! You have a strong understanding of phishing awareness.";

    } else if (score >= 12) {

        message =
            "🌟 Great job! You have a very good understanding of phishing safety.";

    } else if (score >= 8) {

        message =
            "👍 Good effort! Review the warning signs and safety tips to improve your knowledge.";

    } else {

        message =
            "📚 Keep learning! Review the phishing awareness sections and try the quiz again.";
    }


    resultElement.style.display = "block";

    resultElement.innerHTML =
        `🎉 Your Score: <strong>${score} / 15</strong><br><br>${message}`;


    resultElement.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});