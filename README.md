# Codes Repository

A small collection of web development projects with example applications and supporting files.

## Repository Structure

```
codes/
├── package.json         # Project dependencies and metadata
├── package-lock.json    # Locked dependency versions
├── .gitignore           # Git ignore file
└── Blog/                # Blog management application
    ├── README.md        # Blog project documentation
    ├── app.js           # Main application logic for the blog home page
    ├── index.html       # Blog home page
    ├── style.css        # Shared Blog styles
    ├── add/             # Add new blog post UI
    │   ├── app.js
    │   └── index.html
    └── edit/            # Edit existing blog post UI
        ├── app.js
        └── index.html
```

## Project Overview

### Blog Application
A simple client-side blog management app that demonstrates:
- Viewing a list of blog posts
- Adding new posts
- Editing existing posts
- Navigating between pages using plain HTML, CSS, and JavaScript

## Quick Start

1. Open the `Blog` folder.
2. Open `index.html` in a web browser.
3. Use the built-in navigation to view, add, and edit posts.

## Local Development

This project is primarily static and can be opened directly in the browser.

If you want to serve it locally from a web server, install a simple server and run it from the repository root:

```bash
npm install
npx http-server .
```

Then open the URL shown in your browser.

## Notes

- The Blog app lives in `Blog/` and uses vanilla JavaScript.
- `package.json` is included for dependency management and may be used for future tooling.

## Technologies

- HTML5
- CSS
- JavaScript

## License

MIT
