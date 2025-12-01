const countriesContainer = document.getElementById("countries-container");
const searchInput = document.getElementById("search-input");
const regionFilter = document.getElementById("region-filter");
let allCountries = [];

async function pullAllCountries() {
  const url =
    "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,languages,cca3";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new NotRetrieveCountry(
        "Unable to recieve Countries specify input fields."
      );
    }
    const data = await response.json();
    allCountries = data;
    // console.log(data);
    formulateData(data);
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
  countriesContainer.innerHTML = "";
  data.forEach((country) => {
    const card = document.createElement("div");
    card.className = "country-card";
    card.innerHTML = `
    <a href="country.html?code=${country.cca3}">
    <img src="${country.flags.png}" alt="Flag of ${country.flags.alt}">
      <h3>${country.name.common}</h3>
      <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> ${country.region}</p>
      <p><strong>Capital:</strong> ${country.capital?.[0] ?? "N/A"}</p>
      </a>
    `;
    countriesContainer.appendChild(card);
  });
}

async function test() {
  const res = await fetch("https://restcountries.com/v3.1/region/America");
  const data = await res.json();
  console.log(data);
}
async function testTwo() {
  const res = await fetch("https://restcountries.com/v3.1/region/Oceania");
  const data = await res.json();
  console.log(data);
}

test();
testTwo();

pullAllCountries();

//Search functionality
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = allCountries.filter((c) =>
    c.name.common.toLowerCase().includes(value)
  );
  formulateData(filtered);
});

//Filter functionality
regionFilter.addEventListener("change", (e) => {
  const value = e.target.value;
  const filtered = value
    ? allCountries.filter((country) => country.region == value)
    : allCountries;
  formulateData(filtered);
});
