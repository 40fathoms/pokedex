import * as Styles from './HeaderStyles.js'

const Header = () => {
    return (
        <Styles.Header>
            
            <Styles.Logo src="/logo-pokedex.png" alt="pokeball" />

            <Styles.Button>
                <img src="/settings.svg" alt="settings" />
            </Styles.Button>

        </Styles.Header>
    );
}

export default Header;