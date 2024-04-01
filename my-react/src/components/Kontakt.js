import React from 'react';
import { Link } from 'react-router-dom';

function Kontakt() {
  return (
    <div>
    <header>
        <h1>Linus Aspelof</h1>
        <nav>
            <ul>
                <li><Link to="/">Hem</Link></li>
                <li><Link to="/About">Om Mig</Link></li>
                <li><Link to="/CV">Cv</Link></li>
                <li><Link to="/Portfolio">Portfolio</Link></li>
                <li className="active"><Link to="/Kontakt">Kontakt</Link></li>
            </ul>
        </nav>
    </header>

    <main class="centered-layout">
        <div class="container">
            <div class="centered-content">
                <h1>Lorem ipsum</h1>
                    <p>Nullam fermentum ante et condimentum sollicitudin. Ut et diam ornare, 
                        sagittis magna egestas, convallis felis. Morbi rhoncus dui ac tortor tincidunt, 
                        gravida blandit sapien condimentum. Cras convallis lacus quis tellus ultrices vestibulum. 
                        Maecenas urna arcu, euismod sit amet maximus sit amet, sagittis tincidunt sapien. Sed posuere massa leo, 
                        in interdum erat hendrerit quis. Nulla eget lacus lobortis, ultricies purus vel, 
                        finibus libero. Proin auctor rhoncus sapien ut porttitor. Aliquam congue tortor mi, 
                        sed pretium massa porttitor id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Curabitur blandit cursus nunc ut dapibus.</p>
            </div>
            <div class="sidebar">
                <h2>Lorem ipsum</h2>
                <p>Nullam fermentum ante et condimentum sollicitudin. Ut et diam ornare, 
                    sagittis magna egestas, convallis felis. Morbi rhoncus dui ac tortor tincidunt, 
                    gravida blandit sapien condimentum. Cras convallis lacus quis tellus ultrices vestibulum. 
                    Maecenas urna arcu, euismod sit amet maximus sit amet, sagittis tincidunt sapien. Sed posuere massa leo, 
                    in interdum erat hendrerit quis. Nulla eget lacus lobortis, ultricies purus vel, 
                    finibus libero. Proin auctor rhoncus sapien ut porttitor. Aliquam congue tortor mi, 
                    sed pretium massa porttitor id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Curabitur blandit cursus nunc ut dapibus.</p>

                    <p>Vivamus egestas sollicitudin lacinia. Ut vitae mi eros. 
                        Aenean nec odio neque. Donec facilisis efficitur diam vitae viverra. 
                        Ut id justo sed risus tempus eleifend ac vel ex. Quisque vel magna a sapien convallis varius nec vel tortor. 
                        Nunc eu odio sapien. Maecenas eget iaculis urna. Mauris blandit massa libero, 
                        eget ornare dolor dignissim id. Fusce leo arcu, blandit vitae mauris nec, euismod eleifend dui. 
                        Vestibulum euismod mollis felis. Ut ac metus id nisi semper semper. Cras lacus lorem, mollis eu dui a, 
                        molestie tristique elit. Morbi facilisis mauris ac consectetur lacinia.</p>
            </div>
        </div>
    </main>

    <footer>
        <p>&copy; 2024 Linus Aspelöf. All rights reserved.</p>
    </footer>
</div>
  );
}

export default Kontakt;
