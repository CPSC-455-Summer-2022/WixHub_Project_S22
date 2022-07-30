const getDestinations = async () => {
    const response = await fetch('http://wixhub-server.herokuapp.com/destinations', {
        method: 'GET',
        mode: 'cors'
    });
    return response.json();
};

const getDestination = async (id) => {
    const response = await fetch('http://wixhub-server.herokuapp.com/destinations/find?' + new URLSearchParams({
        id: id
    }), {
        method: 'GET',
        mode: 'cors'
    });
    return response.json();
};

const destinationService = {
    getDestination,
    getDestinations
};

export default destinationService;