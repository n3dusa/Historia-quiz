function showAnswers() {
    const answers = [
        "Azure Resource Group on säiliö, joka kokoaa sovelluksen resurssit yhteen hallittavaan kokonaisuuteen.",
        "Azure Monitoria käytetään sovellusten ja resurssien valvontaan, lokien keräämiseen ja vianmääritykseen.",
        "Azure Key Vault suojaa ja hallinnoi salaisuuksia, kuten salasanoja ja API-avaimia, turvallisesti.",
        "Azure Virtual Machines mahdollistaa virtuaalikoneiden ajamisen pilvessä ilman omaa laitteistoa.",
        "Azure App Service on hallittua palvelua web-sovellusten julkaisuun ja ajamiseen ilman palvelinten ylläpitoa."
    ];

    for (let i = 1; i <= answers.length; i++) {
        document.getElementById(`answer${i}`).textContent = answers[i - 1];
    }
}

