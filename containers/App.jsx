import React, { Component, PropTypes } from "react"
import { bindActionCreators}from 'redux'
import { connect } from 'react-redux'
import * as LoginAction from '../actions/login'
import * as TweetAction from '../actions/tweet'
import Header from '../components/Header'
import TweetArea from '../components/TweetArea'

class App extends Component {
    render() {
        console.log(this.props)
        return(<div>
            <Header/>
            <button onClick={this.props.actions.loginAsync} id="loginButton">ログイン</button>
            <TweetArea newTweet={this.props.actions.tweetAsync}/>
        </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        flg: state.login.flg
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(Object.assign({}, LoginAction, TweetAction),  dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)