import './Monsters.css'
import { useState, useEffect } from "react";

const apiUrl = "https://www.dnd5eapi.co";
const monstersUrl = `${apiUrl}/api/monsters`

const filterMobs = (searchText, listOfMobs) => {
    if (!searchText) {
        return listOfMobs;
    }
    return listOfMobs.filter(({ name }) =>
        name.toLowerCase().includes(searchText.toLowerCase())
    );
}

const cleanInput = () => {
    document.getElementById('mob__search').value ='';
}

function Monsters() {
    const [mobsList, setMobsList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showMob, setShowMob] = useState('');
    const [monster, setMonster] = useState('');
    const [mobsData, setMobsData] = useState([])

    useEffect(() => {
        fetch(monstersUrl)
            .then(response => response.json())
            .then((data) => {
                setMobsData(data.results);
            })


    }, []);

    useEffect(() => {
        const filteredMobs = filterMobs(searchTerm, mobsData);
        setMobsList(filteredMobs);
    }, [searchTerm])


    useEffect(() => {
        if (showMob !== '')
            fetch(apiUrl + showMob)
                .then(response => response.json())
                .then((data) => {
                    setMonster(data);
                    setMobsList(['']);
                    setSearchTerm('');
                })

    }, [showMob])



    return (

        <div className="monster__img" id="second__screen">
            <div className="container">
                <div className="monsters">
                    <form>
                        <input type="text" className="mob__search" id="mob__search" placeholder="Search"
                         onChange={(e) => setSearchTerm(e.target.value)}/>
                    </form>
                    <div className="mob__found" id="mob__found__list">
                        {mobsList.slice(0, 6).map((mob, index) => {
                            if (searchTerm !== '') {
                                return <dt key={index} id={mob.url} onClick={(e) => {setShowMob(e.target.id) ; cleanInput()}} className="search__res">{mob.name}</dt>
                            }
                            else return ''
                        })}
                    </div>
                    <div className="monster__info">
                        <img src={monster.image !== undefined ? apiUrl + monster.image : require('../../img/unnamed.png')} alt="monster pic" className="monster__pic" id="mob__pic" />
                        <div className="monster__stats">
                            <div className="monster__name">{monster.name}</div>
                            <div className="monster__hp">{monster.hit_points} HP</div>
                            <div className="monster__dmg">{monster.hit_dice} DMG</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Monsters;