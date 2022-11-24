import './Bag.css'

export default function Bag(act) {
    return (
        <div className={act.act ? "show__list active" : "show__list"} >
            <img className="img_menu" src={require("../../../img/baginv.png")} height="680px" alt="sry"/>
        </div>
    )

}
