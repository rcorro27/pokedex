import React, {Component} from 'react'
import styled from 'styled-components'
import { VictoryPie, VictoryLabel, VictoryTheme, VictoryBar, VictoryChart, VictoryPolarAxis } from 'victory'


class Chart extends Component{


render(){
    //SP = special-Attack
    //SD = special-Defense 
    // function a creer avec des paramettres pour creer un tableau avec les stats 
    // chart a changer des components a containers 
    
    return(
        <VictoryPie
            height={this.props.height}
            width={this.props.width}
            colorScale={["red", "yellow", "blue", "orange", "pink", "green" ]}
            data={[
            { x: 1, y: this.props.data[0].base_stat, label: this.props.data[0].stat.name+" "+this.props.data[0].base_stat },
            { x: 2, y:this.props.data[1].base_stat, label: this.props.data[1].stat.name+" "+this.props.data[1].base_stat },
            { x: 3, y:this.props.data[2].base_stat, label: this.props.data[2].stat.name+" "+this.props.data[2].base_stat },
            { x: 4, y:this.props.data[3].base_stat, label: this.props.data[3].stat.name+" "+this.props.data[3].base_stat },
            { x: 5, y:this.props.data[4].base_stat, label: this.props.data[4].stat.name+" "+this.props.data[4].base_stat },
            { x: 6, y:this.props.data[5].base_stat, label: this.props.data[5].stat.name+" "+this.props.data[5].base_stat }
            ]}
        />
        
    )
}

}
export default Chart