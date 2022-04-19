import styled from 'styled-components'

export const Section = styled.section`
  
  height: 100vh;
  width: 350px;

  background-color: #ff4f4b;
  display: flex;
  flex-direction: column;
  gap: 30px;
  
  padding: 1rem 2rem;

  @media(min-width: 1040px){
    padding: 2rem;
  }
`

export const Content = styled.div`
    padding: 0 0 2rem 0;
    &:first-child{
        border-bottom: 1px solid #fff;;
    }
`

export const Logo = styled.img`
  height:50px;
  width:auto;
`

export const About = styled.p`
  color: white;

`

export const InputSection = styled.div`

    position: relative;

    width: 100%;
    height: 30px;

    input{
        position: absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;

        width: 100%;
        height:100%;
        padding: 1rem;

        border-radius: 5rem;
        border: none;
    }

    img{
        position: absolute;
        z-index: 2;
        height: 20px;
        width: 20px;
        opacity: 0.7;

        top: 20%;
        right: 5%;
    }
`

export const Nav = styled.nav`
    height: 70vh;
    overflow-x: auto;  
    

    &::-webkit-scrollbar {
        width: 10px;
        border-radius: 50%;
    }

    &::-webkit-scrollbar-track {
        background: #fff;
    }

    &::-webkit-scrollbar-thumb {
        background: #000;
    }
`