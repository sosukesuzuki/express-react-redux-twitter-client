/**
 * Created by suzuki on 2017/01/20.
 */
import React, {Component, PropTypes} from 'react'

export default class TLdata extends Component {
    constructor(props){
        super(props)
        this.retweet = this.retweet.bind(this);
        this.favorite = this.favorite.bind(this);
    }
    retweet(){
        this.props.rt(this.props.id_str)
    }

    favorite(){
        this.props.fav(this.props.id_str)
    }

    render(){
        return (
            <div className="tweet">
                <img src={this.props.profile_image_url} width="50" height="50"/>
                <h2>{this.props.name}</h2>
                <h3>{this.props.screen_name}</h3>
                <p>{this.props.text}</p>
                <button onClick={this.retweet}>リツイート</button>
                <button onClick={this.favorite}>お気に入り</button>
            </div>
        )
    }
}

TLdata.propTypes = {
    id_str: PropTypes.number.isRequired,
    profile_image_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    screen_name : PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rt: PropTypes.func.isRequired,
    fav: PropTypes.func.isRequired
}