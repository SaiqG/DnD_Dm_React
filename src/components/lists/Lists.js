import React, { useState } from "react"
import './Lists.css'
import CharList from "./char_list/CharList";
import Bag from "./player_bag/Bag";
import Weapons from "./player_weapons/Weapons";
import Spells from "./player_spells/Spells";




function Lists() {

    const [active, setActive] = useState({})

    return (
        <>
            <div className="menu" >
                <div className={active.char ? "menu__item active" : "menu__item"} onClick={() => setActive({ char: true })} >
                    <img className="menu__icon" src={require("../../img/inventory.png")} alt="character" />
                </div>
                <div className={active.bag ? "menu__item active" : "menu__item"} onClick={() => setActive({ bag: true })}>
                    <img className="menu__icon" src={require("../../img/bag.png")} alt="bag" />
                </div>
                <div className={active.weapons ? "menu__item active" : "menu__item"} onClick={() => setActive({ weapons: true })}>
                    <img className="menu__icon" src={require("../../img/weapons.png")} alt="weapons" />
                </div>
                <div className={active.spells ? "menu__item active" : "menu__item"} onClick={() => setActive({ spells: true })}>
                    <img className="menu__icon" src={require("../../img/spell-book.png")} alt="spells" />
                </div>
            </div>
            <div className="list" id="list">

                <CharList active={active.char} />
                <Bag active={active.bag} />
                <Weapons active={active.weapons} />
                <Spells active={active.spells} />
            </div>
        </>
    )
}

export default Lists;