const http = require('http'); // Importation du module http de Node.js

const serveur = http.createServer((requete, resultat) => { // Création d'un serveur avec la fonction createServer du module http
    if(requete.url === '/') { // Si la requête est égale à "la page principale"
        resultat.writeHead(200, {'Content-Type' : 'text/plain; charset=utf-8'}); // Configuration de l'en-tête de réponse HTTP avec un statut 200 et un type de contenu texte avec spécification de l'encodage UTF-8 dans l'en-tête avec spécification de l'encodage UTF-8 dans l'en-tête
        resultat.end('Accueil'); // Envoi du contenu de la réponse au navigateur (dans ce cas, "Accueil")
    } else if(requete.url === '/Competences') { // Si la requête est égale à "/Competences"
        resultat.writeHead(200, {'Content-Type' : 'text/plain; charset=utf-8'}); // Configuration de l'en-tête de réponse HTTP avec un statut 200 et un type de contenu texte avec spécification de l'encodage UTF-8 dans l'en-tête avec spécification de l'encodage UTF-8 dans l'en-tête
        resultat.end('Compétence'); // Envoi du contenu de la réponse au navigateur (dans ce cas, "Compétence")
    } else {
        resultat.writeHead(404, {'Content-Type' : 'text/plain; charset=utf-8'}); // Si la requête ne correspond à aucun cas précédent, configuration de l'en-tête avec un statut 404 (page non trouvée) et un type de contenu texte avec spécification de l'encodage UTF-8 dans l'en-tête
        resultat.end('Erreur 404, page non trouvée'); // Envoi du contenu de la réponse au navigateur (dans ce cas, "Erreur 404, page non trouvée")
    }
});

serveur.listen(3000, () => { // Mise en écoute du serveur sur le port 3000, avec une fonction de rappel pour afficher un message
    console.log('Serveur en écoute sur le port 3000');
});

serveur.on('error', (erreur) => { // Gestionnaire d'erreur en cas de problème lors de la mise en écoute
    console.error('Erreur lors de la mise en écoute du serveur :', erreur.message);
});