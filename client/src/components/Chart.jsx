import React, {Component} from 'react'
import styled from 'styled-components'
import { VictoryPie  } from 'victory'


class Chart extends Component{


render(){
    //SP = special-Attack
    //SD = special-Defense
    
    return(
        <VictoryPie
            colorScale={["red", "yellow", "blue", "orange", "pink", "green" ]}
            data={[
            { x: 1, y: this.props.data[0].base_stat, label: this.props.data[0].stat.name },
            { x: 2, y:this.props.data[1].base_stat, label: this.props.data[1].stat.name },
            { x: 3, y:this.props.data[2].base_stat, label: this.props.data[2].stat.name },
            { x: 4, y:this.props.data[3].base_stat, label: this.props.data[3].stat.name },
            { x: 5, y:this.props.data[5].base_stat, label: this.props.data[5].stat.name },
            { x: 6, y:this.props.data[4].base_stat, label: this.props.data[4].stat.name }
            ]}
        />
    )
}

}
export default Chart