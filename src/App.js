import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <div className = "nav-container">
          <nav className = "nav-data">
            <h2 id = "heading-left"> Just-Notes </h2>
            <ul className = "list-items">
              <li><button className = "top-button"> About Me </button></li>
              <li><button className = "top-button"> New Page </button></li>
            </ul>
          </nav>
        </div>
        
      </main>
      <section className = 'main-body'>
        <div className = "text-box">
          <textarea id="input-tag" rows = "25">
          </textarea>
        </div>
      </section>
      <footer className = 'footer-part'>
        This website dosent have a copyright.
      </footer>
    </div>
  );
}

export default App;
