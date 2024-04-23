document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("searchForm");
    const personInfo = document.getElementById("personInfo");
    const worldInfo = document.getElementById("worldInfo");

    searchForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const personId = document.getElementById("personId").value;
        const apiUrl = `https://swapi.py4e.com/api/people/${personId}/`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            displayPerson(data);
        } catch (error) {
            console.error("Error fetching person data:", error);
            personInfo.textContent = "Person not found. Please check the ID.";
        }
    });

    function displayPerson(data) {
        personInfo.innerHTML = `
            <ul class="list-group">
                <li class="list-group-item active">Name: ${data.name}</li>
                <li class="list-group-item">Gender: ${data.gender}</li>
                <li class="list-group-item">Height: ${data.height} cm</li>
                <li class="list-group-item">Mass: ${data.mass} kg</li>
                <li class="list-group-item">Eye color: ${data.eye_color}</li>
                <li class="list-group-item">Birth year: ${data.birth_year}</li>
            </ul>
        `;

        // Extract planet and specie ID
        const planetId = data.homeworld.split("/").filter(Boolean).pop();
        fetchPlanet(planetId);
        const specieId = data.species[0].split("/").filter(Boolean).pop();
        fetchSpecie(specieId);
    }

    async function fetchPlanet(planetId) {
        const planetUrl = `https://swapi.py4e.com/api/planets/${planetId}/`;
        try {
            const response = await fetch(planetUrl);
            const planetData = await response.json();
            displayWorld(planetData);
        } catch (error) {
            console.error("Error fetching planet data:", error);
            worldInfo.textContent = "Planet data not available.";
        }
    }

    async function fetchSpecie(specieId) {
        const specieUrl = `https://swapi.py4e.com/api/species/${specieId}/`;
        try {
            const response = await fetch(specieUrl);
            const specieData = await response.json();
            displaySpecie(specieData);
        } catch (error) {
            console.error("Error fetching species data:", error);
            worldInfo.textContent = "Species data not available.";
        }
    }

    function displayWorld(planetData) {
        worldInfo.innerHTML = `
            <ul class="list-group">
                <li class="list-group-item active">Home World: ${planetData.name}</li>
                <li class="list-group-item">Climate: ${planetData.climate}</li>
                <li class="list-group-item">Terrain: ${planetData.terrain}</li>
                <li class="list-group-item">Population: ${planetData.population}</li>
            </ul>
        `;
    }

    function displaySpecie(specieData) {
        worldInfo.innerHTML += `
            <ul class="list-group">
                <li class="list-group-item active">Species: ${specieData.name}</li>
                <li class="list-group-item">Classification: ${specieData.classification}</li>
                <li class="list-group-item">Language: ${specieData.language}</li>
            </ul>
        `;
    }
});