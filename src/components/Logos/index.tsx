import * as S from './styles'

import vfo from '../../assets/images/vfo.svg'
import vfoStudio from '../../assets/images/vfoStudio.svg'
import instagram from '../../assets/images/instagram.svg'

const Logos = () => {
    return (
        <S.logos>
            <a href="https://victoroliveira.vercel.app/" target='_blank'><img src={vfo} alt="Logo VFO" /></a>
            <a href="https://vfostudio.vercel.app/" target='_blank'><img src={vfoStudio} alt="Logo VFO Studio" /></a>
            <a href="https://instagram.com/vfo.studio" target='_blank'><img src={instagram} alt="Logo Instagram" /></a>
        </S.logos>
    )
}

export default Logos
