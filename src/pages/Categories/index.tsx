import ProductList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()

  if (actionGames && fightGames && rpgGames && simulationGames && sportGames) {
    return (
      <>
        <ProductList games={actionGames} title="Ação" background="black" />
        <ProductList games={sportGames} title="Esportes" background="gray" />
        <ProductList
          games={simulationGames}
          title="Simulação"
          background="black"
        />
        <ProductList games={fightGames} title="Luta" background="gray" />
        <ProductList games={rpgGames} title="RPG" background="black" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
