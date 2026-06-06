function explore() {
    const input = document.getElementById("topicInput").value.trim();

    if (input === "") {
        document.getElementById("results").innerHTML = "<p>Please enter something first.</p>";
        return;
    }

    const detectedType = detectType(input);

    const rabbitHoles = [
        `The origin of ${input}`,
        `${input} controversies`,
        `${input} lost media`,
        `${input} hidden connections`,
        `${input} internet history`
    ];

    let output = `
        <div class="case-file">
            <h2>🕵️ Case File: ${input}</h2>
            <p><strong>Detected Type:</strong> ${detectedType}</p>

            <h3>🕳️ Rabbit Holes</h3>
    `;

    rabbitHoles.forEach(hole => {
        output += `<p class="hole" onclick="searchWeb('${hole}')">🕳️ ${hole}</p>`;
    });

    output += `
            <h3>🔎 Search Everywhere</h3>
            <button onclick="searchYouTube('${input}')">YouTube</button>
            <button onclick="searchReddit('${input}')">Reddit</button>
            <button onclick="searchWeb('${input}')">Web</button>
            <button onclick="searchArchive('${input}')">Archive</button>
        </div>
    `;

    document.getElementById("results").innerHTML = output;
}

function detectType(input) {
    if (input.includes("youtube.com") || input.includes("youtu.be")) return "YouTube Video";
    if (input.includes("reddit.com")) return "Reddit / Forum Thread";
    if (input.includes("http")) return "Website / Link";
    if (input.startsWith("@")) return "Username / Online Identity";
    return "Topic / Mystery / Internet Lead";
}

function searchYouTube(query) {
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, "_blank");
}

function searchReddit(query) {
    window.open(`https://www.google.com/search?q=site:reddit.com+${encodeURIComponent(query)}`, "_blank");
}

function searchWeb(query) {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
}

function searchArchive(query) {
    window.open(`https://web.archive.org/web/*/${encodeURIComponent(query)}`, "_blank");
}
