import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios';



const Wrapper = styled.div.attrs( props => ({
    className: props.className,
}))`
    margin: 0 30px;
`
const Title = styled.h1.attrs({
    className: 'h1 mx-auto w-75',
})``

const Img = styled.img.attrs( props => ({
    className: props.className,
    src: props.src,
    alt: props.alt
}))` margin: 20px`

const A = styled.a.attrs( props => ({
    className: props.className,
    href: props.href,

}))`margin: 5px`

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
        </div>*/
        <Wrapper className=".container">
            <Title>Welcome Young Adventured</Title>
            <p className="p w-75 bg-light">Don't know which pokemon to search?? you can select by type  :</p>
            <Wrapper className="list-group w-50">
                {(this.state.pokemon ==='') ? '' : this.state.pokemon.results.map((info,index) => {      
                return <A className="list-group-item list-group-item-action w-25 rounded shadow-sm" href={info.url} key={index} >{info.name} </A>
                })}
            </Wrapper>
             
        </Wrapper>
    )
}


}
export default MainPage