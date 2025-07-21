import Titulo from '../../componentes/Titulo'
import Paragrafo from '../../componentes/Paragrafo'
import { GitHubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre min</Titulo>
    <Paragrafo tipo="secundario">
      Olá, meu nome é Julio Cezar, sou estudante de programação e estou
      aprendendo React. Este é um projeto de portfólio onde estou aplicando os
      conhecimentos adquiridos até agora.
    </Paragrafo>
    <GitHubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Julio-Cezar-Santos&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Julio-Cezar-Santos&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSecao>
  </section>
)

export default Sobre
