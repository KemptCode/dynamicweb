const socket = io('/') // This means your client will always be connected to your server, locally or on Heroku.

const errorContainer = document.getElementById('errMsg')
const usernameInput = document.getElementById('username')
const date = new Date()

// This was pulled in directly as a simple function 
// formats the time
const getTime = () => {
    const d = new Date()

    // Use String.padStart to add leading zeroes
    const hours = d.getHours().toString().padStart(2, '0')
    const mins = d.getMinutes().toString().padStart(2, '0')

    // Return the time as a string
    return `${hours}:${mins}`
}

// A simple async POST request function
const getData = async (url = '') => {
    const response = await fetch(url, {
        method: 'GET'
    })
    return response.json()
}

// A simple async POST request function
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response.json()
}

// Login user to access chat room.
const login = async () => {
    /***********************************
     *         YOUR CODE HERE          *
     ***********************************/
    const username = usernameInput.value;
    
    //  return ('/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({username: usernameInput.value})
    // })

    //we can reuse the code of postData
    const data = await postData('/login', {
        username
    })

    //If we get an error from the server, we display it
    if (data.error){
        errorContainer.innerHTML = data.error;
    }

    //If there are no errors, we sucessfully log in
    socket.emit('newUser', username, getTime())

    //we redirect the user to the /chat page
    window.location = '/chat'
}