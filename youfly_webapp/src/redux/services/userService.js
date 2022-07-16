const addUser = async (user) => {

    const response = await fetch('http://localhost:3001/users', {
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
    const response = await fetch('http://localhost:3001/users', {
        method: 'GET',
        mode: 'cors'
    });
    return response.json();
};

const getUser = async (id) => {
    const response = await fetch(`http://localhost:3001/users/${id}`, {
        method: 'GET',
        mode: 'cors'
    });
    return response.json();
};

const deleteUser = async (id) => {
    const response = await fetch('http://localhost:3001/users/delete?' + new URLSearchParams({
        id: id
    }), {
        method: 'DELETE',
        mode: 'cors'
    });
    return response.json();
};

const deleteAllUsers = async () => {
    const response = await fetch('http://localhost:3001/users/deleteAll', {
        method: 'DELETE',
        mode: 'cors'
    });
    return response.json();
};

const editUser = async (user) => {

    const response = await fetch('http://localhost:3001/users/edit', {
        method: 'PUT',
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

export default {
    addUser,
    getUsers,
    getUser,
    deleteUser,
    deleteAllUsers,
    editUser
};