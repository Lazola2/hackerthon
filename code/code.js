// declare an empty array of subscribed users
const users = [
    {
        id: 1,
        username: 'Laz123',
        password: 'password123',
        name: 'Lazola'
    },
    {
        id: 2,
        username: 'Imraan123',
        password: 'password123',
        name: 'Imraan'
    }

];

// sending the users to the localStorage
localStorage.setItem('users', JSON.stringify(users));

// login button
const btnLogin = document.querySelector('.log-in-button');

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    
    // get username and password
    const username = document.querySelector('.username').value;
    const password = document.querySelector('.password').value;
    
    users.forEach(user => {
        if(user.username === username && user.password === password){
            let selectedUser = {
                userId: user.id
            }
            localStorage.setItem('selectedUser', JSON.stringify(selectedUser))
            window.open('../html/app.html', '_blank');
            return;
        }
        console.log('User not found');
    })
});


