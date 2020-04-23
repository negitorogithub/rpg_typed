import React from "react";

interface IActionHolder {
    name: string,
    func: Function
}

export default function ActionButton(props: IActionHolder) {
    return (
        <button onClick={_ => props.func()}>
            {props.name}
        </button>
    );
}
