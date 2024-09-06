document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Exemple simple de vérification de connexion
    if (username === 'etudiant' && password === '1234') {
        window.location.href = 'home.html';
    } else if (username === 'personnel' && password === 'admin') {
        window.location.href = 'home.html';
    } else {
        alert('Identifiants incorrects');
    }
});

document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const studentName = document.getElementById('student-name').value;
    const studentId = document.getElementById('student-id').value;
    const courseSelection = document.getElementById('course-selection').value;

    const newRegistration = document.createElement('p');
    newRegistration.textContent = `Nom: ${studentName}, ID: ${studentId}, Course: ${courseSelection}`;
    document.getElementById('groups-list').appendChild(newRegistration);
    
    alert('Inscription réussie');
});

// Fonction pour charger les groupes de TD/TP
function loadGroups() {
    // Exemple de données de groupe
    const groups = [
        {name: 'Groupe 1', course: 'Course 1'},
        {name: 'Groupe 2', course: 'Course 2'}
    ];

    let output = '';
    groups.forEach(group => {
        output += `<p>${group.name} - ${group.course}</p>`;
    });
    document.getElementById('groups-list').innerHTML = output;
}

// Fonction pour charger les inscriptions (pour le personnel pédagogique)
function loadRegistrations() {
    // Exemple de données d'inscriptions
    const registrations = [
        {student: 'Étudiant A', course: 'Course 1'},
        {student: 'Étudiant B', course: 'Course 2'}
    ];

    let output = '';
    registrations.forEach(reg => {
        output += `<p>${reg.student} - ${reg.course}</p>`;
    });
    document.getElementById('registrations-list').innerHTML = output;
}

// Charger les données après le chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    loadGroups();
    loadRegistrations();
});
