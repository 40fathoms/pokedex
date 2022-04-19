import * as Styles from './HamburgerStyles.js'

const Hamburger = (props: any) => {
    return (
        <Styles.Hamburger
            className="header-hamburger"
            onClick={props.handleMobile}
        >
            <span className={`line-1 ${props.mobileMenuIsShown ? 'active' : ''}`}></span>
            <span className={`line-2 ${props.mobileMenuIsShown ? 'active' : ''}`}></span>
            <span className={`line-3 ${props.mobileMenuIsShown ? 'active' : ''}`}></span>
        </Styles.Hamburger>
    );
}

export default Hamburger;