import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const token = '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';

  useEffect(() => {
    // Hämta projektdata från GitHub API med din API-nyckel
    fetch('https://api.github.com/users/tederollz/repos', {
      headers: {
        Authorization: `token ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        // Uppdatera projects-state med data från GitHub API
        if (Array.isArray(data)) { // Kontrollera om data är en array
          setProjects(data);
        } else {
          console.error('GitHub API returned non-array data:', data);
        }
        setLoading(false); // Sätt loading till false när data har hämtats
      })
      .catch(error => {
        console.error('Error fetching GitHub projects:', error);
        setLoading(false); // Sätt loading till false vid fel
      });
  }, []);

  return (
    <div>
      <header>
        <h1>Linus Aspelof</h1>
        <nav>
          <ul>
            <li><Link to="/">Hem</Link></li>
            <li><Link to="/About">Om Mig</Link></li>
            <li><Link to="/CV">Cv</Link></li>
            <li className="active"><Link to="/Portfolio">Portfolio</Link></li>
            <li><Link to="/Kontakt">Kontakt</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <h2>Portfolio</h2>
        {loading ? (
          <p>Loading projects...</p> // Visa laddningsmeddelande när data hämtas
        ) : (
          <div className="projects-container">
            {Array.isArray(projects) && projects.map(project => (
              <div className="project" key={project.id}>
                <div className="project-image">
                  <img src="/Other/GitHub.png" alt="Project" />
                </div>
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <a href={project.html_url} target="_blank" rel="noopener noreferrer">Länk till GitHub</a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer>
        <p>&copy; 2024 Linus Aspelöf. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Portfolio;
