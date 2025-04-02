# REACT

### React Concepts;

- Don't touch the DOM , i will do it(React is declarative)
- Build websites like Lego box (Components based architecuture)
- Unidirectional Data flow (Virtual Dom and data flow top to bottom)
- UI, The rest is up to you (React Desktop, React 360)

#### Diff between React and React-dom library

**_"React" is the core JavaScript library used to build reusable UI components, while "ReactDOM" is a separate package specifically responsible for rendering those React components into the actual browser's DOM (Document Object Model), essentially acting as the bridge between React's virtual DOM and the real DOM on the web page;_**

##### What is Babel

_Babel is a JavaScript compiler that transpiles modern JavaScript (ES6+, JSX) into older versions (ES5) that browsers can understand._

##### What is webpack?

_Webpack is a module bundler that takes multiple files (JS, CSS, images, etc.) and bundles them into a single optimized file._

**Use Case of Babel in React**

- Transpiles JSX → Converts JSX (React’s syntax extension) into plain JavaScript.
- Converts ES6+ Features → Enables the use of modern JavaScript features like arrow functions, optional chaining, etc., in older browsers.
- Polyfills → Adds support for missing features in older environments.

**Use Case of Webpack in React**

- Module Bundling → Combines JS, CSS, images, and other assets into a single bundle.
- Code Splitting → Optimizes performance by loading only necessary chunks of code.
- Hot Module Replacement (HMR) → Enables real-time updates in development without refreshing the page.
- Loaders & Plugins → Supports Babel, CSS preprocessing, image optimization, etc.

**setState in class Component**

- In class components, setState performs a shallow merge of the new state with the existing state. In React class components, setState is the primary way to update the component state. It has several important behaviors and characteristics.

```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John",
      age: 25
    };
  }

  updateAge = () => {
    this.setState({ age: 26 }); // Only 'age' is updated, 'name' remains unchanged
  };

  render() {
    return (
      <div>
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
        <button onClick={this.updateAge}>Update Age</button>
      </div>
    );
  }
}

## Best practice to write setState
 updateAge = () => {
    this.setState((state, props) => {
      return { age: 26 }
    }, () => {
      console.log(this.state);
    }); // Only 'age' is updated, 'name' remains unchanged
  };

## Syntax ->   setState(stateUpdatFunction(), callbackFunction())
```

✅ _Shallow Merge_ Behavior

- Only the age field is updated.
- The name field remains unchanged.

<br/>

#### Single Page Application(SPA)

SPA stands for Single Page Application. It is a web application or website that loads a single HTML page and dynamically updates content as the user interacts with it, without requiring a full page reload.

**Key Characteristics of an SPA:**

- _Client-Side Rendering (CSR)_: The application runs mostly on the client side using JavaScript (or frameworks like React, Angular, or Vue.js).
- _Fetch API_: Uses asynchronous requests to fetch and update data without reloading the page.
- _Improved User Experience_: Faster transitions and a smoother, app-like experience.
- _Uses Browser History API_: URL changes without full-page reloads, making navigation seamless.

## React Life Cycle

1. constructor() - _Initializing the Component_

- This is the first method that runs when a component is created.
- It is used to initialize state and bind event handlers (if needed).
- You must call super(props) first before using this.

2. render() - _Displaying the UI_

- This method returns JSX (UI) that React displays on the screen.
- It re-runs every time the state or props change.

3. componentDidMount() - _Runs After First Render_

- This method runs only once, after the component is displayed on the screen.
- It is used for fetching data, setting timers, or adding event listeners.

Flow => 1(constructor) -> 2(render) -> 3(componentDidMount) -> 2(rerender)

### Optimization

Instead of defining an inline function inside render(), define it at the class level. This prevents the function from being reinitialized on every re-render, improving performance.

```
          onChange={(e) => {
            let searchField = e.target.value.toLocaleLowerCase();

            this.setState(() => {
              return { searchField };
            });
          }}

          #optimized
          onSearchChange = (e) => {
            let searchField = e.target.value.toLocaleLowerCase();

            this.setState(() => {
              return { searchField };
            });
          };

```

<br />

In class components, this.props is an object that holds the values passed from a parent component to the child component. It allows you to pass data and functions from one component to another.

React always render in 2 cases when setState is called or props are modified.

**Note: Css files are not limited to folder structure it will be bundled and applicable for across the application.**

### React Life Cycel

![Diagram](Diagram/react_lifecycle.png)

# React Functional Component

### Pure vs. Impure Functions in JavaScript

1. Pure Functions

- Always return the same output for the same input.
- No side effects (does not modify global variables, API calls, or DOM).

2. Impure Functions

- Change external state (modifies variables, manipulates DOM, makes API calls).
- May return different outputs for the same inputs.

### useState hook

The useState hook is a fundamental hook in React that allows functional components to have state, making them more dynamic and interactive.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

**When Does useState Trigger a Re-render?**

State Updates via setState

1. When you call setState(newValue), React schedules a re-render.

- The component re-executes and updates the UI based on the new state. Only If State Actually Changes

2. React compares the previous and new state (Object.is comparison).

- If they are the same (prevState === newState), React does not re-render.
- Inside an Event Handler or Effect

3. Calling setState inside an event handler, like onClick, schedules a re-render.

- If used inside useEffect, the component re-renders when dependencies change.

### useEffect Hook

The `useEffect` hook allows you to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. It runs after the component renders.

**Example Usage**

```jsx
import { useEffect, useState } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count updated: ${count}`);
  }, [count]); // Runs when 'count' changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

**When Does useEffect Run?**

1. After Initial Render

- useEffect runs after the component mounts, executing the callback function.

2. When Dependencies Change

- If you pass a dependency array [dep1, dep2], the effect runs only when any of these dependencies change.
- If the array is empty [], the effect runs only once after the first render.

3. Cleanup Function (Optional) - If the effect returns a function, React will run this cleanup function before running the effect again or when the component unmounts.

```jsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log('Interval running');
  }, 1000);

  return () => clearInterval(interval); // Cleanup function
}, []);
```

1. **What is the Virtual DOM?**
   Virtual DOM (VDOM) is a lightweight copy of the real DOM used in React.
   It does not directly manipulate the browser's DOM; instead, it creates a virtual representation of the UI in memory.

Key Benefits:

- Performance Optimization: Reduces the number of direct DOM updates.
- Efficient Updates: React updates only the changed parts instead of re-rendering the whole UI.
- Reconciliation: Uses a diffing algorithm to compare the previous and new virtual DOM, updating only necessary elements.

2. **How Virtual DOM Works in React**

- React creates a Virtual DOM tree for the initial render.
- When the state changes, a new Virtual DOM tree is created.
- React compares the new Virtual DOM with the previous one (Diffing).
- React calculates the minimal set of changes and updates only the affected parts of the real DOM (Reconciliation).
- The updated elements are patched into the Real DOM, improving efficiency.

3. **Difference Between DOM and Virtual DOM**

| Feature          | DOM                                       | Virtual DOM                                                |
| ---------------- | ----------------------------------------- | ---------------------------------------------------------- |
| **Definition**   | Represents the actual HTML document.      | A lightweight copy of the real DOM in memory.              |
| **Manipulation** | Directly updates the UI.                  | Updates only changed parts via a diffing algorithm.        |
| **Performance**  | Slower due to frequent updates.           | Faster, as updates are batched and optimized.              |
| **Efficiency**   | High memory usage and reflows.            | Reduces unnecessary re-renders, improving efficiency.      |
| **Re-rendering** | Happens every time an element is updated. | Uses a diffing algorithm to update only necessary changes. |

# React `useContext` Hook

## Introduction

The `useContext` hook in React is used to access **context values** without passing props manually through every component in the tree. It helps in **global state management** by providing a way to share data between components without prop drilling.

## Why Use `useContext`?

- Avoid **prop drilling** (passing props through multiple components).
- Share **global state** like authentication, themes, and language settings.
- Simplifies state management in smaller applications.

## How to Use `useContext`?

### 1. **Creating a Context**

First, create a context using `createContext()`.

````jsx
import React, { createContext, useContext, useState } from "react";

// Create a Context
const ThemeContext = createContext();
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```


### FAQ's

1. Why use capital letters to create a new component in React?

- In React, component names **must** start with a capital letter because React distinguishes between **HTML elements** and **custom components** based on their capitalization.

## Reason:

  1. **Native HTML elements are lowercase** 1.1

    - `<div>`, `<span>`, `<button>` are built-in HTML elements.

  2. **Custom components are uppercase** 1.2
    - React treats components that start with a capital letter as custom components and tries to resolve them from the imported modules.

## Example:

```jsx
function MyComponent() {
  return <h1>Hello, World!</h1>;
}

export default function App() {
  return (
    <div>
      <MyComponent /> {/* Recognized as a custom React component */}
      <myComponent /> {/* React treats this as an HTML element, which doesn't exist */}
    </div>
  );
}
````

2.  What is Switching Components?

- Switching components in React refers to **conditionally rendering** different components based on certain conditions, such as user actions, route changes, or application state.

## How to Switch Components?

### 1. **Using Conditional Rendering (`if-else` or Ternary Operator)**

You can switch components based on state or props.

#### Example:

```jsx
function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div>
      {isLoggedIn ? <Dashboard /> : <Login />}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle</button>
    </div>
  );
}
```

3. What is React Router?

- **React Router** is a popular **routing library** for React that enables navigation between different views or components in a **single-page application (SPA)** without requiring a full page reload.

## Why Use React Router?

- **Client-side navigation**: Avoids full-page reloads, making navigation faster.
- **Dynamic routing**: Renders different components based on the URL.
- **Nested routes**: Allows structuring pages hierarchically.
- **URL parameter handling**: Supports passing data via the URL.
- **Programmatic navigation**: Enables navigation via code (e.g., `useNavigate`).

4. 🚀 Deploying a React App in Production

- A React app is essentially a set of static files (HTML, CSS, and JS) that can be served from various platforms. Below are the steps for deployment.

## **1️⃣ Build the Production-Ready App**

Before deploying, you need to optimize your React app:

```sh
npm run build
# or
yarn build
```

This generates an optimized `build/` folder with minified and production-ready files.

---

## **Deployment Options**

### **🔹 1. Hosting on Vercel (Recommended for Simplicity)**

- Install Vercel CLI:
  ```sh
  npm install -g vercel
  ```
- Deploy:
  ```sh
  vercel
  ```
- Follow the instructions, and your app will be live.

---

### **🔹 2. Hosting on Netlify**

- Install Netlify CLI:
  ```sh
  npm install -g netlify-cli
  ```
- Deploy:
  ```sh
  netlify deploy --prod
  ```

Or use Netlify’s drag-and-drop UI.

---

### **🔹 3. Hosting on GitHub Pages**

1. Install `gh-pages`:
   ```sh
   npm install gh-pages --save-dev
   ```
2. Add scripts in `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy:
   ```sh
   npm run deploy
   ```

---

### **🔹 4. Hosting on AWS S3 + CloudFront (For Large Scale Apps)**

1. Create an S3 bucket and enable static website hosting.
2. Upload the `build/` folder.
3. Use AWS CloudFront to distribute globally.
4. Update your domain’s DNS settings.

---

### **🔹 5. Hosting on a VPS (NGINX + PM2)**

1. Copy the `build/` folder to your server.
2. Install and configure **NGINX**:
   ```sh
   sudo apt update && sudo apt install nginx
   ```
3. Set up an NGINX config file (e.g., `/etc/nginx/sites-available/react-app`):
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /var/www/react-app/build;
       index index.html;
       location / {
           try_files $uri /index.html;
       }
   }
   ```
4. Enable and restart NGINX:
   ```sh
   sudo ln -s /etc/nginx/sites-available/react-app /etc/nginx/sites-enabled/
   sudo systemctl restart nginx
   ```

---

## **Final Tips:**

- **Use HTTPS** (via Let's Encrypt or Cloudflare)
- **Enable Gzip Compression**
- **Monitor Performance using Lighthouse**
- **Keep Dependencies Updated**

---
