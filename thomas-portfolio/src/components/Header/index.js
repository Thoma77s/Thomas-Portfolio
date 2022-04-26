import React from 'react';

function Header() {
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch(currentPage) {
            case "About":
                return <About />;
            case "Projects":
                return <Projects />;
            case "Contact":
                return <Contact />;
            case "Resume":
                return <Resume />;

            default:
                return <About />;
        }

    }
    return (
        <section class="hero">
        <h2>Thomas Siffermann </h2>
        <div class="profile">
            <img src="../Thomas-Portfolio/assets/Images/93266303.jfif" style="height: 150px; border-radius: 50%; border: 5px solid black;"/>
        </div>
        <div>
      <nav className="navbar">
        <div className="navbar-brand">
        </div>
      </nav>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
        </div>
    </section>
    );
}

export default Header;