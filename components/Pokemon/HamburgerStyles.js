import styled from 'styled-components'

export const Hamburger = styled.div`

    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 10;

    width: 40px;
    height: 32px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;

    @media (min-width: 1341px){
        display:none;
    }

    .line-1,
    .line-2,
    .line-3 {
        height: 5px;
        width: 100%;
        background: #fff;
        border-radius: 10px;

        transition: transform 0.3s ease-in-out;
    }

    .line-1 {
        &.active {
            transform: translate(0, 130%) rotate(45deg);
        }
    }

    .line-2 {
        &.active {
            display: none;
        }
    }

    .line-3 {
        &.active {
            transform: translate(0, -135%) rotate(-45deg);
        }
    }
`