import React, { useState } from "react"
import './Lists.css'
import CharList from "./char_list/CharList";
import Bag from "./player_bag/Bag";
import Weapons from "./player_weapons/Weapons";
import Spells from "./player_spells/Spells";




function Lists() {

    const [act, setAct] = useState({})

    return (
        <>
            <div className="menu" id="menu"  >
                <div className={act.char ? "menu__item active" : "menu__item"} id="#char" onClick={() => setAct({ char: true })} >
                    <img className="menu__icon" src={require("../../img/inventory.png")} alt="character" />
                </div>
                <div className={act.bag ? "menu__item active" : "menu__item"} id="#bag" onClick={() => setAct({ bag: true })}>
                    <img className="menu__icon" src={require("../../img/bag.png")} alt="bag" />
                </div>
                <div className={act.weapons ? "menu__item active" : "menu__item"} id="#weapons" onClick={() => setAct({ weapons: true })}>
                    <img className="menu__icon" src={require("../../img/weapons.png")} alt="weapons" />
                </div>
                <div className={act.spells ? "menu__item active" : "menu__item"} id="#spells" onClick={() => setAct({ spells: true })}>
                    <img className="menu__icon" src={require("../../img/spell-book.png")} alt="spells" />
                </div>
            </div>
            <div className="list" id="list">

                <CharList act={act.char} />
                <Bag act={act.bag} />
                <Weapons act={act.weapons} />
                <Spells act={act.spells} />
            </div>
        </>
    )
}

export default Lists;