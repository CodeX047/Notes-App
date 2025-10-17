# Notes App

A small, lightweight notes application built with React and Vite. It provides a simple UI to add, drag, and delete sticky-style notes. Notes are persisted to the browser's localStorage so they survive page reloads.

## Features

- Create notes with a heading and details
- Drag notes around the notes area
- Delete notes with a quick click
- Notes persist in `localStorage`
- Built with Vite for fast dev server and build times

## Tech stack

- React (v19)
- Vite
- Tailwind CSS
- lucide-react (icons)
- react-draggable (dragging behavior)

## Prerequisites

- Node.js (recommended >= 18)
- npm, yarn or pnpm as a package manager

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/CodeX047/Notes-App.git
cd Notes-App
# using npm
npm install

```

## Running locally (development)

Start the Vite development server and open the app in your browser:

```bash
# npm
npm run dev
```

The dev server usually runs at http://localhost:5173 — Vite will print the exact address after you run the command.

## Usage

1. Open the app in your browser.
2. Fill in the "Note Heading" and "Enter Details" fields.
3. Click "Add Note" to create the note — it appears in the Recent Notes area.
4. Drag notes around the notes area to reposition them.
5. Click the small red X in the top-right of a note to delete it.
