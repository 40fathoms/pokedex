import { nanoid } from 'nanoid'
import React from 'react'

import Options from './Options'

import client from '../../graphql/client'
import { GetStaticProps } from 'next'
import GET_ALL_POKEMONS from '../../graphql/queries/getPokemons'

import * as Styles from './SearchStyles.js'

const Search = (props: any) => {

    const [searchTerm, setSearchTerm] = React.useState('')
    const [filteredPokemons, setFilteredPokemons] = React.useState(props.pokemons)

    const handleSearchTerm = (e: any) => {
        setSearchTerm(e.target.value)
    }

    const resetSearchTerm = () => {
        setSearchTerm('')
    }

    React.useEffect(() => {
        setFilteredPokemons(
            props.pokemons.filter((pokemon: { id: number, name: string }) => {
                return pokemon.name.includes(searchTerm)
            })
        );
    }, [searchTerm]);


    const options = filteredPokemons.map((pokemon: { id: number, name: string }) => {
        return (
            <Options
                pokemon={pokemon}
                resetSearchTerm={resetSearchTerm}
                key={nanoid()}
            />
        )
    })

    return (
        <Styles.Section>

            <Styles.Content>

                <Styles.Logo src="/logo-pokedex.png" alt="pokeball" />

                <Styles.About>
                    Everything you wanted to know about your favorite pocket monsters!
                </Styles.About>

                <Styles.InputSection>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchTerm}
                        placeholder="Search a pokemon"
                    />

                    <img src="/search.png" alt="magnifying glass" />

                </Styles.InputSection>

            </Styles.Content>


            <Styles.Nav>
                {options}
            </Styles.Nav>

        </Styles.Section>
    );
}

export default Search;