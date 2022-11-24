import './Spells.css'

export default function Spells(act) {
    return (
        <div className={act.act ? "show__list active" : "show__list"} alt="sry">
        </div>
    )
}