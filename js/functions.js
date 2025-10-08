function showAnswers() {
    const answers = [
        "Ensimmäinen Rooman keisari oli Augustus (Octavianus).",
        "Bastiljin vallankumous tapahtui Ranskassa vuonna 1789.",
        "\"Ihmeiden matka\" (Travels of Marco Polo) kirjoitti Marco Polo.",
        "Toinen maailmansota alkoi vuonna 1939.",
        "Sparta tunnettiin sen sotilaistaan ja se sijaitsi antiikin Kreikassa."
    ];

    for (let i = 1; i <= answers.length; i++) {
        document.getElementById(`answer${i}`).textContent = answers[i-1];
    }
}
