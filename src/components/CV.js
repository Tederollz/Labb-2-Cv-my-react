import React from 'react';
import { Link } from 'react-router-dom';
import CvData from './cv.json'

function CV() {
  return (
    <div>
    <header>
        <h1>Linus Aspelof</h1>
        <nav>
            <ul>
                <li><Link to="/">Hem</Link></li>
                <li><Link to="/About">Om Mig</Link></li>
                <li className="active"><Link to="/Cv">Cv</Link></li>
                <li><Link to="/Portfolio">Portfolio</Link></li>
                <li><Link to="/Kontakt">Kontakt</Link></li>
            </ul>
        </nav>
    </header>

    <main className="text-container2">
        <h2>Utbildningar</h2>
        <ul>
          {CvData.education.map((item, index) => (
            <dl key={index}>
              <strong>{item.degree}</strong> - {item.school} ({item.year})
            </dl>
          ))}
        </ul>

        <h2>Arbetslivserfarenhet</h2>
        <ul>
          {CvData.workExperience.map((item, index) => (
            <dl key={index}>
              <strong>{item.title}</strong> at {item.company} ({item.year}) - {item.description}
            </dl>
          ))}
        </ul>
      </main>

    <footer>
        <p>&copy; 2024 Linus Aspelöf. All rights reserved.</p>
        <script src="/JS/cv.js"></script>
    </footer>

    
</div>
  );
}

export default CV;
