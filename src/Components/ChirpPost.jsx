import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ChirpPost extends Component {
    render() {
        return (
            <div className="text-white bg-danger">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <p>{this.props.chirp.userName}{":"}</p>
                        </div>
                        <div className="col-10">
                            <p> {this.props.chirp.chirp}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



//PropTypes
ChirpPost.propTypes = {
    chirp: PropTypes.object.isRequired
}

export default ChirpPost
