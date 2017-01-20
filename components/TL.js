/**
 * Created by suzuki on 2017/01/20.
 */
import React, {Component, PropTypes} from 'react'
import TLdata from './TLdata'

export default class TL extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const listItems = this.props.TimeLineJson.map((tweet) =>
            <li><TLdata id_str={tweet.id_str} profile_image_url={tweet.user.profile_image_url} name={tweet.user.name} screen_name={"@" + tweet.user.screen_name} text={tweet.text} rt={this.props.rt} fav={this.props.fav}/></li>
        )
        return(
            <div className="HomeTimeLine">
                <button onClick={this.props.updateTimeLine} id="TLButton">TL更新</button>
                <ul>{listItems}</ul>
            </div>
        )
    }

    
}

TL.propTypes = {
    TimeLineJson: PropTypes.array.isRequired,
    rt: PropTypes.func.isRequired,
    fav: PropTypes.func.isRequired,
    updateTimeLine: PropTypes.func.isRequired
}