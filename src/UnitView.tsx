import IUnit from "./IUnit";
import React from "react";

interface IUnitHolder {
    unit: IUnit
}

export default function UnitView(props: IUnitHolder) {
    return (
        <p>
            {props.unit.name}
            {props.unit.hp}
        </p>
    )
}