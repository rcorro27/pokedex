import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import {Chart} from '../components'
import '../Colors.css'
import iconPokebal  from '../images/pokeball.png'





const Wrapper = styled.div.attrs( props => ({
    className: props.className,
}))`
    margin: 0 30px;
    box-shadow: 10px 10px lightslategray;
`
const Title = styled.h1.attrs({
    className: 'h1 mx-auto w-75',
})``

const Img = styled.img.attrs( props => ({
    className: props.className,
    src: props.src,
    alt: props.alt
}))`     
`

const A = styled.a.attrs( props => ({
    className: props.className,
    href: props.href,

}))`margin: 5px`


class MainPage extends Component{
    constructor(props){
        super(props)
        this.state={
            pokemon:'',
            searchedPokemon:''
        }
    }
   async componentDidMount(){

       if (localStorage.getItem("pokemon") === null) {
        axios.get('./pokemons.json')
        .then(res => {
            const pokemon = res.data;
            localStorage.setItem("pokemon",JSON.stringify( pokemon))
            this.setState({ pokemon : pokemon });
            
        })
       }
       else if (this.state.pokemon === "") {
        this.setState({pokemon : JSON.parse(localStorage.getItem("pokemon"))})
       }
    } 
    
render(){
    console.log("state dans le render: ",this.state)
    
 
    return(
        <div className="bgBodyImage">       
            <Wrapper className=".container border border-danger rounded bg-danger w-75 m-1 mx-auto" >  
                <div className="row mt-2 ">
                    <div className="col-4 m-2 bg-warning ml-4 border border-light rounded">
                        <h5 className="bg-light border border-warning rounded mt-1 " >{this.state.pokemon.name}</h5>
                        <h5 className="bg-light border border-warning rounded mt-1 "> <img src={iconPokebal} alt="icon pokeball" width="50"/> {this.state.pokemon.order}</h5>  
                        <h5 className="bg-light border border-warning rounded mt-1" >Type(s) : {this.state.pokemon.types === undefined ? <p>No Data</p> : this.state.pokemon.types[0].type.name}</h5>
                    </div>
                    <div className="col-3 bg-warning m-2 ml-3 border border-light rounded ">
                        <h5 className="bg-light border border-warning rounded mr-3 mt-1">Abilities :</h5>
                        {this.state.pokemon.abilities === undefined ? <p>No Data</p> : this.state.pokemon.abilities.map((info ,index) => {      
                            return <A className="btn btn-light border-warning rounded" href={info.ability.url} key={index} >{info.ability.name} </A>
                        })}
                    </div>
                    <div className="col-3 bg-warning m-2 ml-4 border border-light rounded">
                        <A className="btn btn-light border-warning rounded" href="" >Zones </A>
                        <A className="btn btn-light border-warning rounded" href="" >Moves</A>
                        <A className="btn btn-light border-warning rounded" href="" >Evolutions </A>
                    </div>
                
                </div>
                {/*IMAGE AND STATS*/}
                <div className="row">
                    <div className="col-3 bg-warning ml-4 mb-2 border border-light rounded">
                        <Img className="img-thumbnail w-100 mb-2  mt-2" src={this.state.pokemon.sprites === undefined ? "undefined" : this.state.pokemon.sprites.front_default} alt={this.state.pokemon.name}/>
                    </div>
                    <div className="col-5 bg-warning ml-4 mb-2 border border-light rounded">
                        {this.state.pokemon.stats === undefined ? <h3>no data</h3> : <Chart height={300} width={450} data={this.state.pokemon.stats}/>}
                    </div>
                    <div className="col">
                        <button className="btn btn-info border-warning rounded">Random Pokemon</button>
                    </div>
                    
                </div>     
            </Wrapper>
        </div>

    )
}


}
export default MainPage