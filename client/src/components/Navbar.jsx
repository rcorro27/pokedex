import React, { Component } from 'react'
import styled from 'styled-components'


const Container= styled.div.attrs({
    className:'container'
})`background-color: red`
const Nav= styled.nav.attrs({

    className:'navbar navbar-expand-lg navbar-dark bg-dark'
})`margin : 20px`

class Navbar extends Component{
    render(){
        return(

        <Container>
                <Nav>
                   <h1>Pokedex</h1>
                </Nav>
            </Container>  
        )
    }


}
export default Navbar