import { useEffect, useState } from 'react'
import Card from '../../components/Button/Card'

import * as S from './styles'

import star from '../../assets/images/star.svg'

import img01 from '../../assets/images/img01.webp'
import img02 from '../../assets/images/img02.webp'
import img03 from '../../assets/images/img03.webp'
import img04 from '../../assets/images/img04.webp'
import img05 from '../../assets/images/img05.webp'
import img06 from '../../assets/images/img06.webp'
import img07 from '../../assets/images/img07.webp'

const NewGame = () => {

    const [items, setItems] = useState([
        { id: 1, img: img01, stat: '' },
        { id: 1, img: img01, stat: '' },
        { id: 2, img: img02, stat: '' },
        { id: 2, img: img02, stat: '' },
        { id: 3, img: img03, stat: '' },
        { id: 3, img: img03, stat: '' },
        { id: 4, img: img04, stat: '' },
        { id: 4, img: img04, stat: '' },
        { id: 5, img: img05, stat: '' },
        { id: 5, img: img05, stat: '' },
        { id: 6, img: img06, stat: '' },
        { id: 6, img: img06, stat: '' },
        { id: 7, img: img07, stat: '' },
        { id: 7, img: img07, stat: '' },
        { id: 8, img: 'https://static.vecteezy.com/system/resources/thumbnails/007/270/752/small_2x/cartoon-green-snake-on-white-background-vector.jpg', stat: '' },
        { id: 8, img: 'https://static.vecteezy.com/system/resources/thumbnails/007/270/752/small_2x/cartoon-green-snake-on-white-background-vector.jpg', stat: '' },
        { id: 9, img: 'https://img.freepik.com/premium-vector/capybara-cute-white-background-vector-illustration-cutie-funny-capybara-cartoon-portrait_702545-1281.jpg', stat: '' },
        { id: 9, img: 'https://img.freepik.com/premium-vector/capybara-cute-white-background-vector-illustration-cutie-funny-capybara-cartoon-portrait_702545-1281.jpg', stat: '' },
        { id: 10, img: 'https://as2.ftcdn.net/v2/jpg/04/79/05/27/1000_F_479052730_6GqTcbr3b0O5HiJ6DnFdI3gasfofYHnf.jpg', stat: '' },
        { id: 10, img: 'https://as2.ftcdn.net/v2/jpg/04/79/05/27/1000_F_479052730_6GqTcbr3b0O5HiJ6DnFdI3gasfofYHnf.jpg', stat: '' }
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState<number>(-1)
    const [disabled, setDisabled] = useState(false)
    const [success, setSuccess] = useState(0)
    const [attempt, setAttempt] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [finalScore, setFinalScore] = useState(0)

    const checkAllCorrect = () => {
        const allCorrect = items.every(item => item.stat === "correct");

        if (allCorrect) {
            setGameOver(true)
        };

        setDisabled(false)
    };

    useEffect(() => {
        if (attempt === 0) return

        setIsRunning(false)
        getScore()
    }, [gameOver])

    function check(current: number) {
        if (disabled) return
        setDisabled(true)
        setAttempt(attempt + 1)

        if (items[current].id == items[prev].id) {
            setSuccess(success + 1)
            items[current].stat = 'correct'
            items[prev].stat = 'correct'
            setItems([...items])
            setPrev(-1)
            checkAllCorrect()
        } else {
            items[current].stat = 'wrong'
            items[prev].stat = 'wrong'
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ''
                items[prev].stat = ''
                setItems([...items])
                setPrev(-1)
                setDisabled(false)
            }, 1000)
        }
    }

    function handleClick(id: number) {
        if (gameOver) return

        if (!isRunning) setIsRunning(true)

        if (items[id].stat === "correct" || items[id].stat === "wrong") return

        if (prev === -1) {
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        } else {
            check(id)
        }
    }

    // TIMER
    const [time, setTime] = useState(0); // Time in seconds
    const [isRunning, setIsRunning] = useState(false);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => {
                    const newTime = prevTime + 1;
                    setMinutes(Math.floor(newTime / 60));
                    setSeconds(newTime % 60);
                    return newTime;
                });
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    const formatTime = (minutes: number, seconds: number) => {
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    // SCORE
    const getScore = () => {
        let timeScore = 0
        let touchScore = 0

        if (minutes >= 1) {
            timeScore = 1
        } else if (seconds >= 40) {
            timeScore = 2
        } else {
            timeScore = 3
        }

        if (attempt >= 50) {
            touchScore = 1
        } else if (attempt >= 25) {
            touchScore = 2
        } else {
            touchScore = 3
        }

        setFinalScore(Math.floor((timeScore + touchScore) / 2))
        return finalScore
    }

    const getStars = (score: number) => {
        let starIcons: any = []
        for (let i = 0; i < score; i++) {
            starIcons.push(<img key={i} className='star' src={star} alt="Ícone de estrela" />)
        }

        return starIcons
    }

    return (
        <S.GameArea>
            <p>Encontre os pares</p>
            <S.Timer>
                {formatTime(minutes, seconds)}
            </S.Timer>
            <S.MainBoard style={gameOver ? { backgroundColor: '#68de62' } : {}}>
                {items.map((item, index) => (
                    <Card key={index} item={item} id={index} handleClick={handleClick} />
                ))}
            </S.MainBoard>
            {gameOver && (
                <S.GameOverScreen>
                    <span className='victory'>Parabéns! Você venceu!</span>
                    <p>
                        Seu tempo: <span className='result'>{formatTime(minutes, seconds)}</span>
                    </p>
                    <p>
                        Tentativas: <span className="result">{attempt}</span>
                    </p>
                    {getStars(finalScore)}
                    <p>
                        {finalScore}/3
                    </p>
                </S.GameOverScreen>
            )}
        </S.GameArea>
    )
}

export default NewGame