async function fetchJoke() {
    try {
        const jokeResponse = await fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode&type=single');
        if (!jokeResponse.ok) throw new Error('Network response was not ok');
        const jokeData = await jokeResponse.json();
        return jokeData;
    } catch (error) {
        console.error('Error fetching joke:', error);
        return null;
    }
}

async function displayJoke() {
    const joke = await fetchJoke();

    if (joke) {
        document.getElementById('joke').textContent = joke.joke;
    } else {
        document.getElementById('joke').textContent = 'Failed to fetch content. Please try again later.';
    }
}

displayJoke();
