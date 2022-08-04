const addUser = async (user) => {

    const response = await fetch('https://wixhub-server.herokuapp.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
        mode: 'cors'
    });

    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return data;
};

const getUsers = async () => {
    const response = await fetch('https://wixhub-server.herokuapp.com/users', {
        method: 'GET',
        mode: 'cors'
    });
    return response.json();
};

const getUser = async (id) => {
    const response = await fetch(`https://wixhub-server.herokuapp.com/users/${id}`, {
        method: 'GET',
        mode: 'cors'
    });
    return response.json();
};

const deleteUser = async (id) => {
    const response = await fetch('https://wixhub-server.herokuapp.com/users/delete?' + new URLSearchParams({
        id: id
    }), {
        method: 'DELETE',
        mode: 'cors'
    });
    return response.json();
};

const deleteAllUsers = async () => {
    const response = await fetch('https://wixhub-server.herokuapp.com/users/deleteAll', {
        method: 'DELETE',
        mode: 'cors'
    });
    return response.json();
};

const editUser = async (id, toBeUpdated) => {

    const response = await fetch(`https://wixhub-server.herokuapp.com/users/edit/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(toBeUpdated),
        mode: 'cors'
    });

    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return data;
};

const loginUser = async (emailPass) => {
    const response = await fetch(`https://wixhub-server.herokuapp.com/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailPass),
        mode: 'cors'
    });
    const data = await response.json();
    return data;
};

const functions = {
    addUser,
    getUsers,
    getUser,
    deleteUser,
    deleteAllUsers,
    editUser,
    loginUser
};

export default functions;