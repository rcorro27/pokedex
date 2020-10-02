import React, {Component} from 'react'
import styled from 'styled-components'

const Wrapper=styled.div.attrs( props =>({

    className : props.className
}))``
const H1= styled.h1.attrs(props =>({
    className : props.className
}))``

const Form= styled.form.attrs(props =>({
    className: props.className

}))``
const Input = styled.input.attrs(props =>({
    className: props.className,
    type : props.type,
    placeholder : props.placeholder,

}))``

class Search extends Component{
    render(){

        return(
            <Wrapper>
                <Form className='form-inline'>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search Pokemon </button>
                </Form>
            </Wrapper>
           
        )
    }
}
export default Search