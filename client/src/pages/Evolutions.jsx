import React, { Component } from 'react'
import styled from 'styled-components'

class Evolutions extends Component{
    constructor(props){
        super(props)
        this.state={
            moves:"",
        }
    }

    render(){
        console.log("Moves dans le data de pokemon : ",this.props.data.id)
        return(
            
                
                <div style={{width: "30%", height: "40vh", display:"inline-block", backgroundColor: "red", overflow: "scroll"}}>
                    <h1>Evolutions</h1>
                    <h4>{this.props.data}</h4>
                        {/*this.props.data.map((evolutions,index) => {return <li style={{ textDecoration: "none"}} key={index}>{evolutions.name}</li>})*/}
                </div>
           
        )
    }
}
export default Evolutions 
