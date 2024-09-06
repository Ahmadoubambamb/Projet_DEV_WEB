
document.getElementById('#superman').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('#email').value;
    const password = document.getElementById('#password').value;
    if (email=="" || password=="") {
        alert('email ou mot de passe incorrect.');
    } else {
        alert(`Email : ${email}\nMot de passe : ${password}`);
        
        
    }
});
