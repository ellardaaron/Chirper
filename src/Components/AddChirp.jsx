import React, { Component } from 'react'
import ChirpMP3 from './chirps.mp3'



export class AddChirp extends Component {
    state = {
        userName: '',
        chirp: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addChirp(this.state.userName, this.state.chirp);
        this.setState({ chirp: '', userName: '' });

        const now = new Date();

        console.log(now);

    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onClick = () => {
        var ChirpChirp = new Audio(ChirpMP3);
        ChirpChirp.play();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} >
                <input
                    className="col-2 p-3 mb-3 mt-3 bg-danger text-white"
                    type="text"
                    name="userName"
                    placeholder="Username"
                    value={this.state.userName}
                    onChange={this.onChange}
                ></input>

                <input
                    className="col-9 p-3 mb-3 mt-3 bg-danger text-white"
                    type="text"
                    name="chirp"
                    placeholder="Chirp"
                    value={this.state.chirp}
                    onChange={this.onChange}
                ></input>


                <button onClick={this.onClick} className=" col-1 btn btn-danger p-3 mb-4 mt-3">Submit</button>
            </form>
        )
    }
}

export default AddChirp
