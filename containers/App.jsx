import React, { Component, PropTypes } from "react"
import { bindActionCreators}from 'redux'
import { connect } from 'react-redux'
import * as LoginAction from '../actions/login'
import * as TweetAction from '../actions/tweet'
import * as GetMyProfileAction from '../actions/getMyProfile'
import * as GetHomeTimeLineAction from '../actions/getHomeTimeLine'
import * as RTAndFavAction from '../actions/retweetAndFav'
import Header from '../components/Header'
import TweetArea from '../components/TweetArea'
import UserProfile from '../components/UserProfile'
import TL from '../components/TL'

let n = 0
let m = 0
class App extends Component {
    constructor(props){
        super(props)
        this.props.actions.getMyProfileAsync()
        this.props.actions.getHomeTimeLineAsync()
    }
  render() {
      const mock = {
          text: "",
          user: {
              profile_image_url: "",
              name: "",
              screnn_name: ""
          }
      }
        console.log(this.props)
        console.log("render!!!!")
        n++
        m++
        return(<div>
            <div id="container">
                <Header/>
                <div className="left">
                    <TweetArea newTweet={this.props.actions.tweetAsync} updateHomeTimeLine={this.props.actions.getHomeTimeLineAsync}/>
                    <UserProfile MyProfile={n === 1 ? {profile_image_url: 'おうんちうんち', name: 'お名前', screen_name: 'うんち', description: 'ご説明うんち', location: '場所うんち'} : this.props.profile.myProfile}/>
                    <button onClick={this.props.actions.logoutAsync}>ログアウト</button>
                </div>
             </div>
            <TL TimeLineJson={m === 1 ? [mock] : this.props.homeTimeLine} rt={this.props.actions.rtTweetAsync} fav={this.props.actions.favoriteTweetAsync}/>
        </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    console.log("logged state!")
    return {
        homeTimeLine: state.getHomeTimeLine.homeTimeLine,
        flg: state.login.flg,
        profile: state.getMyProfile

    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(Object.assign({}, LoginAction, TweetAction, GetMyProfileAction, GetHomeTimeLineAction, RTAndFavAction),  dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

