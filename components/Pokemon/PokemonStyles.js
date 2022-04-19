import styled from 'styled-components'

export const Section = styled.section`
  
  width: 100%;
  padding: 2rem 5%;

  background-color: #37c4ff;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media(max-width: 1340px){
    padding: 3rem 5% 2rem 5%;
  }

  @media(min-width: 1040px){
    padding: 0 10% 20px 10%;
    height: 100vh;
    overflow:auto;
  }

  &.night{
    background-color: #36393E;
  }

  animation: appear 1s ease-out forwards;
  @keyframes appear {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
  }
`
///////////////////////////////////////////

//Title / header

export const Title = styled.div`
  display:flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;

  h1{
    color: #fff;
    font-size: 1.3rem;
    font-weight: 400;

    @media (min-width:1040px){
      font-size: 2.3rem;
    }
  }

  img{
    margin-right:auto;
    height: 50px;

    @media (min-width:1040px){
      height: 80px;
    }
  }
`
///////////////////////////////////////////

// Light / Dark mode button
export const Toggle = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
  }
`

export const Slider = styled.div`
  width: 25px;
  height: 13px;
  background-color: #36393E;
  border-radius: 2rem;
  margin-inline: 7px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid black;
  box-sizing: content-box;


  &.night{
      border-color: white;
      background-color: #F5F5F5;
      justify-content: flex-end;
  }
`

export const Circle = styled.div`
  height: 13px;
  width: 13px;
  background-color: white;
  border-radius: 50%;

  &.night{
      background-color: #36393E;
  }
`
///////////////////////////////////////////

// flexbox for both containers Stats/About
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: space-between;
  gap:20px;

  @media(min-width: 1040px){
    align-items:flex-start;
    flex-direction: row;
  }
`

///////////////////////////////////////////

// Stats container
export const Stats = styled.div`
display:flex;
flex-direction: column;
gap:20px;

width:100%;

@media (min-width:1040px){
  width:50%;
}
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
    max-height:450px;

    @media (max-width: 1040px){
      max-width: 380px;
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
    background-color: #ff4f4b;
  }

  &.attack{
    background-color: #EE8130;
  }

  &.defense{
    background-color: #F7D02C;
  }

  &.special-attack{
    background-color: #0066ff;
  }

  &.special-defense{
    background-color: #7AC74C;
  }

  &.speed{
    background-color: #D685AD;
  }
`

//Evolution & about container
export const About = styled.div`
  display:flex;
  flex-direction: column;
  gap:20px;

  width:100%;

  @media (min-width:1040px){
    width:50%;
  }
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
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 0.5rem;

    @media (min-width: 1040px){
      width: 100px;
      height: 100px;
    }
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
