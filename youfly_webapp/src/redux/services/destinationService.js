const getDestinations = async () => {
    const response = await fetch('http://localhost:3001/destinations', {
        method: 'GET',
        mode: 'cors'
    });
    return response.json();
};

const getDestination = async (id) => {
    const response = await fetch('http://localhost:3001/destinations/find?' + new URLSearchParams({
        id: id
    }), {
        method: 'GET',
        mode: 'cors'
    });
    return response.json();
};

export default {
    getDestination,
    getDestinations
};