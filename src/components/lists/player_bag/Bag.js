import './Bag.css'

export default function Bag(show) {
    return (
        <div className={show.active ? "show__list active" : "show__list"} >
            <img className="img_menu" src={require("../../../img/baginv.png")} height="680px" alt="bag pic"/>
        </div>
    )

}
