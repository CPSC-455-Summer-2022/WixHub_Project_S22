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

const editUser = async (arg) => {
    const { id, toBeUpdated } = arg // createAsyncThunk only accepts one argument,
                                    // therefore must send and destructure an object of the multiple arguments
    const response = await fetch(`https://wixhub-server.herokuapp.com/users/edit/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(toBeUpdated),
        mode: 'cors'
    });

    if (!response.ok) {
        const errorMsg = await response.text()
        throw new Error(errorMsg)
    }

    const data = await response.json();
    return data;
};

const loginUser = async (emailPass) => { ///!!!TODOREDFLAG
    const response = await fetch(`https://wixhub-server.herokuapp.com/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailPass),
        mode: 'cors'
    });
    const data = await response.json();
    return data;
};

const logoutUser = async () => {
    localStorage.removeItem('persistLogin');
    console.log("logged out and cleared object");
};

const deleteUserDestination = async (arg) => {
    const { id, toBeDeleted } = arg // createAsyncThunk only accepts one argument,
    // therefore must send and destructure an object of the multiple arguments
    const response = await fetch(`https://wixhub-server.herokuapp.com/users/deleteUserDestination/${id}?` + new URLSearchParams({
        destinationToDelete: toBeDeleted
    }), {
    method: 'PATCH',
    headers: {
    'Content-Type': 'application/json'
    },
    mode: 'cors'
    });

    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return data;
}

const functions = {
    addUser,
    getUsers,
    getUser,
    deleteUser,
    deleteAllUsers,
    editUser,
    loginUser,
    logoutUser,
    deleteUserDestination
};

export default functions;