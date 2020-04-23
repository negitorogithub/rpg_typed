import IUnit from "./IUnit";
import React from "react";

interface IUnitHolder {
    unit: IUnit
}

export default function UnitView(props: IUnitHolder) {

    return (
        <div>
            <p>
                {props.unit.name}
            </p>
            <p>
                {props.unit.hp}
            </p>
            <meter className='hpBar' max={props.unit.maxHp} value={props.unit.hp}>

            </meter>
        </div>

    )
}