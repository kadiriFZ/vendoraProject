//java script for formulaire

// Fonction pour vérifier si tous les champs sont remplis
function validerCommande() {
    const nom = document.getElementById("nom").value.trim();
    const adresse = document.getElementById("adresse").value.trim();
    const codePostal = document.getElementById("codePostal").value.trim();
    const telephone = document.getElementById("telephone").value.trim();
    const quantity = document.getElementById("quantity").value.trim();
    
    let message = ""; // Message d'erreur
  
    // Vérifications des champs
    if (!nom) {
      message += "- Veuillez remplir le champ 'Nom et prénom'.\n";
    }
    if (!adresse) {
      message += "- Veuillez remplir le champ 'Adresse'.\n";
    }
    if (!codePostal || codePostal.length !== 5) {
      message += "- Veuillez entrer un Code Postal valide (5 chiffres).\n";
    }
    if (!telephone || telephone.length !== 10) {
      message += "- Veuillez entrer un Numéro de Téléphone valide (10 chiffres).\n";
    }
    if (!quantity || quantity <= 0) {
      message += "- Veuillez entrer une Quantité valide.\n";
    }
  
    // Afficher le message approprié
    if (message) {
      alert(message); // Affiche les erreurs si des champs sont invalides
    } else {
      alert("Commande validée !"); // Si tout est correct
    }
  
  
  // Afficher le message approprié
  if (message) {
    alert(message); // Affiche les erreurs si des champs sont invalides
  } else {
    alert("Commande validée !"); // Si tout est correct
  }
  }
  
  // Validation en temps réel pour autoriser uniquement les nombres
  function autoriserNombresSeulement(input) {
    input.addEventListener("input", function () {
      input.value = input.value.replace(/[^0-9]/g, ""); // Supprime tous les caractères non numériques
    });
  }
  
  // Limiter la longueur des champs si nécessaire
  function limiterLongueur(input, maxLength) {
    input.addEventListener("input", function () {
      if (input.value.length > maxLength) {
        input.value = input.value.slice(0, maxLength); // Limite à maxLength caractères
      }
    });
  }
  
  
  
  
  
  
  
  
   
  // Appliquer les validations pour le champ Numéro de Téléphone
  const champTelephone = document.getElementById("telephone");
  autoriserNombresSeulement(champTelephone);
  limiterLongueur(champTelephone, 10); // Limite à 10 chiffres
  
  // Appliquer les validations pour le champ Code Postal (5 chiffres)
  const champCodePostal = document.getElementById("codePostal");
  autoriserNombresSeulement(champCodePostal);
  limiterLongueur(champCodePostal, 5); // Limite à 5 chiffres
  
  
    
  
  
  
  
  
  const prixUnitaire = 499; // Prix fixe de 100dh par article
  
  // Récupérer les éléments du DOM
  const quantityInput = document.getElementById("quantity");
  const totalOutput = document.getElementById("total");
  
  // Ajouter un écouteur pour détecter les changements dans la quantité
  quantityInput.addEventListener("input", () => {
    const quantity = parseInt(quantityInput.value) || 0; // Convertir la valeur saisie en entier (0 si vide)
    const total = quantity * prixUnitaire; // Calculer le total
    totalOutput.textContent = `${total} Dh`; // Afficher le total
  });
  
  
  // Écouteur pour le bouton "Valider la commande"
  document.getElementById("validerCommande").addEventListener("click", validerCommande);