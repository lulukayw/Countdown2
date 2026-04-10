export const getQuestions = async () => {
    const url = "https://the-trivia-api.com/v2/questions";
    try {
        const results = await fetch(`${url}?limit=10`);
        const data = await results.json();
        // console.log(data);
        return data.map((item) => ({
            question: item.question.text,
            correctAnswer: item.correctAnswer,
            incorrectAnswers: item.incorrectAnswers,
        }));
    } catch (error) {
        console.log(error);
        return [];
    }
};

// getQuestions().then(data => console.log(data));