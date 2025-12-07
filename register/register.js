     const textes = {
    fr: {
        title: "Inscription à la Bibliothèque",
        firstname: "Nom",
        lastname: "Prenom",
        email: "Email",
        password: "Mot de passe",
        confirmPassword: "Confirmer le mot de passe",
        btnSingIn: "S'Enregistrer",
        already: "Déjà un compte ? ",
        clickHere: "cliquer ici",
        error: "Les mots de passes doivent être identique"
    },

    en: {
        title: "Library Sign In",
        firstname: "First name",
        lastname: "Last name",
        email: "Email",
        password: "Password",
        confirmPassword: "Confirm password",
        btnSingIn: "Sign in",
        already: "Already have an account ? ",
        clickHere: "click here",
        error: "Passwords must be identical"
    }
};
 
 const lang = document.getElementById("lang");
  function appliquerLangue(code) {
        const t = textes[code];
        document.getElementById("title").textContent = t.title;
        document.getElementById("firstname").placeholder = t.firstname;
        document.getElementById("lastname").placeholder = t.lastname;
        document.getElementById("email").placeholder = t.email;
        document.getElementById("password").placeholder = t.password;
        document.getElementById("confirmPassword").placeholder = t.confirmPassword;
        document.getElementById("btnSingIn").textContent = t.btnSingIn;
        document.getElementById("loginText").childNodes[0].textContent = t.already;
        document.getElementById("loginLink").textContent = t.clickHere;
    }
     // Changement de langue par l'utilisateur
      
    lang.addEventListener("change", () => {
        const choix = lang.value;
        appliquerLangue(choix);
        localStorage.setItem("lang", choix);
    });

    // Charger la langue enregistrée
    const langSaved = localStorage.getItem("lang");
    if (langSaved) {
        lang.value = langSaved;
        appliquerLangue(langSaved);
    } else {
        appliquerLangue("fr"); // langue par défaut
    }


let motDePasseConfirmation = document.getElementById("confirmPassword").value.trim();

loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        let Email = document.getElementById("email").value.trim();
        let motDePasse = document.getElementById("password").value.trim();
        let motDePasseConfirmation = document.getElementById("confirmPassword").value.trim();

        // Récupérer la liste des utilisateurs déjà existants
        let users = JSON.parse(localStorage.getItem("users")) || [];


        // Créer le nouvel utilisateur
        const newUser = {
            Email,
            motDePasse
        };
        
        if (motDePasse===motDePasseConfirmation) {

            // Ajouter au tableau
             users.push(newUser);

             // Sauvegarder la liste mise à jour
            localStorage.setItem("users", JSON.stringify(users));

            // Définir l’utilisateur actuel
            localStorage.setItem("currentUser", JSON.stringify(newUser));

            // Redirection
            window.location.href = "../login/dashboard.html";

        }
        else {
            // Afficher le message d'erreur dans la langue sélectionnée
            const t = textes[lang.value];
            errorMsg.textContent = t.error;
        }
    });

 
 