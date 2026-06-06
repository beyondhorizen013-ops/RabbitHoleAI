function explore() {
    const topic = document.getElementById("topicInput").value;

    const rabbitHoles = [
        "Origin Story",
        "Controversies",
        "Hidden Connections",
        "Biggest Moments",
        "Weird Facts"
    ];

    let output = `<h2>Exploring: ${topic}</h2>`;
    output += `<h3>Rabbit Holes:</h3>`;

    rabbitHoles.forEach(hole => {
        output += `<p>🕳️ ${hole}</p>`;
    });

    document.getElementById("results").innerHTML = output;
}
