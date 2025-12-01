async function pullAllCountries() {
  const url = "https://restcountries.com/v3.1/all";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new NotRetrieveCountry();
    }
    const data = response.json();
    displayCountries(data);
  } catch (error) {
    console.error(error.message);
  }
}

class NotRetrieveCountry extends Error {
  constructor(message) {
    super(message);
    this.name = "NotRetreieveCountryError";
  }
}
