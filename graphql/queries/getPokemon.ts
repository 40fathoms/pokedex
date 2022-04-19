const GET_SPECIFIC_POKEMON = `
  query Pokemon($name: String!) {
    pokemon(name: $name) {

      name
      id
      height
      weight
      status
      message

      sprites {
        front_default
      }

      types {
        type {
          name
        }
      }

      abilities{
        slot
        is_hidden
        ability{
          id
          name
          url
        }
      }

      stats{
        base_stat
        effort
        stat{
          id
          name
          url
        }
      }     
      
    }
  }
`
export default GET_SPECIFIC_POKEMON