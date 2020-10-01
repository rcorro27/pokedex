import React, { Component } from 'react'
import styled from 'styled-components'


const Container= styled.div.attrs({
    className:'container'
})` background-color: grey;
    border: 2px solid black ;
    border-radius: 20px
`
const Nav= styled.nav.attrs({

    className:'navbar navbar-expand-lg navbar-dark bg-dark '
})`margin : 20px`

class Navbar extends Component{
    render(){
        return(

        <Container>
                <Nav>
                   <h1>Hello Welcome to your personal pokemon database POKEDEX</h1>
                </Nav>
            </Container>  
        )
    }


}
export default Navbar