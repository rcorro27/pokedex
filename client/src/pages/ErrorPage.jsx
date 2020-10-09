import React, {Component} from 'react'

 class ErrorPage extends Component {
    constructor(props){
        super(props)
        this.state={
            error: false,
            errorMesage : ""
        }
    }
    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ errorS: true });
        // You can also log the error to an error reporting service
        //logErrorToMyService(error, info);
      }


    render(){
        if (this.state.error === true) {
            return(
                
                <div>
                     <h1>pokemon not found</h1> 
                </div>
    
            )
        }
        return this.props.children;
       
    }
 }
 export default ErrorPage