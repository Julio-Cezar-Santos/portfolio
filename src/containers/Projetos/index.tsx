import Projeto from '../../componentes/Projeto'
import Titulo from '../../componentes/Titulo'

import { Lista } from './styles'

const Projetos = () => {
  const listaDeProjetos = [
    {
      id: 1,
      titulo: 'Lista de Tarefas',
      descricao: 'Lista de tarefas desenvolvida com Vue.js',
      link: 'https://todo-vue-one-gold.vercel.app/'
    },
    {
      id: 2,
      titulo: 'Clone Disney+',
      descricao: 'Clone da página inicial do Disney+',
      link: 'https://clone-disneyplus-one-chi.vercel.app/'
    }
  ]

  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        {listaDeProjetos.map((projeto) => (
          <li key={projeto.id}>
            <Projeto
              titulo={projeto.titulo}
              descricao={projeto.descricao}
              link={projeto.link}
            />
          </li>
        ))}
      </Lista>
    </section>
  )
}

export default Projetos
