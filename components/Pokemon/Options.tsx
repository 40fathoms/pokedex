import Link from 'next/link'

import * as Styles from './OptionStyles'

const Options = (props: any) => {

    const pokemonNumber = () => {
        if(props.pokemon.id < 10){
            return `00${props.pokemon.id}`
        }
        else if (props.pokemon.id >=10 && props.pokemon.id < 100){
            return `0${props.pokemon.id}`
        }
        else{
            return `${props.pokemon.id}`
        }
    }

    const pokemonName = props.pokemon.name[0].toUpperCase().concat(props.pokemon.name.slice(1))

    return (
        <Link href={`/pokemon/${props.pokemon.id}`}>
            <Styles.Option
                value={props.pokemon.id}
                onClick={props.resetSearchTerm}
            >                
                #{pokemonNumber()} - {pokemonName}
            </Styles.Option>
        </Link>
    );
}

export default Options;