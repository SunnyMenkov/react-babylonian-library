# Babylonian Library

React пет-проект для работы с API и хуками

## Features

- Fetches 24 random English words on the home page.
- Loads a fresh set of words on demand.
- Shows loading and error states, with a retry action.
- Includes Home, About, and not-found routes.
- Uses the browser's native `fetch` API; no API key is required.

## Built with

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- [Random Word API](https://random-word-api.herokuapp.com/home)


## Project structure

```text
src/
├── app/                         # Application shell and route definitions
├── features/
│   └── random-words/
│       ├── api/                 # Random Word API request
│       ├── hooks/               # Loading state and refresh behavior
│       └── ui/                  # Random words panel
├── pages/
│   ├── about/                   # About page
│   ├── home/                    # Home page
│   └── not-found/               # Unknown routes
├── shared/
│   └── ui/                      # Shared navigation
├── styles/                      # Global and app-level styles
└── main.jsx                     # React entry point and router provider
```
