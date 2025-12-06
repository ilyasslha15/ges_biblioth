    const textes = {
    fr: {
        title: "Connexion Bibliothèque",
        email: "Email",
        password: "Mot de passe",
        btnLogin: "Se connecter",
        error: "Email ou mot de passe incorrect"
    },
    en: {
        title: "Library Login",
        email: "Email",
        password: "Password",
        btnLogin: "Log in",
        error: "Incorrect email or password"
    }
};

  const lang = document.getElementById("lang");
  function appliquerLangue(code) {
        const t = textes[code];
        document.getElementById("title").textContent = t.title;
        document.getElementById("email").placeholder = t.email;
        document.getElementById("password").placeholder = t.password;
        document.getElementById("btnLogin").textContent = t.btnLogin;
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

    // Liste des utilisateurs (exemple)
    const users = [
        {email: 'admin@app.com', password: 'admin123', role: 'admin'},
        {email: 'user@app.com', password: 'user123', role: 'user'}
    ];

    const loginForm = document.getElementById("loginForm");
    const errorMsg = document.getElementById("errorMsg");

    // Gestion du submit
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            localStorage.setItem("currentUser", JSON.stringify(user));
            window.location.href = "dashboard.html";
        } else {
            // Afficher le message d'erreur dans la langue sélectionnée
            const t = textes[lang.value];
            errorMsg.textContent = t.error;
        }
    });

    // Redirection si déjà connecté
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
        window.location.href = "dashboard.html";
    }
