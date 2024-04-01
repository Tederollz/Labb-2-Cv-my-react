import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about">
      <header>
        <h1>Linus Aspelof</h1>
        <nav>
          <ul>
            <li><Link to="/">Hem</Link></li>
            <li className="active"><Link to="/About">Om Mig</Link></li>
            <li><Link to="/CV">Cv</Link></li>
            <li><Link to="/Portfolio">Portfolio</Link></li>
            <li><Link to="/Kontakt">Kontakt</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="text-container2">
          <h2>Om Mig</h2>
          <p>Hej! Jag heter Linus Aspelöf och pluggar Systemutveckling på Campus Varberg. 
            Just nu går jag kursen “Webbutveckling frontend" och den här hemsidan är en del av kursen</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper odio ligula, 
            in fermentum nunc blandit id. Sed semper libero ac aliquam posuere. Fusce nec leo dictum, 
            laoreet mauris et, commodo magna. Donec feugiat dolor aliquet porta eleifend. 
            In convallis in nisl ac volutpat.</p>

          <h2>Placeholder</h2>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper odio ligula, 
            in fermentum nunc blandit id. Sed semper libero ac aliquam posuere. Fusce nec leo dictum, 
            laoreet mauris et, commodo magna. Donec feugiat dolor aliquet porta eleifend. 
            In convallis in nisl ac volutpat.</p>
        </div>
        <div className="img-container2">
          <img src="/Other/About bild.gif" alt="about-bild" />
        </div>
      </main>

      <footer>
        <p>&copy; 2024 Linus Aspelöf. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
