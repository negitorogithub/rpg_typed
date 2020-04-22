import IAction from "./IAction";
import React from "react";

interface IActionHolder {
    action: IAction
}

export default function ActionButton(props: IActionHolder) {
    return (
        <button onClick={_ => props.action.do}>
            {props.action.name}
        </button>
    );
}
