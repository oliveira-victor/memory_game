import * as S from './styles'

import img01 from '../../assets/images/img01.webp'
import img02 from '../../assets/images/img02.webp'
import img03 from '../../assets/images/img03.webp'
import img04 from '../../assets/images/img04.webp'
import img05 from '../../assets/images/img05.webp'
import img06 from '../../assets/images/img06.webp'
import img07 from '../../assets/images/img07.webp'
import img08 from '../../assets/images/img08.webp'
import img09 from '../../assets/images/img09.webp'
import img10 from '../../assets/images/img10.webp'

const HowToPlay = () => {

    const cardsList = [
        { img: img06, title: "Alexis" },
        { img: img04, title: "Carol" },
        { img: img05, title: "Amelie" },
        { img: img03, title: "Motorhome" },
        { img: img02, title: "Violão" },
        { img: img01, title: "Legging roxa" },
        { img: img07, title: "Coelhinho" },
        { img: img08, title: "Cassete do cocô" },
        { img: img09, title: "Bóia jacaré" },
        { img: img10, title: "Bicicleta" }
    ]

    return (
        <section className="container">
            <S.RulesContainer>
                <p>
                    Seu objetivo é encontrar todos os pares de cartas no menor tempo e com o menor número de tentativas possíveis. Clique nas cartas para revelar o conteúdo e tente memorizar a posição de cada uma delas.
                </p>
            </S.RulesContainer>
            <br />
            <p>
                Faça pares com as seguintes cartas:
            </p>
            <S.CardsList>
                {cardsList.map((card, index) => (
                    <S.ListItem>
                        <img key={index} src={card.img} alt={card.title} />
                        <span>{card.title}</span>
                    </S.ListItem>
                ))}
            </S.CardsList>
        </section>
    )
}

export default HowToPlay
