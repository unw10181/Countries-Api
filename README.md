# REST Countries API with Theme Switcher

A responsive frontend web application built to practice API integration, dynamic UI rendering, and theme switching.

## Out look of Page

<img src="./design/desktop-preview.jpg" alt="REST Countries App Screenshot"/>

---

## Description

A fully responsive web application that displays country data pulled from the REST Countries API. Users can browse all countries, search by name, filter by region, view detailed information for a selected country, and toggle between light and dark mode for an optimized viewing experience.

---

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Design](#design)
- [Project Next Steps](#project-next-steps)
- [Deployed App](#deployed-app)
- [About the Author](#about-the-author)
- [Relflection](#reflection)

---

## Technologies Used

- JavaScript (ES6+)
- HTML5
- CSS
- Fetch API

---

## Features

- View all countries fetched from the REST Countries API
- Search for countries using a dynamic input field
- Filter countries by region
- Click a country to view detailed information (population, currencies, languages, borders, etc.)
- Navigate through bordering countries from the detail page
- Fully responsive layout for mobile and desktop screens
- Light and dark mode theme toggle
- Accessible hover and focus states throughout the UI

---

## Design

- Layout and typography guided by the Frontend Mentor style guide
- Responsive grid/ flexbox system for displaying country cards
- Theme switching implemented with CSS variables

---

## Project Next Steps

- Add loading skeletons for smoother UX
- Implement caching for better performance
- Add animations for transitions between views
- Add a “favorite countries” feature using localStorage
- Add a mini analytics panel showing total regions/countries loaded

---

## Deployed App

**Live Demo:**
https://unw10181.github.io/Countries-Api/country.html?code=ECU
<br>

**GitHub Repository:**
https://github.com/unw10181/Countries-Api

---

## About the Author

I build mini applications utilizating React, typescript, javascript, html and css.

---

## Works Cited

- REST Countries API Documentation
- MDN Fetch API Reference
- Frontend Mentor Design Files & Style Guide
- W3 Schools
- https://www.w3schools.com/jsref/prop_loc_search.asp
- MDN
- https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams
- Stack Overlflow

## Reflection

Building this project was honestly a huge learning experience for me, especially when it came to working with APIs, linking pages, and handling data across different files. One of the biggest challenges was figuring out how to create a second webpage for the country details and properly link it to the cards on the homepage. Reading through documentation on URL parameters and DOMContentLoaded events wasn’t easy in the beginning. I felt like I was constantly jumping between examples trying to make sense of how all the pieces were supposed to fit together. Thankfully Trello helped with that.
Another major obstacle came from small typos that caused big headaches. For example, I wasted so much time wondering why filtering wouldn’t work, only to find out “Oceania” was spelled as “Ocenia” in my code. Same thing with “Americas,” which I accidentally wrote as “America.” These tiny mistakes completely broke my JavaScript logic and slowed me down more than I expected. Constantly logging out data helped me to break through minor errors though.
Fetching all countries from the API was also harder than I thought. I kept getting errors until I learned that the REST Countries API requires you to specify which fields you want; otherwise, the request fails. Once I found the right formatting and added the fields parameter, everything finally started working.
Overall, despite the challenges, I learned a lot about debugging, reading documentation, and paying attention to detail. Going forward, I’d improve my workflow by double-checking variable names, planning out functionality earlier, and exploring ways to make the UI even more dynamic and user-friendly. Sites that helped me out were Stack Overflow and MDN heavily. Also space out the project better and give myself more time.
