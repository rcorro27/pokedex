import React, { Component } from 'react'
import styled from 'styled-components'

class Zones extends Component{
    constructor(props){
        super(props)
        this.state={
            moves:"",
        }
    }

    render(){
        console.log("Moves dans le data de pokemon : ",this.props.data)
        return(
           
                
                <div style={{width: "30%", height: "40vh" , overflow : "scroll", display:"inline-block", backgroundColor:"green"}}>
                    <h1>Zones</h1>
                   {/*<ul>
                        {this.props.data.map((moves,index) => {return <li style={{ textDecoration: "none"}} key={index}>{moves.move.name}</li>})}
                    </ul>*/}
                </div>
           
        )
    }
}
export default Zones 
