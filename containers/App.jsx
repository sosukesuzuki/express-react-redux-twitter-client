import React, { Component, PropTypes } from "react"
import { bindActionCreators}from 'redux'
import { connect } from 'react-redux'
import * as LoginAction from '../actions/login'
import * as TweetAction from '../actions/tweet'
import * as GetJsonAction from '../actions/getjson'
import Header from '../components/Header'
import TweetArea from '../components/TweetArea'
import UserProfile from '../components/UserProfile'

let n = 0
class App extends Component {
    constructor(props){
        super(props)
        this.props.actions.getMyProfileAsync()
    }

    componentDidMount(){
        console.log(this.props)
        console.log("componentDidMount props!")
    }

  render() {
        console.log(this.props)
        console.log("render!!!!")
        n++
        return(<div>
            <Header/>
            <button onClick={this.props.actions.loginAsync} id="loginButton">ログイン</button>
            <TweetArea newTweet={this.props.actions.tweetAsync}/>
            <UserProfile MyProfile={n === 1 ? {image_url: 'おうんちうんち', name: 'お名前', screen_name: 'うんち', description: 'ご説明うんち', location: '場所うんち'} : this.props.profile.myProfile}/>
        </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    console.log("logged state!")
    return {
        flg: state.login.flg,
        profile: state.getMyProfile
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(Object.assign({}, LoginAction, TweetAction, GetJsonAction),  dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)