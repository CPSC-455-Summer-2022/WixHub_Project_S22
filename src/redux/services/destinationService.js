const getDestinations = async () => {
    const response = await fetch('http://wixhub-server.herokuapp.com/destinations', {
        method: 'GET',
        mode: 'cors'
    });
    return response.json();
};

const getDestinationByDestinationID = async (id) => {
    const response = await fetch(`http://wixhub-server.herokuapp.com/destinations/destinationID/${id}`, {
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