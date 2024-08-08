const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signUpForm = document.getElementById('signUpForm');
const signInForm = document.getElementById('signInForm');
const userProfile = document.getElementById('userProfile');
const userNameSpan = document.getElementById('userName');
const userEmailSpan = document.getElementById('userEmail');


function showForm(formId) {
    container.classList.toggle('active', formId === 'signUp');
}


signUpButton.addEventListener('click', () => showForm('signUp'));
signInButton.addEventListener('click', () => showForm('signIn'));

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signUpName').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;

    
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    
    showForm('signIn');
});


signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
        
        document.getElementById('container').style.display = 'none';
        userProfile.style.display = 'block';
        userNameSpan.textContent = localStorage.getItem('userName');
        userEmailSpan.textContent = storedEmail;
    } else {
        alert('Invalid email or password');
    }
});
