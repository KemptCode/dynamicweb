const socket = io('/') // This means your client will always be connected to your server, locally or on Heroku.

const chatBox = document.getElementById('chatBox')
const messageEl = document.getElementById('message')
const user = document.getElementById('user')
const date = new Date() // Date implementation

//This function was borrowed
// A simple function to format the time as a string
const getTime = () => {
    const d = new Date()

    // Use String.padStart to add leading zeroes
    const hours = d.getHours().toString().padStart(2, '0')
    const mins = d.getMinutes().toString().padStart(2, '0')

    // Return the time as a string
    return `${hours}:${mins}`
}

//Listens to when the server sends a new message to clients
socket.on('newMessage', data => {
    addMessage(data, false)
})

// Post message to board
const postMessage = () => {
    /***********************************
     *         YOUR CODE HERE          *
     ***********************************/
    const message = messageEl.value.trim()
    const from = user.value;
    const time = getTime()

    const data = { message, from, time }

    //Send it to the server
    socket.emit('message', data)

    // Add the message to the page
    // This "true" part will make sure the system knows it is from us
    addMessage(data, true);

    //clear the box
    messageEl.value = "";
}

// Add message from any user to chatbox, determine if added
// by current user.
const addMessage = (data = {}, user = false) => {
    /***********************************
     *         YOUR CODE HERE          *
     ***********************************/

     const newMessage = document.createElement('li');
     newMessage.classList.add('message');
     if (user) {
        newMessage.classList.add('uMessage');
     }
     newMessage.innerHTML = `${data.from} @${data.time}: ${data.message}`
     chatBox.append(newMessage);
}
