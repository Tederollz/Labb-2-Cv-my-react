import React, { useState, useEffect } from 'react';
import ColorChanger from './ColorChanger';
import PopupModal from './1337';
import { Link } from 'react-router-dom';

function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [lastFourKeys, setLastFourKeys] = useState([]);

  const changeBackgroundColor = () => {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    setBackgroundColor(randomColor);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Lägg till det senaste tangenttrycket i listan
      setLastFourKeys(prevKeys => [...prevKeys.slice(-3), event.key]);
    };

    // Lyssna på tangenttryck
    window.addEventListener('keydown', handleKeyDown);

    // Avbryt lyssnaren när komponenten avmonteras
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    // Kolla om de senaste fyra tangenttrycken är "1337"
    if (lastFourKeys.join('') === '1337') {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, [lastFourKeys]);

  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <header>
        <h1>Linus Aspelof</h1>
        <nav>
          <ul>
            <li className="active"><a onClick={changeBackgroundColor}>Hem</a></li>
            <li><Link to="/About">Om Mig</Link></li>
            <li><Link to="/CV">Cv</Link></li>
            <li><Link to="/Portfolio">Portfolio</Link></li>
            <li><Link to="/Kontakt">Kontakt</Link></li>
          </ul>
        </nav>
      </header>
      <main className="centered-layout">
        <div className="container">
            <div className="centered-content">
                <h1>Lorem ipsum</h1>
                <p>Vivamus egestas sollicitudin lacinia. Ut vitae mi eros. 
                    Aenean nec odio neque. Donec facilisis efficitur diam vitae viverra. 
                    Ut id justo sed risus tempus eleifend ac vel ex. Quisque vel magna a sapien convallis varius nec vel tortor. 
                    Nunc eu odio sapien. Maecenas eget iaculis urna. Mauris blandit massa libero, 
                    eget ornare dolor dignissim id. Fusce leo arcu, blandit vitae mauris nec, euismod eleifend dui. 
                    Vestibulum euismod mollis felis. Ut ac metus id nisi semper semper. Cras lacus lorem, mollis eu dui a, 
                    molestie tristique elit. Morbi facilisis mauris ac consectetur lacinia.</p>
                    
                    <p>Nullam fermentum ante et condimentum sollicitudin. Ut et diam ornare, 
                        sagittis magna egestas, convallis felis. Morbi rhoncus dui ac tortor tincidunt, 
                        gravida blandit sapien condimentum. Cras convallis lacus quis tellus ultrices vestibulum. 
                        Maecenas urna arcu, euismod sit amet maximus sit amet, sagittis tincidunt sapien. Sed posuere massa leo, 
                        in interdum erat hendrerit quis. Nulla eget lacus lobortis, ultricies purus vel, 
                        finibus libero. Proin auctor rhoncus sapien ut porttitor. Aliquam congue tortor mi, 
                        sed pretium massa porttitor id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Curabitur blandit cursus nunc ut dapibus.</p>
            </div>
            <div className="sidebar">
                <h2>Lorem ipsum</h2>
                <p>Nullam fermentum ante et condimentum sollicitudin. Ut et diam ornare, 
                    sagittis magna egestas, convallis felis. Morbi rhoncus dui ac tortor tincidunt, 
                    gravida blandit sapien condimentum. Cras convallis lacus quis tellus ultrices vestibulum. 
                    Maecenas urna arcu, euismod sit amet maximus sit amet, sagittis tincidunt sapien. Sed posuere massa leo, 
                    in interdum erat hendrerit quis. Nulla eget lacus lobortis, ultricies purus vel, 
                    finibus libero. Proin auctor rhoncus sapien ut porttitor. Aliquam congue tortor mi, 
                    sed pretium massa porttitor id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Curabitur blandit cursus nunc ut dapibus.</p>
            </div>
        </div>
        <div id="1337Modal" className="modal">
            <div className="modal-content">
                <h3>Här kan ma va!</h3>
                <p>och här kan man va</p>
                <p>- Björn Gustafsson</p>
            </div>
        </div>
        
    </main>
      <footer>
        <p>&copy; 2024 Linus Aspelöf. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;