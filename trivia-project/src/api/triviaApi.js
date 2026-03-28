const getQuestions = async () => {
    const url = 'https://opentdb.com/api.php?amount=10';
    try {
        const results = await fetch(url);
        const data = results.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}