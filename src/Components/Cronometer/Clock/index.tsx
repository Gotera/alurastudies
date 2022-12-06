import React from "react";
import style from "./Clock.module.scss"

interface Props {
    time: number | undefined;
}

export default function Clock({ time = 0 }: Props) {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    const [minuteDezena, minuteUnidade] = String(minutes).padStart(2, '0');
    const [secondDezena, secondUnidade] = String(seconds).padStart(2, '0');
    return(
        <React.Fragment>
            <span className={ style.relogioNumero }>{ minuteDezena }</span>
            <span className={ style.relogioNumero }>{ minuteUnidade }</span>
            <span className={ style.relogioDivisao }>:</span>
            <span className={ style.relogioNumero }>{ secondDezena }</span>
            <span className={ style.relogioNumero }>{ secondUnidade }</span>
        </React.Fragment>
    )
}