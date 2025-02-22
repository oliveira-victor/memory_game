import { useState } from "react"
import Button from "../../components/Button"
import { Canvas } from "../../styles"
import NewGame from "../NewGame"
import HowToPlay from "../HowToPlay"
import Credits from "../Credits"

import cards from '../../assets/images/cards.webp'

const MainMenu = () => {

    const [screen, setScreen] = useState<'mainScreen' | 'newGame' | 'tutorial' | 'credits'>('mainScreen')

    return (
        <Canvas>
            <div className="board">
                {screen === 'mainScreen' && (
                    <section>
                        <h1>Olá Brasil!<br /><span>jogo da memória</span></h1>
                        <img style={{ maxWidth: '500px', width: '100%', height: 'auto' }} src={cards} alt="Cartões do jogo da memória" />
                        <Button title='Novo jogo' onClick={() => setScreen('newGame')} />
                        <Button title='Como jogar' onClick={() => setScreen('tutorial')} />
                        <Button title='Créditos' onClick={() => setScreen('credits')} />
                    </section>
                )}

                {screen === 'newGame' &&
                    <section>
                        <NewGame />
                        <Button title="Sair" onClick={() => setScreen('mainScreen')} />
                    </section>
                }

                {screen === 'tutorial' &&
                    <section>
                        <HowToPlay />
                        <Button title="Jogar" onClick={() => setScreen('newGame')} />
                        <Button title="Voltar" onClick={() => setScreen('mainScreen')} />
                    </section>
                }

                {screen === 'credits' &&
                    <section>
                        <Credits />
                        <div style={{ display: 'flex', flexDirection:'column', padding: '20px 0', gap: '6px' }}>
                            <a href="/files/cards-para-imprimir.pdf" download="cards-para-imprimir.pdf">
                                Baixar cards para impressão.
                            </a>
                            <a href="/files/para-colorir.pdf" download="para-colorir.pdf">
                                Baixar desenhos para colorir.
                            </a>
                        </div>
                        <Button title="Voltar" onClick={() => setScreen('mainScreen')} />
                    </section>
                }
            </div>
        </Canvas>
    )
}

export default MainMenu
