const loginUser = async (emailPass) => {
    const response = await fetch(`http://wixhub-server.herokuapp.com/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailPass),
        mode: 'cors'
    });
    const data = await response.json();
    return data;
};

const userService = {
    loginUser
}

export default userService;