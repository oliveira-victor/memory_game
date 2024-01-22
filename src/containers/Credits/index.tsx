import * as S from './styles'

import vfo from '../../assets/images/vfo.svg'
import vfoStudio from '../../assets/images/vfoStudio.svg'

const Credits = () => {
    return (
        <div className="container">
            <p>
                Este jogo foi criado por <a href="https://victoroliveira.vercel.app/" target="_blank">Victor Freire Oliveira</a> (desenvolvedor web front-end, designer multimídia e artista ilustrador), fã do canal <a href="https://www.youtube.com/@olabrasil" target="_blank">Olá Brasil</a>, de Alexis, no YouTube, no intuito de treinar habilidades de programação de aplicação web com React JS, e homenagear Alexis, Carol e Amélie. Toda a parte de design e ilustrações também foram criadas por Victor.
            </p>
            <S.logos>
                <p>saiba mais:</p>
                <a href="https://victoroliveira.vercel.app/" target='_blank'><img src={vfo} alt="Logo VFO" /></a>
                <a href="https://vfostudio.vercel.app/" target='_blank'><img src={vfoStudio} alt="Logo VFO Studio" /></a>
            </S.logos>
        </div>
    )
}

export default Credits