const URL = "https://eloquentjavascript.net/author";

// Storing all the media types to avoid repetition of code while fetching
let media = [
    "text/plain",
    "text/html",
    "application/json",
    "application/rainbows+unicorns",
];

// Solution with promises
for (let type of media) {
    fetch(URL, { headers: { accept: type } })
        .then((response) => response.text())
        .then((data) => console.log(data));
}

// Solution with async await
async function getContent() {
    try {
        for (let type of media) {
            let response = await fetch(URL, { headers: { accept: type } });
            console.log(await response.text());
        }
    } catch (e) {
        console.log(e);
    }
}
