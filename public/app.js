const CreateUser = document.querySelector('.CreateUser')
Create.User.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = CreateUser.querySelector('.username').value 
    const password = CreateUSer.querySelector ('.password').value 
    post('/createUser', {username, password})
})

function post (path, data) {
    return window.fetch(path, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}