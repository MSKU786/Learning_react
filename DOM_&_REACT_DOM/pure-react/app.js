const Person = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h3', {}, props.name),
    React.createElement('p', {}, props.description),
  ]);
};

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', { class: 'title' }, 'React is Rendered'),
    React.createElement(Person, {
      name: 'Manish',
      description: 'SDE III',
    }),
    React.createElement(Person, {
      name: 'Mojo',
      description: 'Senior Deveopler',
    }),
  ]);
};

//ReactDOM.render(React.createElement(App), document.getElementById('root'));
// updating the code to make it compattaible to react 18

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
