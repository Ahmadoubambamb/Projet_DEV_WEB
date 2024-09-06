document.getElementById('inscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission du formulaire

    // Récupération des valeurs des champs
    const nom = document.getElementById('nom').value.trim();
    const prenom = document.getElementById('prenom').value.trim();
    const code = document.getElementById('code').value.trim();
    const mail = document.getElementById('mail').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm_password').value.trim();

    // Validation des champs vides
    if (nom === "" || prenom === "" || code === "" || mail === "" || password === "" || confirmPassword === "") {
        alert('Veillez remplir tous les champs.');
        return;
    }

    // Validation de l'email
    if (!mail.endsWith('@ugb.edu.sn')) {
        alert('L\'adresse email doit se terminer par @ugb.edu.sn.');
        return;
    }

    // Validation de la force du mot de passe
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(password)) {
        alert('Le mot de passe doit contenir au moins 8 caractères, dont une majuscule, une minuscule, et un chiffre.');
        return;
    }

    // Validation de la correspondance des mots de passe
    if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas.');
        return;
    }

    //  soumettre le formulaire
    alert('Inscription réussie!');
    window.location.href = 'pageAccueil.htm'; // Redirection vers la page d'accueil
});
