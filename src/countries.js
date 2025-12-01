const container = document.getElementById("country-detail");

document.addEventListener("DOMContentLoaded", async () => {
  let localData = [];

  //Waits for dom content to load
  const params = new URLSearchParams(window.location.search); // Searches parameters
  const code = params.get("code"); // e.g., "USA"

  if (!code) return;

  const url = `https://restcountries.com/v3.1/alpha/${code}?fields=name,flags,population,region,subregion,capital,languages,borders`;

  try {
    const response = await fetch(url); //specific country
    if (!response.ok) throw new Error("Failed to fetch country");

    const data = await response.json();
    localData = data[0];
    console.log(localData);
    displayCountryDetail(data);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
});

function displayCountryDetail(country) {
  // const detailInfo = document.createElement
  container.innerHTML = `
    <img src="${country.flags.png}" alt="${
    country.flags.alt || "Country flag"
  }">
    <h2>${country.name.common}</h2>
    <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
    <p><strong>Region:</strong> ${country.region}</p>
    <p><strong>Sub Region:</strong> ${country.subregion}</p>
    <p><strong>Capital:</strong> ${country.capital?.[0] ?? "N/A"}</p>
    <p><strong>Languages:</strong> ${
      country.languages ? Object.values(country.languages).join(", ") : "N/A"
    }</p>
    <a>
    <p><strong>Borders:</strong> ${country.borders?.join(", ") ?? "None"}</p>
    </a>
  `;
}

const backBtn = document.getElementById("back-btn");
backBtn.addEventListener("click", () => {
  window.history.back(); // Go back to the main page
});
