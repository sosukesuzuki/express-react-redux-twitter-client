/**
 * Created by suzuki on 2017/01/20.
 */
import React, {Component, PropTypes} from 'react'

export default class TLdata extends Component {
    render(){
        return (
            <div className="tweet">
                <img src={this.props.profile_image_url} width="50" height="50"/>
                <h2>{this.props.name}</h2>
                <h3>{this.props.screen_name}</h3>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

TLdata.propTypes = {
    profile_image_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    screen_name : PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}