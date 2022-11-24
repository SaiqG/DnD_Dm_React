import './Spells.css'

export default function Spells(show) {
    return (
        <div className={show.active ? "show__list active" : "show__list"} >
        </div>
    )
}