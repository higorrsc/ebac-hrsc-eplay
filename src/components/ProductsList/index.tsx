import { Container, List } from './styles'
import Product from '../Product'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ title, background }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          category="Ação"
          description="Teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150,00']}
          system="Windows"
          title="Nome do jogo"
        />
        <Product
          category="Ação"
          description="Teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150,00']}
          system="Windows"
          title="Nome do jogo"
        />
        <Product
          category="Ação"
          description="Teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150,00']}
          system="Windows"
          title="Nome do jogo"
        />
        <Product
          category="Ação"
          description="Teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150,00']}
          system="Windows"
          title="Nome do jogo"
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
