import './Weapons.css'

export default function Weapons(show) {
    return (
        <div className={show.active ? "show__list active" : "show__list"} >
            <img className="img_menu" src={require("../../../img/weap.png")} alt="sry" />
        </div>
    )
}