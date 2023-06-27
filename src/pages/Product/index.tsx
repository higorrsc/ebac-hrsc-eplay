import { useParams } from 'react-router-dom'

import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'

const Product = () => {
  const { id } = useParams()
  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          quo, reprehenderit iure esse perspiciatis voluptate deserunt possimus,
          commodi, doloremque quae illo recusandae autem. Consequatur nisi
          provident, placeat illo officia ut rem corrupti consequuntur expedita
          illum itaque sapiente dicta pariatur ipsam repellendus fuga earum ex
          quos quae et quibusdam odio exercitationem. Sed aspernatur libero quo,
          deleniti sunt voluptatem rem corporis inventore ad impedit sapiente
          odit qui voluptatibus facere dolor iure, vero, accusamus eos aperiam
          omnis eaque unde tenetur quia? Exercitationem quisquam fuga autem,
          placeat quas voluptate? Eligendi mollitia eius velit autem! Incidunt
          pariatur quibusdam corrupti molestias totam nulla sequi suscipit
          similique!
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> Playstation 5<br />
          <b>Desenvolvedor:</b> Avalanche Software
          <br />
          <b>Editora:</b> Portkey Games
          <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas
        </p>
      </Section>
      <Gallery />
    </>
  )
}

export default Product
