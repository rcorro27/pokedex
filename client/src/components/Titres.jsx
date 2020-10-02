import React, {Component} from 'react'
import styled from 'styled-components'

const Wrapper=styled.div.attrs( props =>({

    className : props.className
}))``
const H1= styled.h1.attrs(props =>({
    className : props.className
}))``

class Titres extends Component{
    render(){

        return(

            <Wrapper className='border border-success'>
                <H1 className='text-white bg-dark' >Pokedex</H1>
            </Wrapper>
        )
    }
}
export default Titres