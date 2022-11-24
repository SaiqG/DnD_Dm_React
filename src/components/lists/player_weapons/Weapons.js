import './Weapons.css'

export default function Weapons(act) {
    return (
        <div className={act.act ? "show__list active" : "show__list"} >
            <img className="img_menu" src={require("../../../img/weap.png")} alt="sry" />
        </div>
    )
}