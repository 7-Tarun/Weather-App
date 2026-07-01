# 🌤️ Weather App (Glassmorphism UI)
> Haven't stepped out of your room today? You don't need to. Check the real-time weather of your city right from your screen and get back to scrolling.😉
A responsive, dynamic weather application built strictly with Vanilla JavaScript. This project focuses on modern asynchronous API integration, browser memory management, and a clean user interface.

## 🚀 Key Features

* **Real-time Weather Data:** Fetches live temperature, wind speed, humidity, and condition descriptions using the OpenWeatherMap API.
* **Search History (Persistent State):** Automatically stores and manages the user's recent city searches using browser `localStorage`. The data persists even after page refreshes.
* **Dynamic Visuals:** The UI icons react and update automatically based on the fetched weather conditions (e.g., Clear, Rain, Haze).
* **Responsive Architecture:** Developed with a Mobile-First approach featuring a sleek Glassmorphism design, using CSS Media Queries to render a centered floating widget on desktop screens.
* **Optimized UX:** Includes 'Enter' key event listeners for quick searching, automatic input clearing, and basic error handling via alerts for invalid inputs.

## 🛠️ Tech Stack

* **Markup & Styling:** HTML5, CSS3 (Flexbox, CSS Variables, Glassmorphism, Media Queries)
* **Logic & Behavior:** Vanilla JavaScript (ES6+, DOM Manipulation, Event Handling)
* **Network & Data:** Async/Await, Fetch API, JSON Parsing
* **Storage:** Web Storage API (LocalStorage)

## 🧠 Engineering Highlights

As a learning milestone before transitioning to frontend frameworks like React, this project demonstrates:
1.  **Asynchronous Data Flow:** Handling API latency and preventing race conditions in the UI.
2.  **Data Structure Serialization:** Converting JavaScript Arrays to JSON strings for LocalStorage persistence, and parsing them back to render dynamic DOM elements.
3.  **Separation of Concerns:** Dividing the logic into specific functions (Data Fetching, UI Updating, History Rendering) to keep the code modular and clean.

## 💻 Local Setup Instructions

To run this project locally on your machine:

1. Clone the repository: `git clone https://github.com/7-Tarun/Weather-App.git`
2. Get a free API key from [OpenWeatherMap](https://openweathermap.org/).
3. Open the `script.js` file and replace the dummy key in `const Apikey = "YOUR_API_KEY_HERE";` with your actual API key.
4. Open `index.html` in your browser (using an extension like Live Server is recommended).
