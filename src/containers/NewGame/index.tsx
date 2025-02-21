import { useState } from 'react'
import * as S from './styles'
import Card from '../../components/Button/Card'

const NewGame = () => {

    const [items, setItems] = useState([
        { id: 1, img: 'https://img.freepik.com/premium-vector/lion-illustration-kids_495897-93.jpg', stat: '' },
        { id: 1, img: 'https://img.freepik.com/premium-vector/lion-illustration-kids_495897-93.jpg', stat: '' },
        { id: 2, img: 'https://img.freepik.com/premium-vector/cute-adorable-rabbit-cartoon-character-vector-illustration-funny-easter-bunny-flat-design-template_135170-3036.jpg?semt=ais_hybrid', stat: '' },
        { id: 2, img: 'https://img.freepik.com/premium-vector/cute-adorable-rabbit-cartoon-character-vector-illustration-funny-easter-bunny-flat-design-template_135170-3036.jpg?semt=ais_hybrid', stat: '' },
        { id: 3, img: 'https://as1.ftcdn.net/jpg/01/45/90/18/1000_F_145901814_nBmEjqsHVnAsy3upYbyKFVSU4hj24K2h.jpg', stat: '' },
        { id: 3, img: 'https://as1.ftcdn.net/jpg/01/45/90/18/1000_F_145901814_nBmEjqsHVnAsy3upYbyKFVSU4hj24K2h.jpg', stat: '' },
        { id: 4, img: 'https://static.vecteezy.com/system/resources/previews/008/950/999/non_2x/a-simple-cute-red-bird-with-heart-shaped-feathers-on-its-tail-cute-decorative-character-for-valentine-s-day-cards-simple-flat-color-illustration-isolated-on-white-background-vector.jpg', stat: '' },
        { id: 4, img: 'https://static.vecteezy.com/system/resources/previews/008/950/999/non_2x/a-simple-cute-red-bird-with-heart-shaped-feathers-on-its-tail-cute-decorative-character-for-valentine-s-day-cards-simple-flat-color-illustration-isolated-on-white-background-vector.jpg', stat: '' },
        { id: 5, img: 'https://as2.ftcdn.net/jpg/01/79/68/05/1000_F_179680524_OdzHcuIJn0q3pfqaFtGMYoJiMUt3yqJD.jpg', stat: '' },
        { id: 5, img: 'https://as2.ftcdn.net/jpg/01/79/68/05/1000_F_179680524_OdzHcuIJn0q3pfqaFtGMYoJiMUt3yqJD.jpg', stat: '' },
        { id: 6, img: 'https://img.freepik.com/free-vector/hand-drawn-pitbull-illustration_52683-62647.jpg', stat: '' },
        { id: 6, img: 'https://img.freepik.com/free-vector/hand-drawn-pitbull-illustration_52683-62647.jpg', stat: '' },
        { id: 7, img: 'https://img.freepik.com/free-psd/kawaii-cat-illustration_23-2151299390.jpg?semt=ais_hybrid', stat: '' },
        { id: 7, img: 'https://img.freepik.com/free-psd/kawaii-cat-illustration_23-2151299390.jpg?semt=ais_hybrid', stat: '' },
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
    const [touch, setTouch] = useState(0)

    function check(current: number) {
        if (disabled) return
        setDisabled(true)
        setTouch(touch + 1)
        
        if (items[current].id == items[prev].id) {
            setSuccess(success + 1)
            items[current].stat = 'correct'
            items[prev].stat = 'correct'
            setItems([...items])
            setPrev(-1)
            if (success === 9) {
                alert(`Você ganhou em ${touch} toques!`)
            }
            setDisabled(false)
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
        if (prev === -1) {
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        } else {
            check(id)
        }
    }

    return (
        <>
            <p>Encontre os pares</p>
            <S.MainBoard>
                {items.map((item, index) => (
                    <Card key={index} item={item} id={index} handleClick={handleClick} />
                ))}
            </S.MainBoard>
        </>
    )
}

export default NewGame