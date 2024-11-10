// Initial test alert
function showAlert() {
    alert("Hello, world!");
}

// Make text bigger
function makeTextBigger() {
    showAlert();  // Test alert
    document.getElementById("userText").style.fontSize = "24pt";
}

// Apply styles based on selected radio button
function applyFancyStyle() {
    const textArea = document.getElementById("userText");

    if (document.getElementById("fancyShmancy").checked) {
        alert("FancyShmancy style selected!"); // Show alert for FancyShmancy
        textArea.style.fontWeight = "bold"; // Set font weight to bold
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
        textArea.style.backgroundColor = "yellow";
    } else if (document.getElementById("boringBetty").checked) {
        alert("BoringBetty style selected!"); // Show alert for BoringBetty
        textArea.style.fontWeight = "normal"; // Reset font weight to normal
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
        textArea.style.backgroundColor = "white";
    }
}

// Add Moo functionality
function addMoo() {
    const textArea = document.getElementById("userText");
    let text = textArea.value.toUpperCase();

    // Split the text by periods to get each sentence
    const sentences = text.split(".");
    for (let i = 0; i < sentences.length; i++) {
        // Trim any extra whitespace and split the sentence into words
        let words = sentences[i].trim().split(" ");
        if (words.length > 0 && words[0] !== "") {
            // Add "-Moo" to the last word of each sentence
            words[words.length - 1] += "-Moo";
            sentences[i] = words.join(" ");
        }
    }
    // Join sentences back with a period and a space, trimming any trailing spaces
    textArea.value = sentences.join(". ").trim() + ".";
}
