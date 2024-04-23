document.addEventListener("DOMContentLoaded", () => {
    const getJokeButton = document.getElementById("getJoke");
    const jokeDisplay = document.getElementById("joke");

    // Event listener for the "Get Joke" button
    getJokeButton.addEventListener("click", async () => {
        try {
            const response = await fetch("https://api.chucknorris.io/jokes/random");
            const data = await response.json();

            // Display the joke value
            jokeDisplay.textContent = data.value;
        } catch (error) {
            console.error("Error fetching Chuck Norris joke:", error);
            jokeDisplay.textContent = "Oops! Something went wrong. Try again later.";
        }
    });
});