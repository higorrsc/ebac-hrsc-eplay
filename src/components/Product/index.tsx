import Tag from '../Tag'
import { Card, Titulo, Descricao } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" alt="" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque dolorum
      quasi recusandae sint provident. Cumque quasi at, harum illo quaerat
      numquam, doloremque eaque architecto natus nam eos maxime laborum.
      Consectetur!
    </Descricao>
  </Card>
)

export default Product
