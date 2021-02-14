import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import {Chart} from '../components'
import {Moves,Evolutions,Zones} from '../pages'
import '../Colors.css'
import iconPokebal  from '../images/pokeball.png'
import wallpaperpikachu from '../images/wallpaperpikachu.jpg'

const Form= styled.form.attrs(props =>({
    className: props.className

}))``

const Wrapper = styled.div.attrs( props => ({
    className: props.className,
}))`
    margin: 0 30px;
    box-shadow: 10px 10px lightslategray;
`
const Title = styled.h5.attrs({
    className: 'bg-light border border-light rounded mt-1 ',
})``

const Img = styled.img.attrs( props => ({
    className: "img-thumbnail w-100 mb-2  mt-2",
    src: props.src,
    alt: props.alt
}))`     
`
const A = styled.a.attrs( props => ({
    className: "btn btn-light border-light rounded mb-2 mt-1 m-1",
    href: props.href,

}))``

class MainPage extends Component{
    constructor(props){
        super(props)
        this.state={
            pokemon:'',
            searchedPokemon:'',
            timeToExpired: 604800000,
            moves:false,
            showEvolution:false,
            showZones:false
        }
        this.handleSearch=this.handleSearch.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.handleAxio=this.handleAxio.bind(this)
        this.handleRandomPokemon=this.handleRandomPokemon.bind(this)
        this.setPokemonState=this.setPokemonState.bind(this)
        this.setSearchedPokemon=this.setSearchedPokemon.bind(this)
        this.setLocalStorageWithExpiration=this.setLocalStorageWithExpiration.bind(this)
        this.getLocalStorage=this.getLocalStorage.bind(this)
        this.setMoves=this.setMoves.bind(this)
        this.setEvolution=this.setEvolution.bind(this)
        this.setZones=this.setZones.bind(this)
        
    }
    setZones(){
        let trueOrFalse=null
        {this.state.showZones ? trueOrFalse=false : trueOrFalse=true }     
        this.setState({showZones: trueOrFalse })
    }
    
    setEvolution(){
        let trueOrFalse=null
        {this.state.showEvolution ? trueOrFalse=false : trueOrFalse=true }     
        this.setState({showEvolution: trueOrFalse })
    }
    setMoves(){
        let trueOrFalse=null
        {this.state.moves ? trueOrFalse=false : trueOrFalse=true }     
        this.setState({moves: trueOrFalse })
    }
    /**set state for pokemon */
    setPokemonState(params){
        this.setState({pokemon : params })
    }
    /** set serached pokemon  */
    setSearchedPokemon(params){
        this.setState({searchedPokemon: params})
    }
    getLocalStorage(key) {
        const itemToFind = localStorage.getItem(key)
        // if the item doesn't exist, return null
        if (!itemToFind) {
            return null
        }
        const foundItem = JSON.parse(itemToFind)
        const now = new Date()
        // compare the expiry time of the item with the current time
        if (now.getTime() > foundItem.expiry) {
            // If the item is expired, delete the item from storage
            // and return null
            localStorage.removeItem(key)
            return null
        }
        return foundItem.value
    }

    /**set localstorage with a time limit  */
    setLocalStorageWithExpiration(key, value, timeToExpired) {
        const now = new Date()
    
        // `item` is an object which contains the original value
        // as well as the time when it's supposed to expire
        // time to expired is in milliseconds
        const item = {
            value: value,
            expiry: now.getTime() + timeToExpired,
        }
        localStorage.setItem(key, JSON.stringify(item))
    }
    
        
    /*RAndom pokemon btw 1 and 807  */
    handleRandomPokemon(){
        const randonPokemon=Math.floor(Math.random() * 807 +1 )
        const URlRandom="https://pokeapi.co/api/v2/pokemon/"+randonPokemon
        this.handleAxio(URlRandom)
    }

    /* handle fetch to api  */
   async handleAxio(params){
        if (this.getLocalStorage(params) === null) {
            
                await axios.get(params)
                .then(res => {
                    const pokemonResult = res.data;
                    this.setLocalStorageWithExpiration(params,pokemonResult,this.state.timeToExpired)
                    this.setPokemonState(pokemonResult)
                }) 
                .catch(error => {
                    this.setState({pokemon : "", searchedPokemon: ""})
                 })  
        }else{
            const pokemonToState=this.getLocalStorage(params)
            this.setPokemonState(pokemonToState)
        }
    }

    handleSearch(event){
        if (this.state.searchedPokemon !=="") {
            const URL="https://pokeapi.co/api/v2/pokemon/"+this.state.searchedPokemon
            this.handleAxio(URL)
        }else{
            alert('Please enter a valid name or id example : PIKACHU OR 1')
        }
        event.preventDefault()
    }
    handleChange(event){
        if (event.target.value !=="") {
            const searchedPokemon=event.target.value.trim()
            this.setSearchedPokemon(searchedPokemon)
        }
    }



   async componentDidMount(){

       if (localStorage.getItem("pokemon") === null) {
        await axios.get('./pokemons.json')
        .then(res => {
            const pokemon = res.data;
            this.setLocalStorageWithExpiration("pokemon", pokemon,this.state.timeToExpired)
            this.setPokemonState(this.getLocalStorage(pokemon))
        })
       }
       else if (this.state.pokemon === "") {
        this.setPokemonState(this.getLocalStorage("pokemon"))
       }
    } 
    
render(){
    const pokemon = (this.state.pokemon && this.state.pokemon.types);
    const pokemonAbilities = (this.state.pokemon && this.state.pokemon.abilities);
    return( 
        <div className="bgBodyImage">       
            <Wrapper className=".container border border-danger rounded  w-75 m-1 mt-4 mx-auto BasePokedex" >  
            {/*NAME, ORDER , ABILITIES , ZONES ,  MOVES, EVOLUTIONS*/}
                <div className="row mt-2 ">
                    <div className={ !pokemon ? "col-4 bg-warning m-2 ml-4 border border-light rounded" : "col-4 m-2 ml-4 border border-light rounded "+ pokemon[0].type.name}>
                        <Title>{this.state.pokemon.name}</Title>
                        <Title><img src={iconPokebal} alt="icon pokeball" width="50"/> {this.state.pokemon.order}</Title>  
                        <Title>Type(s) : {!pokemon ? "No Data" : pokemon.map((info) => info.type.name + " ")}</Title>
                    </div>
        
                    <div className={!pokemon ? "col-3 bg-warning m-2 ml-4 border border-light rounded " : "col-3 m-2 ml-4 border border-light rounded "+ pokemon[0].type.name}>
                        <Title>Abilities :</Title>
                        {!pokemonAbilities ? <p>No Data</p> : pokemonAbilities.map((info ,index) => {      
                            return <A  href={info.ability.url} key={index} >{info.ability.name} </A>
                        })}
                    </div>
                    {/*
                    <div className={this.state.pokemon.types === undefined ? "col-3 bg-warning m-2 ml-4 border border-light rounded" : "col-3 m-2 ml-4 border border-light rounded "+this.state.pokemon.types[0].type.name }>
                        <button onClick={this.setZones} >Zones </button>
                        <button onClick={this.setMoves}>Moves</button>
                        <button onClick={this.setEvolution}>Evolutions </button>
                    </div>
                */}
                </div>
                {/*IMAGE AND STATS*/}
                <div className="row mb-2">
                    <div className={!pokemon ? "col-3 bg-warning ml-4 mb-2 border border-light rounded" : "col-3 ml-4 mb-2 border border-light rounded "+ pokemon[0].type.name }>
                        <Img src={this.state.pokemon.sprites === undefined ? wallpaperpikachu : this.state.pokemon.sprites.front_default} alt={this.state.pokemon.name}/>
                    </div>
                    <div className={!pokemon ? "col-5 bg-warning ml-4 mb-2 border border-light rounded": "col-5 ml-4 mb-2 border border-light rounded "+ pokemon[0].type.name}>
                        { Array.isArray(this.state.pokemon.stats) && this.state.pokemon.stats.length ? <Chart height={300} width={450} data={this.state.pokemon.stats}/> : <Title>no data</Title> }
                    </div>
                    <div className="col">
                        <button className="btn btn-info border-light rounded w-75 " onClick={this.handleRandomPokemon}>Random Pokemon</button>
                        <Form className='mt-2' onSubmit={this.handleSearch}>
                            <input className="form-control w-75" type="search" placeholder="Name or Nro" aria-label="Search" onChange={this.handleChange}/>
                            <input className="btn btn-dark mt-2 w-75"  type="submit" value="HERE WE GO!"/>
                        </Form>
                    </div>
                    
                </div>     
            </Wrapper>
            <div style={{display:"inline-block", width: "80%", marginLeft: "12%", marginTop: "2%"}}>
                
                    {this.state.moves ? <Moves data={this.state.pokemon.moves} /> : ""}
                    {this.state.showEvolution ? <Evolutions data={this.state.pokemon.id} /> : ""}
                    {this.state.showZones ? <Zones data={this.state.pokemon.id} /> : ""}
                
            </div>
        </div>

    )
}


}
export default MainPage