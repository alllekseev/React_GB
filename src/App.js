import logo from './logo.svg';
import './App.css';
import Message from './Components/Message/Message.js';

const someMessage = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus ad at beatae blanditiis consequuntur hic laboriosam laborum minima optio quaerat voluptas voluptates, voluptatum! Accusamus asperiores eius laborum maxime mollitia nulla, provident quo ratione repudiandae ullam? Consequatur dicta ex, facilis fuga fugit harum minima mollitia neque provident, quia rerum, tempora?\n';

function App(props) {
  return (
      <div className="App">
          <header className="App-header">
              My First React App
              <h3>Hello, {props.name}!</h3>
          </header>
          <Message message={someMessage}/>
      </div>
  );
}

export default App;
