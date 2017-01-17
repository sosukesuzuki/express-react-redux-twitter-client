/**
 * Created by suzuki on 2017/01/17.
 */
import React, { Component, PropTypes } from 'react'

export default class TweetArea extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: 'tweet Text'
        };
        this.changeText = this.changeText.bind(this);
        this.sendTweet = this.sendTweet.bind(this);
    }

    changeText(event){
        this.setState({value: event.target.value})
    }

    sendTweet(event){
        this.props.newTweet(this.state.value)
        this.setState({value: ''})
    }

    render () {
        console.log(this.props)
        return(
            <div id="tweetBox">
                    <textarea id="tweetMessage" value={this.state.value} onChange={this.changeText}/>
                    <button onClick={this.sendTweet}>ツイーヨ</button>
            </div>
        )
    }

}

TweetArea.propTypes = {
    newTweet: PropTypes.func.isRequired
}