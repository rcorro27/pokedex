import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios';



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

const TableauImages=[1,2,3,4,5,6,7,8,10]

class MainPage extends Component{
    constructor(props){
        super(props)
        this.state={
            pokemon:'',
            searchedPokemon:''
        }
    }
    componentDidMount(){
        if (this.state.pokemon =='') {
            
            axios.get('./pokemons.json')
            .then(res => {
                const pokemon = res.data;
                console.log(pokemon)
                this.setState({ pokemon : pokemon });
            })   
        }
    }
    
   

render(){
    console.log(this.state)
    return(
      /*  <div>
          {TableauImages.map((info,index) => {      
             return <Img src={require("../images/pokemon_"+info+".png")} className="img-thumbnail w-25" alt="" key={index}/>
            //  C:\Users\Richard\projectos personales\pokedex\client\src\images\pokemon_1.png
          })}
         
        <Wrapper>
            <Title>Welcome Young Avdentured</Title>
             <Subtitle>hello teste de styled syntaxe assez particulier </Subtitle>
        </Wrapper>
        
            
        </div>*/
        <Wrapper>
            <Title>Welcome Young Avdentured</Title>
             <Subtitle>hello teste de styled syntaxe assez particulier </Subtitle>
        </Wrapper>
    )
}


}
export default MainPage