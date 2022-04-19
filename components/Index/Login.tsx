import * as Styles from './LoginStyles.js'

import React from 'react'
import Link from 'next/link'

const Login = () => {

    const [email, setEmail] = React.useState({
        value: '', isValid: null
    })

    const [emailIsValid, setEmailIsValid] = React.useState(false)

    const emailHandler = (e: any): void => {
        setEmail(e.target.value)

        if (e.target.value.includes('@')) {
            setEmailIsValid(true)
        }
        else {
            setEmailIsValid(false)
        }
    }


    return (
        <Styles.Login>

            <img src="/pokeball.svg" alt="pokeball" />

            <input
                type="email"
                placeholder={'Your best e-mail'}
                onChange={emailHandler}
            />

            <button
                className={`${!emailIsValid ? 'invalid' : ''}`}
            >
                <div>{/*Covers the button when invalid*/}</div>
                <Link href='/pokemon/1'><a>Acess</a></Link>
            </button>

        </Styles.Login>
    );
}

export default Login;