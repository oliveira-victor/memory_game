import { useState } from "react"
import Button from "../../components/Button"
import { Canvas } from "../../styles"
import NewGame from "../NewGame"
import HowToPlay from "../HowToPlay"
import Credits from "../Credits"

const MainMenu = () => {

    const [screen, setScreen] = useState<'mainScreen' | 'newGame' | 'tutorial' | 'credits'>('mainScreen')

    return (
        <Canvas>
            <div className="board">
                {screen === 'mainScreen' && (
                    <div>
                        <h1>Olá Brasil!<br /><span>jogo da memória</span></h1>
                        <Button title='Novo jogo' onClick={() => setScreen('newGame')} />
                        <Button title='Como jogar' onClick={() => setScreen('tutorial')} />
                        <Button title='Créditos' onClick={() => setScreen('credits')} />
                    </div>
                )}

                {screen === 'newGame' &&
                    <>
                        <NewGame />
                        <Button title="Sair" onClick={() => setScreen('mainScreen')} />
                    </>
                }

                {screen === 'tutorial' &&
                    <>
                        <HowToPlay />
                        <Button title="Voltar" onClick={() => setScreen('mainScreen')} />
                    </>
                }

                {screen === 'credits' &&
                    <>
                        <Credits />
                        <Button title="Voltar" onClick={() => setScreen('mainScreen')} />
                    </>
                }
            </div>
        </Canvas>
    )
}

export default MainMenu
