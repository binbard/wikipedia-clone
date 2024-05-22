const dark = document.querySelector(".dark");
dark.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-theme");
    document.querySelectorAll("p,.txt,.lnk").forEach((p) => {
        p.classList.toggle("dark-theme");
    });
});




var handleLogin = function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    fetch('./assets/credentials.json')
        .then(response => response.json())
        .then(data => {
            const user = data.users.find(user => user.username === username && user.password === password);
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
                window.location.href = './';
            } else {
                errorMessage.textContent = 'Invalid username or password';
                errorMessage.style.display = 'block';
            }
        })
        .catch(error => {
            console.error('Error fetching auth.json:', error);
            errorMessage.textContent = 'An error occurred. Please try again later.';
            errorMessage.style.display = 'block';
        });
};


var form = document.getElementById("login-form");

form.addEventListener("submit", handleLogin, true);



/*** ALREADY LOGGED IN CASE ***/

function checkIfLoggedIn() {
    const userData = localStorage.getItem('user');
    if (userData) {
        const user = JSON.parse(userData);
        const fieldAlreadyLoggedIn = document.getElementById('already-logged-in');
        const iusername = document.getElementById('logged-in-username');
        const fieldOnboard = document.getElementById('onboard');

        fieldOnboard.setAttribute('hidden', true);

        iusername.textContent = user.username;
        fieldAlreadyLoggedIn.removeAttribute('hidden');
    }
}

checkIfLoggedIn();


function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem('user');
    window.location.reload();
}

const logoutButton = document.getElementById('logoutButton');
logoutButton.addEventListener('click', handleLogout);