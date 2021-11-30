import React, { Component } from 'react'
import loading from '../../src/ajax-loader.gif'
import "../App.css"
export default class Loading extends Component {
    render() {
        return (
            <div className="text-center d-flex justify-content-center align-center align-content-center vh-100">
                <img className="image-width"src={loading} alt="loading"/ >
            </div>
        )
    }
}
