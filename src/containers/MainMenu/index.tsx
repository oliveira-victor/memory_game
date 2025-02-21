import { useState } from "react"
import Button from "../../components/Button"
import { Canvas } from "../../styles"
import NewGame from "../NewGame"
import HowToPlay from "../HowToPlay"
import Credits from "../Credits"

type Actions = {
    mainScreen: boolean
    newGame: boolean
    howToPlay: boolean
    credits: boolean
}

const MainMenu = () => {

    const [actions, setActions] = useState<Actions>({
        mainScreen: true,
        newGame: false,
        howToPlay: false,
        credits: false
    })

    const actionsHandler = (a: boolean, b: boolean, c: boolean, d: boolean) => {
        setActions({
            mainScreen: a,
            newGame: b,
            howToPlay: c,
            credits: d
        })
    }

    const back = () => {
        setActions({
            mainScreen: true,
            newGame: false,
            howToPlay: false,
            credits: false
        })
    }

    return (
        <Canvas>
            <div className="board">
                {actions.mainScreen ? (
                    <div>
                        <h1>Olá Brasil!<br /><span>jogo da memória</span></h1>
                        <Button title='Novo jogo' onClick={() => actionsHandler(false, true, false, false)} />
                        <Button title='Como jogar' onClick={() => actionsHandler(false, false, true, false)} />
                        <Button title='Créditos' onClick={() => actionsHandler(false, false, false, true)} />
                    </div>
                ) : ''}

                {actions.newGame ?
                    <>
                        <NewGame />
                        <Button title="Sair" onClick={back} />
                    </> : ''}

                    {actions.howToPlay ? 
                    <>
                        <HowToPlay />
                        <Button title="Voltar" onClick={back} />
                    </> : ''}

                    {actions.credits ? 
                    <>
                        <Credits />
                        <Button title="Voltar" onClick={back} />
                    </> : ''}
            </div>
        </Canvas>
    )
}

export default MainMenu