import React,{Component} from 'react'
import styled from 'styled-components' 

import logo from '../images/logo.png'

const Wrapper= styled.a.attrs({
    className: 'navbar-brand'
})``
class Logo extends Component {
    render(){
        return(
        
            <Wrapper>
                <img src={logo} height="80" width="80" alt="logoPokedex" className="d-inline-block align-top"/>
                Pokedex
            </Wrapper>
            
        )
    }
    
}
export default Logo

