import React, { Component } from 'react'
import styled from 'styled-components'
import {Logo,Titres,Search} from '../components'
//import Titres from './Titres'



const Container = styled.div.attrs({
    className: 'container',
})``

const Nav = styled.nav.attrs({
    className: 'navbar navbar-light bg-light',
})`
    margin-bottom: 20 px;
`

class Navbar extends Component{
    render(){
        return(

            
        <Container>
                <Nav>
                    <Logo/>
                    <Search/>
                    
                </Nav>
        </Container>  
        )
    }


}
export default Navbar