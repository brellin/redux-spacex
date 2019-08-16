import React from 'react'
import { connect } from 'react-redux'

const Rocket = props => props.rocket.links.flickr_images.map(url => <img src={url} />)

const mapStateToProps = state => {
    return {
        rocket: state.rocket
    }
}

export default connect(mapStateToProps)(Rocket)
