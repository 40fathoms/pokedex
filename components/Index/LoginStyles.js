import styled from 'styled-components'

export const Login = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    width: 90%;

    img{
        width: 150px;
        height: 150px;
    }

    input{
        width: 100%;
        padding: 0.8rem;
        
        font-size: 1rem;
        border: solid 1px #c7c5c5;

        @media(min-width:1040px){
            width: 500px;
        }
    }

    button{
        position: relative;

        background-color: #0066ff;
        border: none;
        color: white;

        width: 150px;
        height: 40px;
        border-radius: 5px;

        font-size: 1rem;
        font-weight: 600;

        display:flex;
        align-items: center;
        justify-content: center;

        &:hover{
            opacity: 0.5;
        }

        a{
            padding: 11.5px 43.86px;
        }

        div{
            display:none;
            position: absolute;
            background-color:transparent;
            top:0;
            right:0;
            bottom:0;  
            left:0;
        }

        &.invalid{
            opacity:0.5;
            
            div{                
                display:block;  
                z-index: 2;
            }
        }

        &:not(.invalid){
            cursor:pointer;
        }
    }
`