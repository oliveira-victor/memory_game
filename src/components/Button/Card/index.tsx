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

    const newClass = item.stat ? "visible" : "hidden"

    return (
        <>
            <S.Card onClick={() => handleClick(id)}>
                <img style={{ visibility: newClass }} src={item.img} alt="Card" />
            </S.Card>
        </>
    )
}

export default Card
