import '../../App.css'
import './Nav.css'
import ScrollIntoView from 'react-scroll-into-view'

function Nav() {

    return (
        <div>
            <div className="bg__img" id="top"></div>
            <header className="header" >
                <div className="container">
                    <div className="header__inner">
                        <div className="header__logo">DungeonMaster Tool</div>
                        <nav className="nav">
                            <ScrollIntoView className="nav__links" selector='#top'>Champions</ScrollIntoView>
                            <ScrollIntoView className="nav__links" selector="#second__screen">Monsters</ScrollIntoView>
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
