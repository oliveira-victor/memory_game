import Logos from '../../components/Logos'
import * as S from './styles'

const Footer = () => {
    return (
        <S.Footer>
            <p>por Victor Freire Oliveira</p>
            <span className='email'><a href="mailto:dev.victor.fo@gmail.com">dev.victor.fo@gmail.com</a></span>
            <Logos />
        </S.Footer>
    )
}

export default Footer
