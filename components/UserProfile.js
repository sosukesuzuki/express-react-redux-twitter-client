/**
 * Created by suzuki on 2017/01/18.
 */
import React, {Component, PropTypes} from 'react'

export default class UserProfile extends Component {
    constructor(props){
        super(props)
        console.log(props)
        console.log("logged props 2")
    }
    render(){
        return(
            <div id="userBox">
                <div id="imageAndNameAndScreenname">
                    <img  src={this.props.MyProfile.profile_image_url} width="50" height="50" id="profile_image"/>
                    <h2 id="name">{this.props.MyProfile.name}</h2>
                    <h3 id="screen_name">{"@" + this.props.MyProfile.screen_name}</h3>
                </div>
                <div id="descriptionAndLocation">
                    <p id="description">{this.props.MyProfile.description}</p>
                    <p id="location">{this.props.MyProfile.location}</p>
                </div>
            </div>
        )
    }
}

UserProfile.propTypes = {
    MyProfile: PropTypes.any.isRequired
}