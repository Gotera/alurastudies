import { timeToSeconds } from "../../common/utils/date";
import Button from "../Button";
import Clock from "./Clock";
import style from './Cronometer.module.scss'

export default function Cronometer() {
    console.log('conversao: ', timeToSeconds('01:01:01'))
    return (
        <div className={ style.cronometro }>
            <p className={ style.titulo }> Escolha um Card e inicie o cronômetro </p>
            <div className={ style.relogioWrapper }>
                <Clock />
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}