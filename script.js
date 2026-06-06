function explore() {
    const topic = document.getElementById("topicInput").value;

    const rabbitHoles = [
        "History",
        "Technology",
        "Mysteries",
        "Science",
        "Ancient Civilizations"
    ];

    let output = `<h2>Exploring: ${topic}</h2>`;
    output += "<h3>Related Rabbit Holes:</h3><ul>";

    rabbitHoles.forEach(hole => {
        output += `<li>${hole}</li>`;
    });

    output += "</ul>";

    document.getElementById("results").innerHTML = output;
}
