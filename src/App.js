import React, { Component } from 'react';
import logo from './logo.svg';
import catdog from './assets/images/animation.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Suki and Koji</h1>
          <img src={catdog} alt="Suki and Koji" />
          <p>
            My dog Suki very gently waking up our cat Koji by putting her whole
            mouth around Koji’s head. Finally Koji just taps Suki’s head with
            his paw (with claws retracted) as if to say, “Yeah, I know you’re
            there — I’m not ready to open my eyes yet.” What I find most amazing
            is to be soooo comfortable in your world that you don’t even open
            your eyes when your head is almost entirely surrounded by a giant
            mouth.
          </p>
          <p>
            <a
              className="App-link"
              href="https://github.com/stepheneb/suki-and-koji-create-react-app-version"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/stepheneb/suki-and-koji-create-react-app-version
            </a>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
