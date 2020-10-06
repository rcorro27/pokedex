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
        <Wrapper className=".container border border-danger rounded bg-danger" >
            <Title>Welcome Young Adventured</Title>    
            <h3 className="bg-warning w-50 border border-warning rounded m-1">Name :{this.state.pokemon.name}</h3>  
            {/*<Wrapper className="list-group w-50">
                {(this.state.pokemon ==='') ? '' : this.state.pokemon.results.map((info,index) => {      
                return <A className="list-group-item list-group-item-action w-25 rounded shadow-sm" href={info.url} key={index} >{info.name} </A>
                })}
            </Wrapper>*/}
            <div>
                
                 <Img className="img-thumbnail" src={this.state.pokemon.sprites === undefined ? "undefined" : this.state.pokemon.sprites.front_default} alt={this.state.pokemon.name}/>
                 <Title>Order :{this.state.pokemon.order}</Title>
                 <div className="bg-light w-25">
<h3>Stats :</h3>

                 <table className="border border-dark rounded">
                     <thead>
                      <tr>
                        <th>Name</th>
                         <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        { this.state.pokemon.stats === undefined ? <td>No data</td> : this.state.pokemon.stats.map((info, index) => { 
                           return(
                            
                           <td >{info.stat.name}</td>
                           
                          
                            )
                         })}
                         </tr>
                    </tbody>
                        
                    
                    <tfoot>
                    </tfoot>
                    </table>
                 
                
                  </div>
            </div>
                 <Title>Type : {this.state.pokemon.types === undefined ? <p>No Data</p> : this.state.pokemon.types[0].type.name}</Title>
                <div>
                    <h2>Abilities :</h2>
                    {this.state.pokemon.abilities === undefined ? <p>No Data</p> : this.state.pokemon.abilities.map((info ,index) => {      
                        return <A className="list-group-item list-group-item-action w-25 rounded shadow-sm" href={info.ability.url} key={index} >{info.ability.name} </A>
                    })}
                </div>    
                <div>
                    <h1>Moves :</h1>
                    {this.state.pokemon.moves === undefined ? <p>No Data</p> : this.state.pokemon.moves.map((info, index)=> {
                        return <A className="list-group-item list-group-item-action w-25 rounded shadow-sm" href={info.move.url} key={index} >{info.move.name} </A>

                    })}    
                </div>            
        
                 

            
        </Wrapper>
    )
}


}
export default MainPage