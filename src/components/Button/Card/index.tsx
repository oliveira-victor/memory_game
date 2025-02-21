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
    return (
        <>
            <S.Card onClick={() => handleClick(id)}>
                {item.stat && (
                    <img src={item.img} alt="Card" />
                )}
            </S.Card>
        </>
    )
}

export default Card
