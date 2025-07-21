import Avatar from '../../componentes/Avatar'
import Paragrafo from '../../componentes/Paragrafo'
import Titulo from '../../componentes/Titulo'

import { BotaoTema, Descricao, SidebarContainer } from './styles'

type Props = {
  trocarTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Julio Cezar</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        julio cezar
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Full Stack
      </Descricao>
      <BotaoTema onClick={props.trocarTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
