<!-- PROJECT -->
# MUVI

![Project Screenshot][project-screenshot]

MUVI is a web app for discovering movies using data provided by the [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction). Users can browse for movies by searching or filtering through categories such as Popular, Top Rated, and Now Playing. Login for TMDB accounts is supported with third party authentication. After logging in, users will have access to managing their favorites and watchlist.



<!-- TECHNOLOGIES -->
## Technologies

* [Next.js](https://nextjs.org/)
* [Chakra UI](https://chakra-ui.com/)



<!-- INSTALLATION -->
## Installation

To set up a local copy of the project, follow these steps.

1. Clone the repository
   ```sh
   git clone https://github.com/osu-cs499-w22/muvi.git
   ```
2. Install packages
   ```sh
   npm install
   ```
3. Generate an API key from [TMDB](https://developers.themoviedb.org/3/getting-started/introduction)
4. Create a `.env.local` file in the root directory with the environment variables
   ```sh
   NEXT_PUBLIC_API_KEY="YOUR_API_KEY_GOES_HERE"
   NEXT_PUBLIC_REDIRECT_URL="http://localhost:3000/login"
   ```



<!-- USAGE -->
## Usage

To run the project, follow these steps.

1. Run the development server
  ```sh
  npm run dev
  ```
2. Open http://localhost:3000/ in your browser



<!-- AUTHORS -->
## Authors

CS 499 Final Project Team 25

* [Steven Bui](https://github.com/buistvn)
* [Alex Young](https://github.com/axyoung)



<!-- LINKS & IMAGES -->
[project-screenshot]: /docs/muvi.png
