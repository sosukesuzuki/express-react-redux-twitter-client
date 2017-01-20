/**
 * Created by suzuki on 2017/01/20.
 */
import React, {Component, PropTypes} from 'react'
import TLdata from './TLdata'

export default class TL extends Component {
    constructor(props){
        super(props)
        console.log(props.TimeLineJson)
        console.log("チムぃね")
    }

    render(){
        const listItems = this.props.TimeLineJson.map((tweet) =>
            <li><TLdata id_str={tweet.id_str} profile_image_url={tweet.user.profile_image_url} name={tweet.user.name} screen_name={"@" + tweet.user.screen_name} text={tweet.text} rt={this.props.rt} fav={this.props.fav}/></li>
        )
        return(
            <div id="HomeTimeLine">
                <ul>{listItems}</ul>
            </div>
        )
    }

    
}

TL.propTypes = {
    TimeLineJson: PropTypes.array.isRequired,
    rt: PropTypes.func.isRequired,
    fav: PropTypes.func.isRequired
}