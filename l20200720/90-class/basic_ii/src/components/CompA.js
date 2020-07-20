import React, { Component } from 'react'
import classes from './Person.module.css'
class CompA extends Component {
    render() {
        //console.log(this.props)
        const stlObj = {
            color: 'gold',
            backgroundColor: 'black',
            fontSize: '72px'
        }

        return (
            <>
                <h1 style={stlObj}>I am class component</h1>
                <p className={classes.btn}>{this.props.title}</p>
                <h1 className={classes.btn}>{this.props.children}</h1>
                <hr />
            </>
        )
    }
}

export default CompA