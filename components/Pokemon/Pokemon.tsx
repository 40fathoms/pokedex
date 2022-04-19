import React from 'react'
import { nanoid } from 'nanoid'
import {BsSun, BsMoon} from 'react-icons/bs'

import * as Styles from './PokemonStyles.js'

const pokemon = (props: any) => {

    // Night mode
    const [night, setNight] = React.useState(false)

    const handleNight = () => {
        setNight(prev => !prev)
    }


    // Title syntax
    const pokemonNumber = () => {
        if (props.pokemon.id < 10) {
            return `00${props.pokemon.id}`
        }
        else if (props.pokemon.id >= 10 && props.pokemon.id < 100) {
            return `0${props.pokemon.id}`
        }
        else {
            return `${props.pokemon.id}`
        }
    }
    const pokemonName = props.pokemon.name.toUpperCase()


    // Types
    const types = props.pokemon.types.map((type: any) => {
        return (
            <Styles.Type
                key={nanoid()}
                className={type.type.name}
            >
                {type.type.name.toUpperCase()}
            </Styles.Type>
        )
    })


    // Measurements
    /* the pokemon API used has the height and weight attributes wrong
    they are increased by the order of 10*/
    const height: number = (props.pokemon.height) / 10
    const height_feet: number = height * 3.2808
    const weight: number = (props.pokemon.weight) / 10
    const weight_pounds: number = weight * 2.2


    //Attributes
    const attributes = props.pokemon.stats.map((attribute: any) => {

        let attributeName

        if (attribute.stat.name === 'hp') {
            attributeName = 'HP'
        }
        else if (attribute.stat.name === 'attack') {
            attributeName = 'ATK'
        }
        else if (attribute.stat.name === 'defense') {
            attributeName = 'DEF'
        }
        else if (attribute.stat.name === 'special-attack') {
            attributeName = 'SP. ATK.'
        }
        else if (attribute.stat.name === 'special-defense') {
            attributeName = 'SP. DEF.'
        }
        else if (attribute.stat.name === 'speed') {
            attributeName = 'SPE'
        }

        return (
            <Styles.Attribute
                key={nanoid()}
                className={attribute.stat.name}
            >
                {attribute.base_stat} {attributeName}
            </Styles.Attribute>
        )
    })


    // Evolutions
    const [evolutionChain, setEvolutionChain] = React.useState(Array())

    React.useEffect(() => {
        let evolutionChain = Array();

        // Pushes the first evolution into the evolution chain array
        evolutionChain.push(props.evolution.chain.species.name)

        // Pushes the second evolution, if available
        if (props.evolution.chain.evolves_to.length > 0) {
            evolutionChain.push(props.evolution.chain.evolves_to[0].species.name)

            // Pushes the third evolution, if available
            if (props.evolution.chain.evolves_to[0].evolves_to.length > 0) {
                evolutionChain.push(props.evolution.chain.evolves_to[0].evolves_to[0].species.name)
            }
        }

        setEvolutionChain(evolutionChain)

    }, [props.evolution])

    const evolutions = evolutionChain.map((pokemon: string) => {
        return (
            <Styles.EvolutionPokemon key={nanoid()}>
                <img
                    src={`https://img.pokemondb.net/artwork/${pokemon}.jpg`}
                    alt="Evolution chain pokemon"
                    className={pokemon === props.pokemon.name ? 'current' : ''}
                />
                <p>{pokemon[0].toUpperCase().concat(pokemon.slice(1))}</p>
            </Styles.EvolutionPokemon>
        )
    })

    //flavour text
    const description = props.extendedPokemonData.flavor_text_entries[1].flavor_text.replace('\f', ' ')

    return (
        <Styles.Section className={night ? "night" : ""}>

            <Styles.Title>
                <h1>#{pokemonNumber()} - {pokemonName}</h1>
                <img src={props.pokemon.sprites.front_default} alt="pokemon picture" />

                <Styles.Toggle>
                    <p><BsSun /></p>
                    <Styles.Slider
                        className={night ? "night" : ""}
                        onClick={handleNight}
                    >
                        <Styles.Circle className={night ? "night" : ""}></Styles.Circle>
                    </Styles.Slider>
                    <p><BsMoon /></p>
                </Styles.Toggle>

            </Styles.Title>

            <Styles.Content>

                <Styles.Stats>

                    <Styles.Image>
                        <img src={`https://img.pokemondb.net/artwork/${props.pokemon.name}.jpg`} alt="pokemon picture" />
                    </Styles.Image>

                    <Styles.Types>
                        <h2>{`Type${props.pokemon.types.length > 1 ? 's' : ''}:`}</h2>
                        {types}
                    </Styles.Types>

                    <Styles.Measurements>
                        <h2><span>Height:</span> {height}m / {height_feet.toFixed(2)} ft</h2>
                        <h2><span>Weight:</span> {weight}kg / {weight_pounds.toFixed(2)} lbs</h2>
                    </Styles.Measurements>

                    <Styles.Attributes>
                        <h2>Attributes:</h2>
                        <div>
                            {attributes}
                        </div>
                    </Styles.Attributes>

                </Styles.Stats>

                <Styles.About>

                    <Styles.Evolution>
                        <h2>Evolution:</h2>
                        <div>
                            {evolutions}
                        </div>
                    </Styles.Evolution>

                    <Styles.Description>
                        <p>{description}</p>
                    </Styles.Description>

                </Styles.About>

            </Styles.Content>

        </Styles.Section>
    );
}

export default pokemon;