document.addEventListener("DOMContentLoaded", async () => {
  //Waits for dom content to load
  const params = new URLSearchParams(window.location.search); // Searches parameters
  const code = params.get("code"); // e.g., "USA"

  if (!code) return;

  const url = `https://restcountries.com/v3.1/alpha/${code}?fields=name,flags,population,region,subregion,capital,languages,borders`;

  try {
    const response = await fetch(url); //specific country
    if (!response.ok) throw new Error("Failed to fetch country");

    const data = await response.json();
    displayCountryDetail(data[0]); // data is an array
  } catch (error) {
    console.error(error);
  }
});


const backBtn = document.getElementById("back-btn");
backBtn.addEventListener("click", () => {
  window.history.back(); // Go back to the main page
});
