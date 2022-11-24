import React, { useState } from "react";
import './CharList.css'

const printStat = (stat) => {
    const stt = Math.round((stat - 10) / 2 - 0.1);
    return addSign(stt)
}

const addSign = (stat) => {
    if (Math.sign(stat) === 1) return '+' + stat;
    return stat;
}




function CharList(show) {
    const [str, setStr] = useState(10)
    const [dex, setDex] = useState(10)
    const [vit, setVit] = useState(10)
    const [int, setInt] = useState(10)
    const [mnd, setMnd] = useState(10)
    const [har, setHar] = useState(10)
    const [mast, setMast] = useState(1)


    const addMast = (e, mast, st) => {
        if (st !== true) {
            if (e.currentTarget.readOnly) e.currentTarget.checked = e.currentTarget.readOnly = false;
            else if (!e.currentTarget.checked) e.currentTarget.readOnly = e.currentTarget.indeterminate = true;
        }

        let calc = +e.currentTarget.parentElement.firstChild.textContent
        if (e.target.checked) {
            e.currentTarget.parentElement.firstChild.textContent = addSign(calc + +mast)
        }
        else if (e.target.indeterminate) {
            e.currentTarget.parentElement.firstChild.textContent = addSign(calc + 1)
        }
        else {
            e.currentTarget.parentElement.firstChild.textContent = e.currentTarget.parentElement.parentElement.id
        };

    }


    const strS = printStat(str);
    const dexS = printStat(dex);
    const vitS = printStat(vit);
    const intS = printStat(int);
    const mndS = printStat(mnd);
    const harS = printStat(har);




    return (
        <div className={show.active ? "show__list active" : "show__list"} >
            <img className="img_menu" src={require("../../../img/stats__bg.png")} alt="menu img" />
            {/* stats colculate */}
            <div className="stats__pos">
                <input className="stats" id="str" type="number" min="0" max="30" defaultValue="10" onChange={(e) => setStr(e.target.value)} />
                <input className="stats" id="dex" type="number" min="0" max="30" defaultValue="10" onChange={(e) => setDex(e.target.value)} />
                <input className="stats" id="vit" type="number" min="0" max="30" defaultValue="10" onChange={(e) => setVit(e.target.value)} />
                <input className="stats" id="int" type="number" min="0" max="30" defaultValue="10" onChange={(e) => setInt(e.target.value)} />
                <input className="stats" id="mnd" type="number" min="0" max="30" defaultValue="10" onChange={(e) => setMnd(e.target.value)} />
                <input className="stats" id="har" type="number" min="0" max="30" defaultValue="10" onChange={(e) => setHar(e.target.value)} />
            </div>
            <div className="stats__change">
                <div id="strCh">{strS}</div>
                <div id="dexCh">{dexS}</div>
                <div id="bdyCh">{vitS}</div>
                <div id="intCh">{intS}</div>
                <div id="mndCh">{mndS}</div>
                <div id="harCh">{harS}</div>
            </div>
            {/* sub stats  */}
            <span className="chaild__stats" id="Sub">
                <div style={{ paddingTop: 6 }} className="chaild__stats__box" id={strS}>
                    <div className="ch__st">{strS}<label className="stat__name" >спасброски</label><input type="checkbox" onChange={(e) => { addMast(e, mast, true) }}
                        className="custom__checkbox" /></div>
                    <div className="ch__st">{strS}<label className="stat__name">атлетика</label><input type="checkbox" onChange={(e) => { addMast(e, mast) }}
                        className="custom__checkbox" /></div>
                    <div className="ch__st">{strS}<label className="stat__name">запугивание</label><input type="checkbox" onChange={(e) => { addMast(e, mast) }}
                        className="custom__checkbox" /></div>
                </div>
                <div style={{ paddingTop: 5 }} className="chaild__stats__box" id={dexS}>
                    <div className="ch__st">{dexS}<label className="stat__name">спасброски</label><input type="checkbox" onChange={(e) => { addMast(e, mast, true) }}
                        className="custom__checkbox" /></div>
                    <div className="ch__st">{dexS}<label className="stat__name">акробатика</label><input type="checkbox" onChange={(e) => { addMast(e, mast) }}
                        className="custom__checkbox" /></div>
                    <div className="ch__st">{dexS}<label className="stat__name">ловкость рук</label><input type="checkbox" onChange={(e) => { addMast(e, mast) }}
                        className="custom__checkbox" /></div>
                    <div className="ch__st">{dexS}<label className="stat__name">скрытность</label><input type="checkbox" onChange={(e) => { addMast(e, mast) }}
                        className="custom__checkbox" /></div>
                </div>
                <div style={{ paddingTop: 3 }} className="chaild__stats__box" id={vitS}>
                    <div className="ch__st">{vitS}<label className="stat__name">спасброски</label><input type="checkbox" onChange={(e) => { addMast(e, mast, true) }}
                        className="custom__checkbox" /></div>
                </div>
                <div style={{ paddingTop: 2 }} className="chaild__stats__box" id={intS}>
                    <div className="ch__st">{intS}<label className="stat__name">спасброски</label><input type="checkbox" onChange={(e) => { addMast(e, mast, true) }}
                        className="custom__checkbox" /></div>
                    <div className="ch__st">{intS}<label className="stat__name">магия</label><input type="checkbox" onChange={(e) => { addMast(e, mast) }}
                        className="custom__checkbox" /></div>
                    <div className="ch__st">{intS}<label className="stat__name">история</label><input type="checkbox" onChange={(e) => { addMast(e, mast) }}
                        className="custom__checkbox" /></div>
                    <div className="ch__st">{intS}<label className="stat__name">анализ</label><input type="checkbox" onChange={(e) => { addMast(e, mast) }}
                        className="custom__checkbox" /></div>
                    <div className="ch__st">{intS}<label className="stat__name">природа</label><input type="checkbox" onChange={(e) => { addMast(e, mast) }}
                        className="custom__checkbox" /></div>
                    <div className="ch__st">{intS}<label className="stat__name">религия</label><input type="checkbox" onChange={(e) => { addMast(e, mast) }}
                        className="custom__checkbox" /></div>
                </div>
                <div style={{ paddingTop: 2 }} className="chaild__stats__box" id={mndS}>
                    <div className="ch__st">{mndS}<label className="stat__name">спасброски</label><input type="checkbox" onChange={(e) => { addMast(e, mast, true) }}
                        className="custom__checkbox" /></div>
                    <div className="ch__st">{mndS}<label className="stat__name">животные</label><input type="checkbox" onChange={(e) => { addMast(e, mast) }}
                        className="custom__checkbox" /></div>
                    <div className="ch__st">{mndS}<label className="stat__name">проницат.</label><input type="checkbox" onChange={(e) => { addMast(e, mast) }}
                        className="custom__checkbox" /></div>
                    <div className="ch__st">{mndS}<label className="stat__name">медицина</label><input type="checkbox" onChange={(e) => { addMast(e, mast) }}
                        className="custom__checkbox" /></div>
                    <div className="ch__st">{mndS}<label className="stat__name">внимательн.</label><input type="checkbox" onChange={(e) => { addMast(e, mast) }}
                        className="custom__checkbox" /></div>
                    <div className="ch__st">{mndS}<label className="stat__name">выживание</label><input type="checkbox" onChange={(e) => { addMast(e, mast) }}
                        className="custom__checkbox" /></div>
                </div>
                <div style={{ paddingTop: 7 }} className="chaild__stats__box" id="harSub">
                    <div className="ch__st">{harS}<label className="stat__name">спасброски</label><input type="checkbox" onChange={(e) => { addMast(e, mast, true) }}
                        className="custom__checkbox" /></div>
                    <div className="ch__st">{harS}<label className="stat__name">обман</label><input type="checkbox" onChange={(e) => { addMast(e, mast) }}
                        className="custom__checkbox" /></div>
                    <div className="ch__st">{harS}<label className="stat__name">запугивание</label><input type="checkbox" onChange={(e) => { addMast(e, mast) }}
                        className="custom__checkbox" /></div>
                    <div className="ch__st">{harS}<label className="stat__name">выступление</label><input type="checkbox" onChange={(e) => { addMast(e, mast) }}
                        className="custom__checkbox" /></div>
                    <div className="ch__st">{harS}<label className="stat__name">убеждение</label><input type="checkbox" onChange={(e) => { addMast(e, mast) }}
                        className="custom__checkbox" /></div>
                </div>
            </span>
            {/*  heals bar menu */}
            <div className="profil__stats">
                <div className="top__stats">
                    <input className="kz" type="number" defaultValue="15" />
                    <input className="inic" type="text" defaultValue="+2" />
                    <input className="speed" type="number" defaultValue="30" />
                </div>
                <div className="hits__bar">
                    <div><input type="number" className="hits" defaultValue="20" /></div>
                    <div></div>
                    <div><input type="text" className="hits__dice" defaultValue="1к8" /></div>
                </div>
                <div className="death__check">
                    <span className="dead">
                        <label className="death__check__container">
                            <input type="checkbox" />
                            <span className="checkmark"><img src={require("../../../img/skull-and-bones.png")} alt="img"
                                className="rolls__ind" /></span>
                        </label>
                        <label className="death__check__container">
                            <input type="checkbox" />
                            <span className="checkmark"><img src={require("../../../img/skull-and-bones.png")} alt="img"
                                className="rolls__ind" /></span>
                        </label>
                        <label className="death__check__container">
                            <input type="checkbox" />
                            <span className="checkmark"><img src={require("../../../img/skull-and-bones.png")} alt="img"
                                className="rolls__ind" /></span>
                        </label>
                    </span>

                    <span className="alive">
                        <label className="death__check__container">
                            <input type="checkbox" />
                            <span className="checkmark"><img src={require("../../../img/revive.png")} alt="img" className="rolls__ind" /></span>
                        </label>
                        <label className="death__check__container">
                            <input type="checkbox" />
                            <span className="checkmark"><img src={require("../../../img/revive.png")} alt="img" className="rolls__ind" /></span>
                        </label>
                        <label className="death__check__container">
                            <input type="checkbox" />
                            <span className="checkmark"><img src={require("../../../img/revive.png")} alt="img" className="rolls__ind" /></span>
                        </label>
                    </span>
                </div>
            </div>
            <div className="bonus__stats">
                <div className="right__based"><input type="number" className="bs__input" defaultValue="12" /></div>
                <div className="right__based"><input type="number" className="bs__input" defaultValue="12" /></div>
                <div className="right__based"><input type="number" className="bs__input" defaultValue="12" /></div>
                <div className="left__based"><input type="number" className="bs__input" defaultValue="1" onChange={(e) => setMast(e.target.value)} /></div>
                <div className="left__based"><input type="checkbox" className="bs__input cb" defaultValue="12" />
                    <span className="cbUp"><img src={require("../../../img/success.png")} alt="img" className="success__img" /></span></div>
                <div className="left__based"><input type="number" className="bs__input" defaultValue="12" /></div>
            </div>
        </div>
    )
}

export default CharList;