import * as S from './styles'

type CardProps = {
    img: string
    stat: string
}

type Props = {
    item: CardProps
    id: number
    handleClick: (id: number) => void
}


const Card = ({ item, id, handleClick }: Props) => {

    const itemClass = item.stat ? " active " + item.stat : ""

    return (
        <S.Card className={itemClass} onClick={() => handleClick(id)}>
            <img src={item.img} alt="Card" />
        </S.Card>
    )
}

export default Card
