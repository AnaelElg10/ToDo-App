# Vite React TypeScript Todo App

This is a Todo application built with React, TypeScript, and Vite. The application allows users to add, edit, delete, and filter todos. It uses Tailwind CSS for styling and Lucide React for icons.

## Features

- Add new todos with a title, description, priority, category, and due date.
- Edit existing todos.
- Delete todos.
- Toggle the completion status of todos.
- Filter todos by status (all, active, completed), priority (all, low, medium, high), and category.
- Persist todos in local storage.

## Project Structure

The project is structured as follows:

- `src/components`: Contains React components.
- `src/hooks`: Contains custom hooks.
- `src/types`: Contains TypeScript types.
- `App.tsx`: The main application component.
- `index.tsx`: The entry point of the application.
- `main.tsx`: The main application styles.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository:

    ```sh
    git clone "link"
    cd vite-react-ts-todo-app
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

### Running the Development Server

To start the development server, run:

```sh
npm run dev

```

The application will be available at `http://localhost:5173`.

### Building the Application

To build the application, run:

```sh
npm run build
```

The build artifacts will be stored in the `dist` directory.

### Previewing the Build

To preview the build, run:

```sh
npm run preview
```

The application will be available at `http://localhost:4173`.

### Configuration

## TypeScript Configuration

- `tsconfig.json` : TypeScript configuration file.
- `tsconfig.app.json` : TypeScript configuration file for the application code.
- `tsconfig.node.json` : TypeScript configuration file for Node.js code.

## ESLint Configuration

- `eslintrc.config.js` : ESLint configuration file.

## Vite Configuration

- `vite.config.ts` : Vite configuration file.

## Tailwind CSS Configuration

- `tailwind.config.js` : Tailwind CSS configuration file.
- `postcss.config.js` : PostCSS configuration file.

## License

This project is open source and available under the [MIT License](LICENSE).