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
