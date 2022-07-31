const getDestinations = async () => {
    const response = await fetch('http://wixhub-server.herokuapp.com/destinations', {
        method: 'GET',
        mode: 'cors'
    });
    return response.json();
};

const getDestinationByDestinationID = async (id) => {
    const response = await fetch('http://wixhub-server.herokuapp.com/destinations/destinationID/find?' + new URLSearchParams({
        id: id
    }), {
        method: 'GET',
        mode: 'cors'
    });
    return response.json();
};

const functions = {
    getDestinationByDestinationID,
    getDestinations
}

export default functions;