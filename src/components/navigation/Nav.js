import './Nav.css'

function scrollToId(id) {
    document.getElementById(id).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
}


function Nav() {

    

    return (
        <div>
            <div className="bg__img" id="top"></div>
            <header className="header" >
                <div className="container">
                    <div className="header__inner">
                        <div className="header__logo">DungeonMaster Tool</div>
                        <nav className="nav">
                            <div className="nav__links" onClick={() => scrollToId("top")} >Champions</div>
                            <div className="nav__links" onClick={() => scrollToId("second__screen")}>Monsters</div>
                            <a className="nav__links" href="https://dnd.su/spells/" target="_blank" rel="noreferrer">Spells</a>
                            <a className="nav__links" href="https://dnd.su/" target="_blank" rel="noreferrer">database</a>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Nav;
