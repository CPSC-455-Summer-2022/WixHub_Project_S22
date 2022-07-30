// input for the recommendation generator is JSON body with params - 'question1', 'question2', ..., 'question8' and 'id'
const recommendationGenerator = async (input) => {

    const response = await fetch('http://wixhub-server.herokuapp.com/questions/recommendation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(input),
        mode: 'cors'
    });

    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return data;
};

const getQuestions = async () => {
    const response = await fetch('http://wixhub-server.herokuapp.com/questions', {
        method: 'GET',
        mode: 'cors'
    });
    return response.json();
};

const getQuestion = async (id) => {
    const response = await fetch('http://wixhub-server.herokuapp.com/questions/find?' + new URLSearchParams({
        id: id
    }), {
        method: 'GET',
        mode: 'cors'
    });
    return response.json();
};

const questionService = {
    recommendationGenerator,
    getQuestion,
    getQuestions
};

export default questionService;