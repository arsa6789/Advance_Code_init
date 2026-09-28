# Advance Code Init

An educational monorepo containing Python exercises, vanilla JavaScript projects, React/Vite applications, Node.js backend experiments, and a Remotion video project. Each project is independent; install and run it from its own directory.

## Repository structure

```text
Advance_Code_init/
├── assignments/                         # 23 standalone Python practice scripts
│   ├── app.py
│   ├── app1.1.py … app1.10.py
│   ├── app2.py, app2.1.py … app2.4.py
│   └── app3.py … app9.py
├── backend/
│   ├── express/
│   │   └── index.js                      # Express practice entry point (currently empty)
│   ├── postman/
│   │   └── simple database/
│   │       └── app.js                    # In-memory Node HTTP user API example
│   └── WebisteBackend/
│       ├── index.js                      # Node HTTP server on port 5000
│       ├── package.json
│       └── router/
│           ├── leads.router.js           # Express leads router exercise
│           ├── followUp.router.js
│           └── index.router.js
├── Blog/
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   └── Gemini_Generated_Image_…png       # Blog image asset
├── Hackathon practice/
│   ├── javascript/
│   │   ├── asynchronous js/              # Async JavaScript exercise and text.txt
│   │   ├── DOM/                          # DOM manipulation example
│   │   ├── Tic Tac Toe/                  # Vanilla JS game
│   │   └── Weather App/                  # OpenWeatherMap-based UI and image assets
│   └── ReactJS/
│       ├── React Practice/               # React + TypeScript + Vite exercises
│       ├── Supabase/                     # React + Vite application with Supabase client
│       ├── TicTacToe/                    # React + Vite Tic-Tac-Toe game
│       └── WeatherAdvancedApp/
│           └── weatherapp/               # React + Vite weather application
├── Pheonix code/                         # Static HTML/CSS page
├── Remotion Videos/
│   └── my-video/                         # TypeScript Remotion Spotify-player composition
│       ├── public/                       # Audio and image assets
│       └── src/                          # Composition, components, styles, and types
├── package.json                          # Root dependency manifest
├── package-lock.json
├── .gitignore
└── README.md
```

## Projects

| Area | Contents |
| --- | --- |
| Python | `assignments/` contains independent `.py` exercises. |
| Static web | `Blog/`, `Pheonix code/`, and the projects in `Hackathon practice/javascript/` use HTML, CSS, and JavaScript. |
| React | Four Vite applications: React Practice, Supabase, TicTacToe, and WeatherAdvancedApp. |
| Backend | Small Node.js HTTP server examples plus an in-progress router exercise. |
| Video | A Remotion composition named `SpotifyPlayer` at 1920×1080 and 30 fps. |

## Prerequisites

- Node.js and npm (use a current LTS release)
- Python 3 for the files in `assignments/`
- A modern browser for static projects

## Running projects

### Static HTML, CSS, and JavaScript projects

Open the relevant `index.html` in a browser. For example:

```bash
xdg-open "Blog/index.html"
```

You can also use a local development server, such as VS Code Live Server.

The vanilla weather app requires an OpenWeatherMap API key. In `Hackathon practice/javascript/Weather App/app.js`, replace `API_KEY` with your own key before running it.

### React/Vite projects

Each React application has its own `package.json`. Change into the project folder, install dependencies, and start Vite:

```bash
cd "Hackathon practice/ReactJS/TicTacToe"
npm install
npm run dev
```

The same commands apply to these folders:

```text
Hackathon practice/ReactJS/React Practice/
Hackathon practice/ReactJS/Supabase/
Hackathon practice/ReactJS/TicTacToe/
Hackathon practice/ReactJS/WeatherAdvancedApp/weatherapp/
```

Where available, use `npm run build`, `npm run lint`, and `npm run preview` to build, check, and preview a Vite project.

### Node.js backend examples

Run either HTTP-server example with Node.js:

```bash
node backend/WebisteBackend/index.js
node "backend/postman/simple database/app.js"
```

Both examples listen on port `5000`, so run only one at a time. `backend/WebisteBackend` also exposes `npm run dev` for watch mode after installing its dependencies:

```bash
cd backend/WebisteBackend
npm install
npm run dev
```

The router files in `backend/WebisteBackend/router/` are practice code and are not currently mounted by `index.js`.

### Python assignments

Run an individual exercise directly:

```bash
python3 assignments/app.py
```

### Remotion video

```bash
cd "Remotion Videos/my-video"
npm install
npm run dev
```

This opens Remotion Studio. The project also provides `npm run build` and `npm run lint`.

## Configuration and security notes

- Do not commit secret API keys, database credentials, or service-role keys. `.env` files are ignored by Git.
- The Supabase project currently initializes its client in `Hackathon practice/ReactJS/Supabase/src/authClient.js`. For a deployed application, move configuration to Vite environment variables (for example, `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`).
- The root `package.json` is not a workspace runner. Install dependencies in the specific application you intend to run.

## Technologies

HTML, CSS, JavaScript, TypeScript, Python, Node.js, Express, React, Vite, Supabase, and Remotion.

## Status

This is a learning workspace. Projects may be experimental, incomplete, or intentionally minimal.

## License

No license file is currently included. Add one before distributing or reusing the code outside this repository.

