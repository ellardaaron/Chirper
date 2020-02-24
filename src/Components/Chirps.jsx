import React, { Component } from 'react'
import ChirpPost from './ChirpPost'
import PropTypes from 'prop-types'

export class Chirps extends Component {
    render() {
        return this.props.chirps.map((chirp) => (
        <ChirpPost key={chirp.id} chirp={chirp}/>
        ));
    }
}

//PropTypes
Chirps.propTypes = {
    chirps: PropTypes.array.isRequired
}

export default Chirps
