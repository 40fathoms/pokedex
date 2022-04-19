const GET_EVOLUTION_CHAIN = `
query evolutionChain($id: String!) {
    evolutionChain(id: $id) {
      params
      status
      message
      response
    }
  }
`
export default GET_EVOLUTION_CHAIN