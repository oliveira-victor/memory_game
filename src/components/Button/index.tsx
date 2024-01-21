import * as S from './styles'

type Props = {
    title: string
    onClick: any
}

const Button = ({ title, onClick }: Props) => {
    return (
        <S.Button onClick={onClick}>{title}</S.Button>
    )
}

export default Button