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
const Img = styled.img.attrs( props => ({
    className: props.className,
    src: props.src,
    alt: props.alt
}))` margin: 20px`

const TableauImages=[20]

class MainPage extends Component{
    constructor(props){
        super(props)
        this.state={
            pokemon:'',
            searchedPokemon:''
        }
    }
    componentDidMount(){

    }
    
   

render(){
    return(
        <div>
          {}
                <Img src="pokedex\client\src\images\pokemon_"+ {} +".png" className="img-thumbnail" alt=""/>
         
        <Wrapper>
            <Title>Welcome Young Avdenture</Title>
             <Subtitle>hello teste de styled syntaxe assez particulier </Subtitle>
        </Wrapper>
        
            
        </div>
    )
}


}
export default MainPage