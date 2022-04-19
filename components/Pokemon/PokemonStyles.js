import styled from 'styled-components'

export const Section = styled.section`
  
  height: 100vh;
  width: 100%;
  padding: 0 5%;

  background-color: #37c4ff;
  display: flex;
  flex-direction: column;
  gap: 30px;


  @media(min-width: 1040px){
    padding: 0 10%;
  }
`

export const Title = styled.div`
  display:flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;

  h1{
    color: #fff;
    font-size: 2.3rem;
    font-weight: 400;
  }

  img{
    margin-right:auto;
    height: 80px;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`

// Stats container
export const Stats = styled.div`
display:flex;
flex-direction: column;
gap:20px;

width:45%;
`

export const Image = styled.div`
  width:100%;
  background-color: #fff;
  border-radius: 0.5rem;
  display:flex;
  align-items:center;
  justify-content:center;
  height: 450px;

  img{
    border-radius: 0.5rem;

    @media (max-width: 1040px){
      width: 100%;
    }
  }
`

export const Types = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;

  background-color: #fff;
  border-radius: 0.5rem;
  padding: 10px 25px;

  h2, h3{
    margin: 0;
    font-size: 1.1rem;
    font-weight: 500;
  }
`

export const Type = styled.h3`

  color:#fff;
  padding: 2px 10px;
  border-radius: 0.5rem;
  
  &.normal{
    background-color: #A8A77A;
  }

  &.fire{
    background-color: #EE8130;
  }

  &.water{
    background-color: #6390F0;
  }

  &.electric{
    background-color: #F7D02C;
  }

  &.grass{
    background-color: #7AC74C;
  }

  &.ice{
    background-color: #96D9D6;
  }

  &.fighting{
    background-color: #C22E28;
  }

  &.poison{
    background-color: #A33EA1;
  }

  &.ground{
    background-color: #E2BF65;
  }

  &.flying{
    background-color: #A98FF3;
  }

  &.psychic{
    background-color: #F95587;
  }

  &.bug{
    background-color: #A6B91A;
  }

  &.rock{
    background-color: #B6A136;
  }

  &.ghost{
    background-color: #735797;
  }

  &.dragon{
    background-color: #6F35FC;
  }

  &.dark{
    background-color: #705746;
  }

  &.steel{
    background-color: #B7B7CE;
  }

  &.fairy{
    background-color: #D685AD;
  }
`

export const Measurements = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;

  h2{

    span{
      font-weight: 500;
    }

    margin: 0;
    font-size: 1.1rem;
    font-weight: 400;
    width:48%;
    
    background-color: #fff;
    border-radius: 0.5rem;
    padding: 10px 10px 10px 25px;
  }

`

export const Attributes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  background-color: #fff;
  border-radius: 0.5rem;
  padding: 10px 25px;

  h2, h3{
    margin: 0;
    font-size: 1.1rem;
    font-weight: 500;
  }

  div{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
  }
`

export const Attribute = styled.h3`
  color:#fff;
  padding: 2px 10px;
  border-radius: 0.5rem;
  width: 30%;

  text-align: center;

  &.hp{
    background-color: red;
  }

  &.attack{
    background-color: orange;
  }

  &.defense{
    background-color: yellow;
  }

  &.special-attack{
    background-color: blue;
  }

  &.special-defense{
    background-color: green;
  }

  &.speed{
    background-color: pink;
  }
`

//Evolution & about container
export const About = styled.div`
  display:flex;
  flex-direction: column;
  gap:20px;

  width:45%;
`

export const Evolution = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  background-color: #fff;
  border-radius: 0.5rem;
  padding: 20px 25px;

  h2{
    margin: 0;
  }

  div{
    width:100%;
    display: flex;
    justify-content: space-evenly;

    .current{
      box-shadow: 0 0 5px 5px #ff4f4b;
    }
  }
`

export const EvolutionPokemon = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  gap:15px;

  p{
    margin: 0;
  }

  img{
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 0.5rem;
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  background-color: #fff;
  border-radius: 0.5rem;
  padding: 20px 25px;
`