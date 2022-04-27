import React, {useState} from 'react';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';
import Resume from '../Resume';
import Navigation from '../Nav';



function Header() {
     const [currentPage, handlePageChange] = useState("About");

    const renderPage = () => {
        switch(currentPage) {
            case "About":
                return <About />;
            case "Projects":
                return <Projects />;
            case "Contact":
                return <Contact />;
            case "Resume":
                return <About />;
            default:
                return <About />;
        }

    }
    return (
        <div>
        <nav className="navbar">
          <div className="navbar-brand">
            <a
              className="navbar-item"
              rel="noreferrer"
              target="_blank"
            >
              <h2 className="header" >Thomas Siffermann</h2>
            </a>
          </div>
        </nav>
        {/* Pass the state value and the setter as props to NavTabs */}
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        {/* Call the renderPage function passing in the currentPage */}
        <main>
          <div>{renderPage(currentPage)}</div>
        </main>
      </div>
    );
}

export default Header;