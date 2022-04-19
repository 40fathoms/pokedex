import styled from 'styled-components'

export const Header = styled.header`
  position:absolute;
  top: 0;
  width:100%; 

  background-color: #ff4f4b;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:space-between;
  
  padding: 1rem;

  @media(min-width: 1040px){
    padding: 1.5rem;
  }
`

export const Logo = styled.img`
  height:50px;
  width:auto;
`

export const Button = styled.button`

  background-color: transparent;
  border: none;
  cursor: pointer;

  img{
    height: 40px;
    width: 40px;
  }

`