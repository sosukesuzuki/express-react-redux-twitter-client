/**
 * Created by suzuki on 2017/01/18.
 */
import React, {Component, PropTypes} from 'react'

export default class UserProfile extends Component {
    constructor(props){
        super(props)
        console.log(props)
        console.log("logged props 2")
        this.state = {
            image_url: '',
            name: 'お名前',
            screen_name: 'スクリーンネーム',
            description: 'ご説明',
            location: 'お場所'
        }
    }
    render(){
        return(
            <div id="userBox">
                <img  src={this.props.MyProfile.image_url} width="50" height="50" id="profile_image"/>
                <h2 id="name">{this.props.MyProfile.name}</h2>
                <h3 id="screen_name">{"@" + this.props.MyProfile.screen_name}</h3>
                <p id="description">{this.props.MyProfile.description}</p>
                <p id="location">{this.props.MyProfile.location}</p>
            </div>
        )
    }
}

UserProfile.propTypes = {
    MyProfile: PropTypes.any.isRequired
}