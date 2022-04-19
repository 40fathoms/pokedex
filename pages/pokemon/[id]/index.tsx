import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import Search from '../../../components/Pokemon/Search'
import Pokemon from '../../../components/Pokemon/Pokemon'

import client from '../../../graphql/client'
import { GetStaticProps } from 'next'
import GET_ALL_POKEMONS from '../../../graphql/queries/getPokemons'
import GET_SPECIFIC_POKEMON from '../../../graphql/queries/getPokemon'
import GET_EVOLUTION_CHAIN from '../../../graphql/queries/getEvolutionChain'

import * as Styles from '../../../styles/Pokemon.js'

const pokemon = (props: any) => {
    
    return (
        <>
            <Head>
                <title>{props.pokemon.name[0].toUpperCase().concat(props.pokemon.name.slice(1))}</title>
            </Head>

            <Styles.Main>

                <Search
                    pokemons={props.results}
                />

                <Pokemon
                    pokemon={props.pokemon}
                    extendedPokemonData={props.extendedPokemonData}
                    evolution={props.evolution}
                />
                
            </Styles.Main>
        </>
    )
}

export const getServerSideProps = async (context: any) => {

    // Pokemons list
    const variablesAllPokemons = { limit: 151, offset: 0 }
    const {
        pokemons: { results }
    } = await client.request(GET_ALL_POKEMONS, variablesAllPokemons)

    //Single pokemon
    const variablesSinglePokemon = { name: context.params.id }
    const { pokemon: { ...pokemon } } = await client.request(GET_SPECIFIC_POKEMON, variablesSinglePokemon)


    /* 
        fetches the flavour text that describes the pokemon.
        Based on the current pokemon, and on extendedPokemonData, fetches
        data from the evolution chain
    */
    const currentPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${context.params.id}/`)
    const extendedPokemonData = await currentPokemon.json()

    const currentEvolution = await fetch(extendedPokemonData.evolution_chain.url)
    const evolution = await currentEvolution.json()

    return {
        props: {
            results,
            pokemon,

            extendedPokemonData,
            evolution
        }
    }
}

export default pokemon