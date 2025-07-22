import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

type Props = {
  titulo: string
  descricao: string
  link: string
}

const Projeto = ({ titulo, descricao, link }: Props) => (
  <Card>
    <Titulo>{titulo}</Titulo>
    <Paragrafo tipo="secundario">{descricao}</Paragrafo>
    <LinkBotao href={link}>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
