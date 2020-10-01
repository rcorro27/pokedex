import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`
const Title = styled.h1.attrs({
    className: 'h1',
})``

const Subtitle = styled.h2
`
background-color : black;
color:white;
`
class MainPage extends Component{
   

render(){
    return(
        <Wrapper>
            <Title>Welcome to Pokedex</Title>
             <Subtitle>hello teste de styled syntaxe assez particulier </Subtitle>

        </Wrapper>
    )
}


}
export default MainPage