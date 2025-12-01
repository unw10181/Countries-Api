async function pullAllCountries() {
  const url =
    "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,languages";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new NotRetrieveCountry(
        "Unable to recieve Countries specify input fields."
      );
    }
    const data = await response.json();
    console.log(data);
    formulateData(data);

    displayCountries(data);
  } catch (error) {
    console.error("The Error is: " + error.message);
  }
}

class NotRetrieveCountry extends Error {
  constructor(message) {
    super(message);
    this.name = "NotRetreieveCountryError";
  }
}

function formulateData(data) {
  const countriesContainer = document.getElementById("countries-container");
  countriesContainer.innerHTML = "";
  data.forEach((country) => {
    const card = document.createElement("div");
    card.className = "country-card";
    card.innerHTML = `
    <img src="${country.flags.png}" alt="Flag of ${country.flags.alt}">
      <h3>${country.name.common}</h3>
      <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> ${country.region}</p>
      <p><strong>Capital:</strong> ${country.capital?.[0] ?? "N/A"}</p>
    `;
    countriesContainer.appendChild(card);
  });
}

// async function test() {
//   const res = await fetch(
//     "https://restcountries.com/v3.1/subregion/Northern Europe"
//   );
//   const data = await res.json();
//   console.log(data);
// }

// test();

pullAllCountries();
