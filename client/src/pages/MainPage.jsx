import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import {Chart} from '../components'
import '../Colors.css'





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
}))` margin: 20px;
width:200px;    
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
        <Wrapper className=".container-fluid border border-danger rounded bg-danger w-75 m-1 mx-auto" >  
            <div className="row">
                <div className="col-sm">
                     <h3 className="bg-light border border-warning rounded mt-1">Name :{this.state.pokemon.name}</h3>  
                </div>
                <div className="col-sm">
                    <h3 className="bg-light border border-warning rounded mt-1">Order :{this.state.pokemon.order}</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                    <Img className="img-thumbnail" src={this.state.pokemon.sprites === undefined ? "undefined" : this.state.pokemon.sprites.front_default} alt={this.state.pokemon.name}/>
                </div>
                <div className="col-sm bg-light border-danger rounded mr-3">
                    {this.state.pokemon.stats === undefined ? <h3>no data</h3> : <Chart data={this.state.pokemon.stats}/>}
                </div>
            </div>
            <div className="row">
                <div className="col-sm ">
                     <h3 className="bg-warning border-danger rounded ml-3 mt-1" >Type : {this.state.pokemon.types === undefined ? <p>No Data</p> : this.state.pokemon.types[0].type.name}</h3>
                </div>
                <div className="col-sm">
                    <h3 className="bg-light border border-warning rounded mr-3 mt-1">Abilities :</h3>
                    {this.state.pokemon.abilities === undefined ? <p>No Data</p> : this.state.pokemon.abilities.map((info ,index) => {      
                        return <A className="btn btn-light border-danger rounded ml-3" href={info.ability.url} key={index} >{info.ability.name} </A>
                    })}
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                    <h1>Moves :</h1>
                        {this.state.pokemon.moves === undefined ? <p>No Data</p> : this.state.pokemon.moves.map((info, index)=> {
                        return <A className="btn btn-light border-danger rounded ml-3" href={info.move.url} key={index} >{info.move.name} </A>
                        })}  
                </div>
            </div>        
        </Wrapper>
    )
}


}
export default MainPage